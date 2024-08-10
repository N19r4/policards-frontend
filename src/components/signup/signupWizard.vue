<script setup lang="ts">
import { ref, computed, Ref } from 'vue'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Divider from 'primevue/divider'
import Checkbox from 'primevue/checkbox'
import ToggleButton from 'primevue/togglebutton'

import TheForm from '../global/reusable/TheForm.vue'
import { wizardSteps } from './config'

import { Field, UserData } from './types'
import { useRouter } from 'vue-router'

const router = useRouter()

const validatePassword = (value: any) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  const check = regex.test(value)
  return check
    ? ''
    : 'Password must contain at least one lowercase, one uppercase, one numeric, and minimum 8 characters'
}

const validateRepeatPassword = (value: any) => {
  const check = value === userData.value.find(({ name }) => name === 'password')!.value
  return check ? '' : 'Passwords do not match'
}

const validateEmail = (value: any) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const check = regex.test(value)
  return check ? '' : 'Invalid email format'
}

const validateRequired = (value: string | boolean) => {
  if (!value) return 'This field is required'
  const check = value.toString().trim() !== ''
  return check ? '' : 'This field is required'
}

const userData: Ref<UserData[]> = ref([
  {
    name: 'email',
    value: '',
    invalid: false,
    validations: [validateEmail, validateRequired],
    message: '',
  },
  {
    name: 'username',
    value: '',
    invalid: false,
    validations: [validateRequired],
    message: '',
  },
  {
    name: 'fullName',
    value: '',
    invalid: false,
    validations: [validateRequired],
    message: '',
  },
  {
    name: 'password',
    value: '',
    invalid: false,
    message: '',
    validations: [validatePassword, validateRequired],
  },
  {
    name: 'repeatPassword',
    value: '',
    invalid: false,
    message: '',
    validations: [validateRepeatPassword, validateRequired],
  },
  {
    name: 'topics',
    value: [],
    invalid: false,
    message: '',
  },
  {
    name: 'accept',
    value: false,
    invalid: false,
    validations: [validateRequired],
    message: '',
  },
])

const stepIndex = ref(1)
const currentStep = computed(() => wizardSteps.value.find((step) => step.index === stepIndex.value)!)

const goBack = () => {
  if (stepIndex.value !== 1) stepIndex.value--
  else router.push('/login')
}

const checkIfValid = () => {
  const stepFields = currentStep.value.fields
  const fields = userData.value.filter(({ name }) => stepFields.find((field) => field.model === name))
  fields.forEach((field) => {
    field.invalid = false
    field.message = ''
    if (!field.validations) return
    field.validations.forEach((validation) => {
      const message = validation(field.value as string)
      if (message) {
        field.invalid = true
        field.message = message
      }
    })
  })

  if (fields.some(({ invalid }) => invalid)) return
  if (stepIndex.value === 3) return router.push('/flashcard-sets')
  stepIndex.value++
}

const getUserDataForField = (field: Field) => {
  return userData.value.find(({ name }) => name === field.model)!
}
</script>

<template>
  <TheForm :title="currentStep.title" :subtitle="currentStep.subtitle">
    <template #content>
      <div v-for="field in currentStep.fields" :key="field.label">
        <div class="flex align-items-center gap-2">
          <IconField v-if="field.type === 'text'">
            <InputText
              v-model="getUserDataForField(field).value"
              :placeholder="field.label"
              :invalid="getUserDataForField(field).invalid"
            />
            <InputIcon :class="field.icon" />
          </IconField>

          <Password
            v-if="field.type === 'password' && field.model === 'password'"
            v-model="getUserDataForField(field).value"
            :placeholder="field.label"
            feedback
            toggleMask
            :invalid="getUserDataForField(field).invalid"
            :onpaste="(e: any) => e.preventDefault()"
          >
            <template #footer>
              <Divider />
              <ul class="pl-2 ml-2 my-0 leading-normal">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </Password>
          <Password
            v-if="field.type === 'password' && field.model === 'repeatPassword'"
            v-model="getUserDataForField(field).value"
            :placeholder="field.label"
            :feedback="false"
            toggleMask
            :invalid="getUserDataForField(field).invalid"
            :onpaste="(e: any) => e.preventDefault()"
          />

          <div v-if="field.type === 'chips'" class="card flex flex-wrap gap-2">
            <ToggleButton
              v-for="option in field.options"
              v-model="option.chosen"
              :onLabel="option.name"
              :offLabel="option.name"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
            />
          </div>
          <div v-if="field.type === 'checkbox'" class="flex items-center gap-2">
            <Checkbox :id="field.model" v-model="getUserDataForField(field).value" :name="field.model" :value="false" />
            <label style="width: 219px" :for="field.model">{{ field.label }}</label>
          </div>

          <i
            v-if="getUserDataForField(field).invalid"
            v-tooltip="getUserDataForField(field).message"
            class="pi pi-exclamation-circle text-red-500"
          ></i>
        </div>
      </div>
      >
    </template>
    <template #footer>
      <div class="flex gap-3">
        <Button
          :label="wizardSteps.find(({ index }) => index === stepIndex)?.prevStepText"
          icon="pi pi-arrow-left"
          @click="goBack()"
        />
        <Button
          :label="wizardSteps.find(({ index }) => index === stepIndex)?.nextStepText"
          icon="pi pi-arrow-right"
          iconPos="right"
          @click="checkIfValid"
        />
      </div>
    </template>
  </TheForm>
</template>

<style lang="scss" scoped></style>
