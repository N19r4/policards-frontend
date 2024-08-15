<script setup lang="ts">
import { TheMenu } from './components'
</script>

<template>
<<<<<<< Updated upstream
  <!-- <TheMenu /> -->
  <RouterView />
=======
  <TheMenu v-if="!isPagePublic" />
  <main>
    <RouterView />
  </main>
>>>>>>> Stashed changes
</template>

<style lang="scss">
@use '../public//styles/font';
@use '../public//styles/global';
</style>
