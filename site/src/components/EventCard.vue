<script setup>
const props = defineProps(["imgSrc", "description", "href"]);
</script>

<template>
  <a :href="'/events/' + props.href" class="event-card">
    <img :src="props.imgSrc" :alt="props.description" />
    <h2>{{ props.description }}</h2>
  </a>
</template>

<style scoped>
.event-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1.6;
  width: 20rem;
  border: solid 1px var(--grey);
  text-decoration: none;
}

.event-card > img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-card > h2 {
  color: var(--off-white);
  z-index: 10;
  max-width: 80%;
  text-align: center;
}
</style>
