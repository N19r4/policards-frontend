<script setup lang="ts">
import { ref } from 'vue'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

import TheForm from '../global/reusable/TheForm.vue'
import { useRouter } from 'vue-router'

const credentials = ref({
  username: '',
  password: '',
})

const router = useRouter()
</script>

<template>
  <TheForm title="Welcome back!" subtitle="Log in to continue">
    <template #content>
      <IconField>
        <InputText v-model="credentials.username" placeholder="email or username" />
        <InputIcon class="pi pi-user" />
      </IconField>

      <Password
        v-model="credentials.password"
        :feedback="false"
        placeholder="password"
        toggleMask
        :onpaste="(e: any) => e.preventDefault()"
      />

      <Button label="Log in" icon="pi pi-arrow-right" iconPos="right" />
      <a href="#">Forgot password?</a>
    </template>
    <template #footer>
      <Button label="Create an account" outlined class="w-full" @click="router.push('/sign-up')" />
    </template>
  </TheForm>
</template>

<style lang="scss" scoped>
@use '../../../public/styles/colors' as *;

p {
  color: $SUBTITLE;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
}
</style>
