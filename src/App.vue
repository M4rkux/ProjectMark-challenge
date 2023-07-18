<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import SalesPipeline from './views/SalesPipeline.vue'
import NotFound from './views/NotFound.vue'

const routes = {
  '/': SalesPipeline,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[(currentPath.value.slice(1) || '/') as keyof typeof routes] || NotFound
})
</script>

<template>
  <Header />
  <component :is="currentView" />
</template>

