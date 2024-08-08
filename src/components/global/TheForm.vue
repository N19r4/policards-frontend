<script lang="ts" setup>
import Card from 'primevue/card'

const props = defineProps<{
  title: string
  subtitle: string
}>()
</script>
<template>
  <Card class="form p-5">
    <template #title>
      <h2>{{ props.title }}</h2>
    </template>
    <template #subtitle
      ><h3>{{ props.subtitle }}</h3>
    </template>
    <template #content>
      <div class="flex flex-column gap-2 my-6">
        <slot name="content"></slot>
      </div>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.form {
  width: 400px;
  height: 600px;
}
</style>
