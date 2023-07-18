<script setup lang="ts">
import Button from './Button.vue'
import Step from './Step.vue'
</script>

<template>
  <div class="header">
    <img src="/logo.svg" class="logo" alt="Logo" />
    <div class="header__steps">
      <Step :order="1" label="Sales Pipeline Settings" :is-active="true" />
      <Step :order="2" label="Opportunity Details Settings" :is-active="false" />
    </div>
    <Button>Next</Button>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply py-5 px-6 flex flex-row justify-between items-center;

  &__steps {
    @apply flex flex-row gap-20;
  }
}
</style>