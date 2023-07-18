<script setup lang="ts">
import { Theme } from 'src/types'
import { bgColor, borderColor, textColor } from '../common/theme'
import ProgressBar from './ProgressBar.vue'

defineProps<{ title: string, theme: Theme, isCustom: boolean}>()
</script>

<template>
  <div class="card-pipeline" :class="bgColor(theme, '50')">
    <div class="card-pipeline__header">
      <h2 class="card-pipeline__title" :class="textColor(theme, '900')">
          {{ title }}
      </h2>

      <button class="card-pipeline__delete-button" v-if="isCustom" title="Delete the column" @click="$emit('delete-card', title)">
        [delete]
      </button>
  
      <ProgressBar :progress="20 + Math.floor(Math.random() * 60)" :theme="theme"  />
    </div>
  
    <div class="card-pipeline__box" :class="borderColor(theme, '500')">

    </div>
    <div class="card-pipeline__shadow"></div>
  </div>
</template>

<style scoped lang="scss">
.card-pipeline {
  @apply rounded-xl py-2 px-1 h-96 relative mx-2 min-w-[200px] flex flex-col;

  &__header {
    @apply px-2 relative;
  }

  &__title {
    @apply text-base uppercase font-semibold mb-3;
  }

  &__delete-button {
    @apply absolute left-0 top-0 text-xs text-red-500 font-semibold mt-[-25px];

    &:hover {
      @apply underline cursor-pointer;
    }
  }

  &__box {
    @apply w-full h-40 rounded-xl;
    @apply border-solid border-2 border-opacity-10;
  }

  &__shadow {
    @apply absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent;
  }
}
</style>
