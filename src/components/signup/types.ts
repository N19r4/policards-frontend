export type Field = {
    type: string;
    label: string;
    model: string;
    icon?: string;
    options?: { name: string; code: string, chosen?: boolean }[];
}

export type WizardStep = {
    index: number;
    title: string;
    subtitle: string;
    fields: Field[];
    prevStep: number | null;
    nextStep: number | null;
    prevStepText: string;
    nextStepText: string;
}

export type UserData = {
    name: string;
    value: string | string[];
    invalid: boolean;
    message: string;
    validations: Array<(value: string | string[]) => string>;
}