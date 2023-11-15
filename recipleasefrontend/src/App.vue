<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="ReciPlease logo" class="logo" src="@/assets/reciplease_logo.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Hello World - Willkommen bei ReciPlease" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
