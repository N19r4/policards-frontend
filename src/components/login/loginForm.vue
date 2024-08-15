<script setup lang="ts">
import { ref } from 'vue'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

import TheForm from '../global/TheForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const credentials = ref({
  username: '',
  password: '',
})
</script>

<template>
  <TheForm title="Welcome back!" subtitle="Log in to continue">
    <template #content>
      <IconField>
        <InputIcon class="pi pi-user" />
        <InputText id="username" v-model="credentials.username" placeholder="email or username" />
      </IconField>
      <Password
        id="password"
        v-model="credentials.password"
        type="password"
        :feedback="false"
        placeholder="password"
        toggleMask
      />

      <Button label="Log in" icon="pi pi-arrow-right" iconPos="right" />
      <p>Forgot password?</p>
    </template>
    <template #footer>
      <Button label="Create an account" @click="router.push('/sign-up')" outlined />
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
