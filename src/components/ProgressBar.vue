<script setup lang="ts">
import { Theme } from 'src/types'
import { bgColor } from '../common/theme'

defineProps<{ progress: number, theme: Theme }>()

</script>

<template>
  <div class="progress-bar" :class="bgColor(theme, '100')" :title="`${progress}%`">
    <div class="progress-bar__fill" :class="bgColor(theme, '200')" :style="`width: ${progress}%`"></div>
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  @apply w-[100px] h-6 mb-4 rounded-full overflow-hidden;

  &__fill {
    @apply rounded-full h-full;
  }
}
</style>