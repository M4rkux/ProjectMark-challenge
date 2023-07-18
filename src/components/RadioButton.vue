<script setup lang="ts">

defineProps<{ label: string, isChecked: boolean }>()
</script>

<template>
  <div class="radio-button">
    <label class="radio-button__label-wrapper">
      <input
        type="radio"
        class="radio-button__input"
        :checked="isChecked"
        @click="$event.preventDefault()"
      >
      <span class="radio-button__label">{{ label }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.radio-button {
  &__input {
    @apply appearance-none bg-white border-2 border-opacity-20 border-slate-500 rounded-[4px] w-4 h-4 cursor-pointer;

    &:checked {
      @apply bg-blue-500 border-transparent;
    }
  }

  &__label-wrapper {
    @apply flex flex-row items-center cursor-pointer;
  }

  &__label {
    @apply ml-3 capitalize;
  }
}
</style>
