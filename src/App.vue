<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { TheMenu } from './components/global'

const publicPages = ['/login', '/signup']

const currentPath = ref('')

onMounted(() => (currentPath.value = useRoute().path))
</script>

<template>
  <TheMenu v-if="!publicPages.includes(currentPath)" />
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
@use 'public/styles/font';
@use 'public/styles/global';
</style>
