//This is the main view we will be editing and putting components in

<template>
  <HeaderSection />
  <OurTeam />
  <InstagramPosts />
  <Footer />
</template>

<script setup>
  import OurTeam from '@/components/OurTeam.vue'
  import InstagramPosts from '@/components/InstagramPosts.vue';
  import HeaderSection from '@/components/HeaderSection.vue'
  import Footer from '@/components/Footer.vue'
</script>