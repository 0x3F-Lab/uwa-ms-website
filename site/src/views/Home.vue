//This is the main view we will be editing and putting components in

<template>
  <HeaderSection />

  <OurTeam />
  <InstagramGrid />

  <Footer />
</template>

<script setup>
  import OurTeam from '@/components/OurTeam.vue'
  import InstagramGrid from '@/components/InstagramGrid.vue'
  import HeaderSection from '@/components/HeaderSection.vue'
</script>