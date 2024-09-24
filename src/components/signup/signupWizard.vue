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

import { TheForm } from '../global'

import { WizardStep } from './types'
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
  const check = value === currentStep.value.fields.find(({ model }) => model === 'password')?.value
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

const wizardSteps: Ref<WizardStep[]> = ref([
  {
    index: 1,
    title: 'Hello there!',
    subtitle: "Let's get to know you",
    fields: [
      {
        type: 'text',
        label: 'full name',
        model: 'fullName',
        icon: 'pi pi-user',
        value: '',
        invalid: false,
        validations: [validateRequired],
        message: '',
      },
      {
        type: 'text',
        label: 'email',
        model: 'email',
        icon: 'pi pi-envelope',
        value: '',
        invalid: false,
        validations: [validateEmail, validateRequired],
        message: '',
      },
      {
        type: 'text',
        label: 'username',
        model: 'username',
        icon: 'pi pi-at',
        value: '',
        invalid: false,
        validations: [validateRequired],
        message: '',
      },
    ],
    prevStep: null,
    nextStep: 2,
    prevStepText: 'Go back',
    nextStepText: 'Next',
  },
  {
    index: 2,
    title: `Hello there!`,
    subtitle: "Let's secure your account",
    fields: [
      {
        type: 'password',
        label: 'password',
        model: 'password',
        value: '',
        invalid: false,
        message: '',
        validations: [validatePassword, validateRequired],
      },
      {
        type: 'password',
        label: 'repeat password',
        model: 'repeatPassword',
        value: '',
        invalid: false,
        message: '',
        validations: [validateRepeatPassword, validateRequired],
      },
      {
        type: 'checkbox',
        label: 'I agree to the terms and conditions.',
        model: 'accept',
        value: false,
        invalid: false,
        validations: [validateRequired],
        message: '',
      },
    ],
    prevStep: 1,
    nextStep: 3,
    prevStepText: '',
    nextStepText: 'Next',
  },
  {
    index: 3,
    title: 'Welcome aboard!',
    subtitle: 'Select your interests',
    fields: [
      {
        type: 'chips',
        label: 'topics',
        model: 'topics',
        invalid: false,
        message: '',
        value: [
          { name: 'Technology', code: 'tech', chosen: true },
          { name: 'Science', code: 'sci', chosen: true },
          { name: 'Art', code: 'art' },
          { name: 'Music', code: 'music' },
          { name: 'Sports', code: 'sports' },
        ],
      },
    ],
    prevStep: 2,
    nextStep: null,
    prevStepText: '',
    nextStepText: 'Register',
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
  stepFields.forEach((field) => {
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

  if (stepFields.some(({ invalid }) => invalid)) return
  if (stepIndex.value === 3) return router.push('/flashcard-sets')
  stepIndex.value++
}
</script>

<template>
  <TheForm :title="currentStep.title" :subtitle="currentStep.subtitle">
    <template #content>
      <div v-for="field in currentStep.fields" :key="field.label">
        <div class="flex align-items-center gap-2">
          <IconField v-if="field.type === 'text'">
            <InputText v-model="field.value" :placeholder="field.label" :invalid="field.invalid" />
            <InputIcon :class="field.icon" />
          </IconField>

          <Password
            v-if="field.type === 'password' && field.model === 'password'"
            v-model="field.value"
            :placeholder="field.label"
            feedback
            toggleMask
            :invalid="field.invalid"
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
            v-model="field.value"
            :placeholder="field.label"
            :feedback="false"
            toggleMask
            :invalid="field.invalid"
            :onpaste="(e: any) => e.preventDefault()"
          />

          <div v-if="field.type === 'chips'" class="card flex flex-wrap gap-2">
            <ToggleButton
              v-for="option in field.value"
              v-model="option.chosen"
              :onLabel="option.name"
              :offLabel="option.name"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
            />
          </div>
          <div v-if="field.type === 'checkbox'" class="flex items-center gap-2">
            <Checkbox :id="field.model" v-model="field.value" :name="field.model" :value="false" />
            <label style="width: 219px" :for="field.model">{{ field.label }}</label>
          </div>

          <i v-if="field.invalid" v-tooltip="field.message" class="pi pi-exclamation-circle text-red-500"></i>
        </div>
      </div>
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
