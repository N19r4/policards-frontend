<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { TheMenu } from './components/global/used-once'

const publicPages = ['/login', '/signup']

const currentPath = ref('')

onMounted(() => (currentPath.value = useRoute().path))
</script>

<template>
  <TheMenu v-if="!publicPages.includes(currentPath)" />
  <RouterView />
</template>

<style lang="scss">
@use '../public//styles/font';
@use '../public//styles/global';
</style>
