<script setup lang="ts">
import { TheMenu } from './components/global/used-once'
</script>

<template>
  <TheMenu />
  <RouterView />
</template>

<style lang="scss">
@use '../public//styles/font';
@use '../public//styles/global';
</style>
