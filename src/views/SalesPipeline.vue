<script setup lang="ts">
import { computed, ref } from 'vue'
import LevelRadioButton from '../components/LevelRadioButton.vue'
import Cards from '../components/Cards.vue'
import * as cardsConfig from '../cardsConfig.json'
import { Levels } from 'src/types'

const levels = computed(() => {
  return Object.entries(cardsConfig)
  .filter(([entry]) => entry !== 'default')
  .sort((a, b) => a[1].order - b[1].order)
  .map(([entry]) => entry)
})

const levelSelected = ref<Levels>('basic')

function selectLevel(level: Levels) {
  levelSelected.value = level;
}
</script>

<template>
  <div class="sales-pipeline">
    <div class="sales-pipeline__content">
      <h1 class="sales-pipeline__title">Please select the type of sales pipeline that best fits your company</h1>
      <div class="sales-pipeline__levels">
        <LevelRadioButton
          v-for="level in levels" 
          :key="level"
          :label="level"
          :is-checked="levelSelected === level"
          @click="selectLevel(level as Levels)"
        />
        <LevelRadioButton
          label="Custom"
          :is-checked="levelSelected === 'custom'"
          @click="selectLevel('custom')"
        />
      </div>
      <Cards :level="levelSelected" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sales-pipeline {
  @apply flex flex-col p-4;

  &__content {
    @apply bg-white rounded-2xl flex flex-col items-center py-10 w-fit min-w-full;
  }

  &__levels {
    @apply flex flex-row gap-3 mt-4 mb-8;
  }

  &__title {
    @apply text-2xl font-semibold mb-5;
  }
}
</style>
