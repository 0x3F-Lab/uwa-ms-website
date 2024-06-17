<script setup>
import { ref } from "vue";
import EventCard from "@/components/EventCard.vue";

const scrollContainer = ref(null);

// TODO: fetch from CMS
const upcoming = ref([
  {
    imgSrc: "/images/event_sample_1.png",
    description: "Event 1 Promo Marketing",
    href: "event1",
  },
  {
    imgSrc: "/images/event_sample_2.png",
    description: "Event 2 Promo Marketing",
    href: "event2",
  },
  {
    imgSrc: "/images/event_sample_3.png",
    description: "Event 3 Promo Marketing",
    href: "event3",
  },
  {
    imgSrc: "/images/event_sample_1.png",
    description: "Event 1 Promo Marketing",
    href: "event1",
  },
  {
    imgSrc: "/images/event_sample_2.png",
    description: "Event 2 Promo Marketing",
    href: "event2",
  },
  {
    imgSrc: "/images/event_sample_3.png",
    description: "Event 3 Promo Marketing",
    href: "event3",
  },
]);

const past = ref([
  {
    imgSrc: "/images/event_sample_1.png",
    description: "Event 1 Promo Marketing",
    href: "event1",
  },
  {
    imgSrc: "/images/event_sample_2.png",
    description: "Event 2 Promo Marketing",
    href: "event2",
  },
  {
    imgSrc: "/images/event_sample_3.png",
    description: "Event 3 Promo Marketing",
    href: "event3",
  },
  {
    imgSrc: "/images/event_sample_1.png",
    description: "Event 1 Promo Marketing",
    href: "event1",
  },
  {
    imgSrc: "/images/event_sample_2.png",
    description: "Event 2 Promo Marketing",
    href: "event2",
  },
  {
    imgSrc: "/images/event_sample_3.png",
    description: "Event 3 Promo Marketing",
    href: "event3",
  },
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
</script>

<template>
  <div class="outer">
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
    <div class="event-list" ref="scrollContainer">
      <div class="category">upcoming</div>
      <div class="inner-list">
        <EventCard
          v-for="event in upcoming"
          :key="event.href"
          :imgSrc="event.imgSrc"
          :description="event.description"
          :href="event.href"
        />
      </div>
      <div class="category">past</div>
      <div class="inner-list">
        <EventCard
          v-for="event in past"
          :key="event.href"
          :imgSrc="event.imgSrc"
          :description="event.description"
          :href="event.href"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
  font-weight: bold; /* Consistent with .slogan */
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
  overflow: auto;
  padding: 1.5rem 0.5rem;
  scroll-behavior: smooth;
  width: 100%;
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
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: #e59ecd;
  padding: 1vh;
}

/* hacky as fuck but using flex doesn't work due to bug in firefox */
.category:nth-child(3) {
  margin-left: 1rem;
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
  .heading {
    font-size: 1.5em !important;
  }
  .category {
    font-size: 1em !important;
  }
}

@media (max-width: 600px) {
  .event-list {
    flex-direction: column;
    padding: 0;
  }

  .scroll-controls {
    display: none;
  }

  .category-list {
    flex-direction: column;
  }

  .inner-list {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .inner-list > * {
    width: 100%;
  }

  .category {
    writing-mode: unset;
    transform: none;
  }

  .category:nth-child(3) {
    margin-left: 0;
    margin-top: 1rem;
  }
}
</style>