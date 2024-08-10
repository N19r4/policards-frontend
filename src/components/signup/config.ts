import { ref, Ref } from "vue";
import { WizardStep } from "./types";

export const wizardSteps: Ref<WizardStep[]> = ref([
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
        },
        {
          type: 'text',
          label: 'email',
          model: 'email',
          icon: 'pi pi-envelope',
        },
        {
          type: 'text',
          label: 'username',
          model: 'username',
          icon: 'pi pi-at',
        },
      ],
      prevStep: null,
      nextStep: 2,
      prevStepText: 'Go back',
      nextStepText: 'Next'
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
        },
        {
          type: 'password',
          label: 'repeat password',
          model: 'repeatPassword',
        },
        {
          type: 'checkbox',
          label: 'I agree to the terms and conditions.',
          model: 'accept'
        }
      ],
      prevStep: 1,
      nextStep: 3,
      prevStepText: '',
      nextStepText: 'Next'
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
          options: [
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
      nextStepText: 'Register'
    },
  ])