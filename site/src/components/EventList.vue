<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import EventCard from "@/components/EventCard.vue";

const scrollContainer = ref(null);
let autoScrollInterval = null;

const upcoming = ref([
  {
    imgSrc: "/images/event_sample_1.png",
    title: "Event 1 Promo Marketing",
    description: "dummy info here",
    href: "event1",
    date: "2024-09-01",
    location: "New York, NY",
  },
  {
    imgSrc: "/images/event_sample_2.png",
    title: "Event 2 Promo Marketing",
    description: "dummy info here",
    href: "event2",
    date: "2024-10-01",
    location: "Los Angeles, CA",
  },
  // Add more events
]);

const past = ref([
  {
    imgSrc: "/images/event_sample_1.png",
    title: "Event 1 Promo Marketing",
    description: "dummy info here",
    href: "event1",
    date: "2023-09-01",
    location: "New York, NY",
  },
  {
    imgSrc: "/images/event_sample_2.png",
    title: "Event 2 Promo Marketing",
    description: "dummy info here",
    href: "event2",
    date: "2023-10-01",
    location: "Los Angeles, CA",
  },
  // Add more events
]);


function getScrollConstants() {
  const innerLists = scrollContainer.value.querySelectorAll(".inner-list");
  const firstListRect = innerLists.item(0).getBoundingClientRect();

  const cardWidth = scrollContainer.value
    .querySelector(".inner-list")
    .querySelector(".event-card")
    .getBoundingClientRect().width;

  const categories = scrollContainer.value.querySelectorAll(".category");
  const cat1Rect = categories.item(0).getBoundingClientRect();
  const cat2Rect = categories.item(1).getBoundingClientRect();
  const cat1Width = cat1Rect.width;
  const cat2Width = cat2Rect.width;

  const xPad = 8.0; // 0.5rem
  const cardGap = 16.0; // 1.0rem
  const listGap = 16.0; // 1.0rem
  const offset1 = cat1Width;
  const offset2 = offset1 + firstListRect.width;
  const offset3 = offset2 + listGap + cat2Width;

  return {
    xPad,
    cardGap,
    listGap,
    cardWidth,
    offset1,
    offset2,
    offset3,
    currentScroll: scrollContainer.value.scrollLeft,
    maxScroll:
      scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth,
  };
}

// Could probably do with some refactoring but at least this works
function scrollLeft() {
  const sc = getScrollConstants();

  let x = 0;
  if (sc.currentScroll <= sc.xPad) {
    // Wrap around
    x = sc.maxScroll;
  } else if (sc.currentScroll < sc.offset1) {
    // Within 'upcoming' category label
    x = 0;
  } else if (sc.currentScroll >= sc.offset1 && sc.currentScroll < sc.offset2) {
    // Within 'upcoming' list
    const listOffset = sc.currentScroll - sc.offset1;
    const currCard = Math.floor(listOffset / (sc.cardWidth + sc.cardGap));
    const cardStart = sc.offset1 + currCard * (sc.cardWidth + sc.cardGap);

    if (currCard == 0) {
      x = 0;
    } else if (sc.currentScroll > Math.trunc(cardStart + sc.xPad)) {
      // Scroll to card start
      x = cardStart;
    } else {
      // Scroll to previous card
      x =
        currCard > 1
          ? sc.offset1 + (currCard - 1) * (sc.cardWidth + sc.cardGap)
          : 0;
    }
  } else if (sc.currentScroll >= sc.offset2 && sc.currentScroll < sc.offset3) {
    // Within 'past' category label
    x = sc.offset1 + (upcoming.value.length - 1) * (sc.cardWidth + sc.cardGap);
  } else {
    // Within 'past' list
    const listOffset = sc.currentScroll - sc.offset3;
    const currCard = Math.floor(listOffset / (sc.cardWidth + sc.cardGap));
    const cardStart = sc.offset3 + currCard * (sc.cardWidth + sc.cardGap);

    if (currCard == 0) {
      // Scroll to label
      x = sc.offset2;
    } else if (sc.currentScroll > Math.trunc(cardStart + sc.xPad)) {
      // Scroll to card start
      x = cardStart;
    } else {
      // Scroll to previous card
      x =
        currCard > 1
          ? sc.offset3 + (currCard - 1) * (sc.cardWidth + sc.cardGap)
          : sc.offset2;
    }
  }

  scrollContainer.value.scroll(x + sc.xPad, 0);
}

function scrollRight() {
  const sc = getScrollConstants();

  let x = 0;
  if (sc.currentScroll >= sc.maxScroll) {
    // Wrap around
    x = 0;
  } else if (sc.currentScroll < sc.offset1) {
    // Within 'upcoming' category label
    x = sc.offset1 + sc.cardWidth + sc.cardGap;
  } else if (sc.currentScroll >= sc.offset1 && sc.currentScroll < sc.offset2) {
    // Within 'upcoming' list
    const listOffset = sc.currentScroll - sc.offset1;
    const nextCard = Math.floor(listOffset / (sc.cardWidth + sc.cardGap)) + 1;

    if (nextCard === upcoming.value.length) {
      // Scroll to next 'past' category label
      x = sc.offset2 + sc.listGap;
    } else {
      // Scroll to next card
      x = sc.offset1 + nextCard * (sc.cardWidth + sc.cardGap);
    }
  } else if (sc.currentScroll >= sc.offset2 && sc.currentScroll < sc.offset3) {
    // Within 'past' category label
    x = sc.offset3 + sc.cardWidth + sc.cardGap;
  } else {
    // Within 'past' list
    const listOffset = sc.currentScroll - sc.offset3;
    const nextCard = Math.floor(listOffset / (sc.cardWidth + sc.cardGap)) + 1;

    if (nextCard === past.value.length) {
      // Scroll back to start
      x = 0;
    } else {
      // Scroll to next card
      x = sc.offset3 + nextCard * (sc.cardWidth + sc.cardGap);
    }
  }

  scrollContainer.value.scroll(x + sc.xPad, 0);
}

function pauseScrolling() {
  clearInterval(autoScrollInterval);
}

function resumeScrolling() {
  autoScrollInterval = setInterval(() => {
    scrollRight();
  }, 3000);
}

onMounted(() => {
  resumeScrolling();

  // Cleanup interval on component unmount
  onUnmounted(() => {
    clearInterval(autoScrollInterval);
  });
});
</script>


<template>
  <div class="outer" 
    @mouseover="pauseScrolling"
    @mouseleave="resumeScrolling"
  >
    <div class="top">
      <span class="heading">Events</span>
      <div class="scroll-controls">
        <button @click="scrollLeft">
          <img src="/images/arrow_left.svg" alt="left" />
        </button>
        <button @click="scrollRight">
          <img src="/images/arrow_right.svg" alt="right" />
        </button>
      </div>
    </div>
    <div
      class="event-list"
      ref="scrollContainer"
    >
      <div class="category">upcoming</div>
      <div class="inner-list">
        <EventCard
          v-for="event in upcoming"
          :key="event.href"
          :imgSrc="event.imgSrc"
          :title="event.title"
          :description="event.description"
          :href="event.href"
          :date="event.date"
          :location="event.location"
        />
      </div>
      <div class="category">past</div>
      <div class="inner-list">
        <EventCard
          v-for="event in past"
          :key="event.href"
          :imgSrc="event.imgSrc"
          :title="event.title"
          :description="event.description"
          :href="event.href"
          :date="event.date"
          :location="event.location"
        />
      </div>
    </div>
  </div>
</template>


<style scoped>
@font-face {
  font-family: Roxborough;
  src: url('../../../fonts/RoxboroughCF-Bold.otf');
}

* {
  font-family: Roxborough;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f4f4f9;
  height: 100vh;
  overflow: hidden;
}

.main-container {
  position: relative;
}

/* Container styles */
.list-container {
  margin: 0 !important;
  padding: 0 !important;
}

/* Slogan styles */
.slogan {
  background-color: rgba(233, 233, 233, 0.9);
  height: 6.89vw;
  border-bottom: 1px solid #888;
  color: #484848;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.063em;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
}

.slogan span {
  border-right: 0.1em solid #888;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* Typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Blinking cursor */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #888;
  }
}

/* About section styles */
.about {
  background-color: rgba(233, 233, 233, 0.9);
  border-bottom: 1px solid #888;
  color: #484848;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
}

.committee-images {
  display: flex;
  width: 50%;
  justify-content: space-between;
  padding: 1rem;
}

.committee-image {
  width: 32%;
  height: auto;
}

.card-container {
  flex-grow: 1;
  padding: 1rem;
}

.card-title {
  font-size: 2.4em !important;
  color: #e29062;
  margin-top: 0.5vw;
}

.card-text {
  font-size: 1.3em !important;
  font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
  line-height: 2em !important;
  margin-top: 1.1vw;
}

.card {
  font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
}

.outer {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #888;
  width: 100%;
  padding: 4vh;
  background-color: var(--off-white);
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heading {
  font-family: Roxborough;
  color: #697caa;
  font-size: 2.4em;
  font-weight: bold;
}

.scroll-controls {
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
}

.scroll-controls > button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 1rem;
  width: 2.5rem;
}

.event-list {
  display: flex;
  overflow: hidden;
  padding: 1.5rem 0.5rem;
  scroll-behavior: smooth;
  width: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.event-list::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.category-list {
  display: flex;
  gap: 0.1rem;
}

.inner-list {
  display: flex;
  gap: 1rem;
  flex: 1;
}

.category {
  font-family: Roxborough;
  font-size: 1.3rem;
  color: #e59ecd;
  padding: 1vh;
}

/* Responsive styles */
@media only screen and (max-width: 1280px) {
  .heading {
    font-size: 2em !important;
  }

  .category {
    font-size: 1.1em !important;
  }
}

@media only screen and (max-width: 768px) {
  .slogan {
    font-size: 1em;
    height: auto;
    padding: 10px;
  }

  .about {
    flex-direction: column;
  }

  .committee-images {
    width: 100%;
  }

  .committee-image {
    width: 100%;
    margin-bottom: 1rem;
  }

  .card-container {
    margin: 0;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .card-title {
    font-size: 1.5em !important;
  }

  .card-text {
    font-size: 1em !important;
  }

  .card {
    font-size: 1em;
  }

  .event-list {
    flex-direction: column;
  }

  .inner-list {
    flex-direction: column;
    align-items: center;
  }

  .inner-list > * {
    width: 100%;
  }

  .category {
    font-size: 1em !important;
  }
}
</style>

