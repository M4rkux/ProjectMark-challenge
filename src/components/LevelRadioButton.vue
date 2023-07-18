<script setup lang="ts">
import RadioButton from './RadioButton.vue'

defineProps<{ label: string, isChecked: boolean }>()
</script>

<template>
  <div class="level-radio-button" :class="{'level-radio-button--selected': isChecked}">
    <RadioButton :label="label" :isChecked="isChecked" />
  </div>
</template>

<style scoped lang="scss">
.level-radio-button {
  @apply relative p-3 border-2 border-solid rounded-xl w-[180px] border-slate-500 border-opacity-10 cursor-default;

  &:hover:not(.level-radio-button--selected) {
    @apply bg-slate-100 cursor-pointer;
  }

  &--selected {
    @apply border-blue-500 opacity-100;

    &::after {
      content: "";
      transform: translateX(-50%);

      @apply border-l-[7px] border-l-transparent;
      @apply border-r-[7px] border-r-transparent;
      @apply border-t-[7px] border-t-white;
      @apply absolute bottom-[-7px] left-1/2 w-0 h-0 border-solid;
    }

    &::before {
      content: "";
      transform: translateX(-50%);

      @apply border-l-[10px] border-l-transparent;
      @apply border-r-[10px] border-r-transparent;
      @apply border-t-[10px] border-t-blue-500;
      @apply absolute bottom-[-10px] left-1/2 w-0 h-0 border-solid;
    }
  }

  &__input {
    @apply rounded-xl;
  }

  &__label {
    @apply pl-3;
  }
}

</style>
