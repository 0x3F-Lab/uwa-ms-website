<script setup>
import { ref } from 'vue';
import ModalComponent from './EventModal.vue';

const props = defineProps(["imgSrc", "title", "description", "href", "date", "location"]);

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

// Convert Zulu time (UTC) to local time
const convertToLocalTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
};

const localDate = convertToLocalTime(props.date);

</script>


<template>
  <div>
    <a @click.prevent="openModal" class="event-card">
      <img :src="props.imgSrc" :alt="props.description" />
      <div class="overlay"></div>
      <h2>{{ props.title }}</h2>
    </a>
    <ModalComponent :show="showModal" @close="closeModal">
      <h2 class="title">{{ props.title }}</h2>
      <span class="details" v-if="props.date">{{ localDate }}</span><span class="details" v-if="props.location"> - {{ props.location }}</span>
      <p class="description">{{ props.description }}</p>
      <a v-if="props.href" :href="props.href" target="_n" class="more-btn">More info</a>
    </ModalComponent>
  </div>
</template>


<style scoped>

.details {
  color: #E59ECD;
  width: 100%;
}

.title  {
  padding: 5px;
}

.description {
  padding: 5px;
  margin-bottom: 10px;
}

.more-btn {
  font-size: 1rem;
  background: #E59ECD;
  border: solid 1px var(--grey);
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
}

.event-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1.6;
  width: 20rem;
  border: solid 1px var(--grey);
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  padding: 1rem;
}

.event-card > img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  z-index: 1;
}

.event-card > h2, .details {
  z-index: 10;
  max-width: 80%;
  text-align: center;
  transition: transform 0.3s ease;
}

.event-card > h2 {
  color: var(--off-white);
}

.event-card .details {
  color: var(--off-white);
}

.event-card:hover > img {
  transform: scale(1.05);
}

.event-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.event-card:hover .overlay {
  opacity: 1;
}
</style>
