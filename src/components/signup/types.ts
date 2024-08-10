export type UserData = {
    value: string | { name: string; code: string, chosen?: boolean }[] | boolean | any;
    invalid: boolean;
    validations?: Array<(value: any) => string>;
    message: string;
}

export interface Field extends UserData {
    type: string;
    label: string;
    model: string;
    icon?: string;
}

export interface WizardStep {
    index: number;
    title: string;
    subtitle: string;
    fields: Field[];
    prevStep: number | null;
    nextStep: number | null;
    prevStepText: string;
    nextStepText: string;
}