<template>
  <button class="button"> <slot /> </button>
</template>

<style scoped lang="scss">
.button {
  @apply bg-blue-700 text-white rounded-3xl block py-2 px-6 font-semibold;

  &:hover {
    @apply bg-blue-600;
  }

  &:active {
    @apply bg-blue-800;
  }
}
</style>