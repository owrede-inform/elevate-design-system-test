export type FormControlValue = string | number | boolean | (string | number | boolean)[];
export interface FormControl<Type = FormControlValue> {
    form: HTMLFormElement | undefined;
    value?: Type;
    name?: string;
    disabled: boolean;
}
