<template>
  <div class ="home">
    <img alt="ReciPlease-Logo" src="@/assets/reciplease_logo.png" width="125" height="125">
    <HelloWorld msg="Hello World - Willkommen bei ReciPlease"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
