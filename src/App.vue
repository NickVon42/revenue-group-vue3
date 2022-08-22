<script setup lang="ts">
import BrowsePage from '@/views/BrowsePage.vue';
import CreatePage from '@/views/CreatePage.vue';
import { ref } from 'vue';

const tabs = {
  CreatePage,
  BrowsePage
} as const

type TabKeys = keyof typeof tabs

const currentTab = ref<TabKeys>('CreatePage')

function switchTab(nextTab: TabKeys) {
  currentTab.value = nextTab
}

</script>

<template>

  <div class="m-10">
    <button @click="currentTab = 'CreatePage'" class="text-blue-800 text-xl mr-8"
      :class="{ [' text-gray-500']: currentTab !== 'CreatePage' }">Create</button>
    <button @click="currentTab = 'BrowsePage'" class="text-blue-800 text-xl"
      :class="{ [' text-gray-500']: currentTab !== 'BrowsePage' }">Browse</button>
  </div>


  <Transition name="slide-fade">
    <KeepAlive>
      <component :is="tabs[currentTab]" @switch-tab="switchTab" />
    </KeepAlive>
  </Transition>

</template>

<style>
.slide-fade-enter-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-7px);
  opacity: 0;
}
</style>

<!-- <template>
  <div class="m-10">
    <RouterLink to="/" class="text-blue-800 text-lg mr-8">Create</RouterLink>
    <RouterLink to="/browse" class="text-blue-800 text-lg">Browse</RouterLink>
  </div>
  <RouterView></RouterView>
</template> -->