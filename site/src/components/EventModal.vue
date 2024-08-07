<!-- ModalComponent.vue -->
<template>
    <div v-if="show" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { watch } from 'vue';
  
  const props = defineProps(["show"]);
  const emits = defineEmits(["close"]);
  
  const closeModal = () => {
    emits("close");
  };
  
  watch(() => props.show, (newVal) => {
    if (newVal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    text-align: center;
    background: #E9E9E9;
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    .modal {
        margin: 2vw;
    }
  }
  </style>
  