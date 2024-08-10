<script lang="ts" setup>
import Card from 'primevue/card'

const props = defineProps<{
  title: string
  subtitle: string
}>()
</script>
<template>
  <div class="flex align-items-center">
    <img src="/assets/images/login-image.jfif" />
    <Card class="form p-5" style="margin: 0 auto">
      <template #title>
        <h2>{{ props.title }}</h2>
      </template>
      <template #subtitle
        ><h3>{{ props.subtitle }}</h3>
      </template>
      <template #content>
        <div class="flex flex-column gap-3 my-6">
          <slot name="content"></slot>
        </div>
      </template>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 400px;
  height: 600px;
}
</style>
