<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   
    <div class="wrapper">
   

      <nav class="flex justify-center bg-gray-200 p-5">
        <RouterLink class="me-4" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
