<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'

const count = ref(0)
</script>

<template>
  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <div class="logo">
        <img src="../assets/vue.svg" alt="vue logo" />
      </div>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
        deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
        neque quas!
      </p>
      <Button type="button" @click="count++">count is {{ count }}</Button>
    </template>
  </Card>
</template>

<style scoped lang="scss"></style>
