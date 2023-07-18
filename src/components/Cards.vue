<script setup lang="ts">
import { computed, reactive } from 'vue'
import Card from './Card.vue'
import * as cardsConfig from '../cardsConfig.json'
import { Levels, Theme } from 'src/types'

const props = defineProps<{ level: Levels}>()
const level = computed(() => props.level)

const customCardsConfig = reactive({ content: [...cardsConfig.expert.content ]})

const isCustom = computed(() => level.value === 'custom')

const cards = computed(() => {
  if (isCustom.value && customCardsConfig.content.length > 0) {
    return customCardsConfig.content
  }
  return cardsConfig[level.value as keyof typeof cardsConfig].content
})

function restoreCustom() {
  customCardsConfig.content = [...cardsConfig.expert.content]
}

function deleteFromCustom(title: string) {
  customCardsConfig.content = customCardsConfig.content.filter(content => content.title !== title)
}

</script>

<template>
  <div>
    <button v-if="isCustom" class="cards__restore-button" @click="restoreCustom()">
      [restore default]
    </button>
    <div class="cards">
      <Card 
        v-for="({ title, theme }, index) in cards" 
        :title="title" :theme="(theme as Theme)" 
        :key="`${title}-${index}`"
        :isCustom="isCustom"
        @delete-card="deleteFromCustom(title)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cards {
  @apply flex flex-row p-10;

  &__restore-button {
    @apply text-blue-700 font-semibold ml-12;

    &:hover {
      @apply underline cursor-pointer;
    }
  }
}
</style>
