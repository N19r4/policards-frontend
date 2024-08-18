import { WizardStep } from './types'

export const wizardSteps: WizardStep[] = [
  {
    index: 1,
    title: 'Hello there!',
    subtitle: "Let's get to know you",
    fields: [
      {
        type: 'text',
        label: 'Full Name',
        model: 'fullName',
        icon: 'pi pi-user',
      },
      {
        type: 'text',
        label: 'Email',
        model: 'email',
        icon: 'pi pi-envelope',
      },
      {
        type: 'text',
        label: 'Username',
        model: 'username',
        icon: 'pi pi-at',
      },
    ],
    prevStep: null,
    nextStep: 2,
  },
  {
    index: 2,
    title: `Hello there!`,
    subtitle: "Let's secure your account",
    fields: [
      {
        type: 'password',
        label: 'Password',
        model: 'password',
      },
      {
        type: 'password',
        label: 'Repeat Password',
        model: 'repeatPassword',
      },
    ],
    prevStep: 1,
    nextStep: 3,
  },
  {
    index: 3,
    title: 'Welcome aboard!',
    subtitle: 'Select your interests',
    fields: [
      {
        type: 'chips',
        label: 'Topics',
        model: 'topics',
        options: [
          { name: 'Technology', code: 'tech' },
          { name: 'Science', code: 'sci' },
          { name: 'Art', code: 'art' },
          { name: 'Music', code: 'music' },
          { name: 'Sports', code: 'sports' },
        ],
      },
    ],
    prevStep: 2,
    nextStep: null,
  },
]
