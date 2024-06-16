<script setup>
import { ref } from "vue";
import EventCard from "@/components/EventCard.vue";

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
]);
</script>

<template>
  <div class="outer" id="events">
    <span class="heading">Events</span>
    <div class="event-list">
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

.heading {
  font-family: Roxborough;
  color: #697caa;
  font-size: 2.4em;
  font-weight: bold; /* Consistent with .slogan */
}

.event-list {
  display: flex;
  overflow: auto;
  padding: 1.5rem 0.5rem;
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
