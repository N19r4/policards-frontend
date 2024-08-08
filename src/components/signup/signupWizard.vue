<script setup lang="ts">
import { ref, computed, Ref } from 'vue'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import MultiSelect from 'primevue/multiselect'
import Divider from 'primevue/divider'

import TheForm from '../global/TheForm.vue'
import { wizardSteps } from './config'

import { Field, UserData } from './types'

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

const validateRequired = (value: string) => {
  const check = value.trim() !== ''
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
    value: ['Science'],
    invalid: false,
    validations: [validateRequired],
    message: '',
  },
])

const stepIndex = ref(1)
const currentStep = computed(() => wizardSteps.find((step) => step.index === stepIndex.value)!)

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
            <InputIcon :class="field.icon" />
            <InputText
              v-model="getUserDataForField(field).value"
              :placeholder="field.label"
              :invalid="getUserDataForField(field).invalid"
            />
          </IconField>
          <Password
            v-if="field.type === 'password' && field.model === 'password'"
            v-model="getUserDataForField(field).value"
            :placeholder="field.label"
            :feedback="true"
            :toggleMask="true"
            :invalid="getUserDataForField(field).invalid"
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
            :toggleMask="true"
            :invalid="getUserDataForField(field).invalid"
            :onpaste="(e: any) => e.preventDefault()"
          ></Password>
          <MultiSelect
            v-if="field.type === 'chips'"
            v-model="getUserDataForField(field).value"
            :options="field.options"
            optionLabel="name"
            filter
            placeholder="Select topics"
            :maxSelectedLabels="3"
            class="w-full md:w-80"
            :invalid="getUserDataForField(field).invalid"
          />
          <i
            v-if="getUserDataForField(field).invalid"
            v-tooltip="getUserDataForField(field).message"
            class="pi pi-exclamation-circle text-red-500"
          ></i>
        </div>
      </div>
      ></template
    >
    <template #footer>
      <div class="flex gap-3">
        <Button icon="pi pi-arrow-left" @click="stepIndex--" />
        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="checkIfValid" />
      </div>
    </template>
  </TheForm>
</template>

<style lang="scss" scoped></style>
