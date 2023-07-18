<script setup lang="ts">
defineProps<{ order: number, isActive: boolean, label: string }>()
</script>

<template>
  <div class="step">
    <div class="step__content">
      <div class="step__box" :class="{'step__box--active' : isActive}">{{ order }}</div>
      <span class="step__label">
        {{ label }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step {
  @apply flex flex-row justify-center;

  &__content {
    @apply flex flex-col items-center;
  }

  &__label {
    @apply text-xs;
  }

  &__box {
    @apply w-14 h-14 rounded-2xl flex items-center justify-center mb-2 text-lg font-semibold;
    @apply border-2 border-solid border-slate-300 bg-white text-slate-500;
  }

  &__box--active {
    @apply bg-slate-800 text-white border-0;
  }
}
</style>