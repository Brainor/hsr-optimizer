<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from 'vue-router';

import AppMenu from './components/AppMenu.vue';
import TopBar from './components/TopBar.vue';

const menuVisible = ref(false);
</script>

<template>
  <div>
    <TopBar @toggle-menu="() => menuVisible = !menuVisible" />
  </div>

  <div>
    <AppMenu :visible="menuVisible" />
    <RouterView />
  </div>

</template>
