<template>
  <div class="container mx-auto ">
    <the-index />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import TheIndex from './pages/TheIndex.vue'

onMounted(() => {

if(localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

})
</script>
