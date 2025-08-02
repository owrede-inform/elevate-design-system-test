import { LitElement, type PropertyValues } from 'lit';
import type { FormControl, FormControlValue } from './form-control.js';
import { Subject } from '@inform-elevate/elevate-cdk';
export declare abstract class FormControlIntl {
    readonly changes: Subject<void>;
    abstract readonly messageBadInput: string;
    abstract readonly messageValueMissing: string;
    abstract messagePatternMismatch(pattern: string): string;
    abstract messageRangeOverflow(maximum: number): string;
    abstract messageRangeUnderflow(minimum: number): string;
    abstract messageStepMismatch(stepSize: number): string;
    abstract messageTooLong(maximum: number): string;
    abstract messageTooShort(minimum: number): string;
    abstract messageTypeMismatch(actual: string, expected: string): string;
}
export declare class DefaultFormControlIntl extends FormControlIntl {
    readonly messageBadInput = "Invalid input.";
    readonly messageValueMissing = "Missing required";
    readonly messagePatternMismatch: (pattern: string) => string;
    readonly messageRangeOverflow: (maximum: number) => string;
    readonly messageRangeUnderflow: (minimum: number) => string;
    readonly messageStepMismatch: (stepSize: number) => string;
    readonly messageTooLong: (maximum: number) => string;
    readonly messageTooShort: (minimum: number) => string;
    readonly messageTypeMismatch: (actual: string, expected: string) => string;
}
export type FormControlValidationState = Record<keyof ValidityStateFlags | string, boolean | undefined | string>;
type ValidationFn = (value: FormControlValue, control: FormControl) => FormControlValidationState;
/**
 * Define basic form control properties and connect to form element
 *
 * @internal
 *
 * @event change - Triggers if the value is changed
 * @event input - Emitted when the element control receives input.
 * @event blur - Trigger on focus out
 */
export declare abstract class CustomFormControl<Type = FormControlValue> extends LitElement implements FormControl<Type> {
    /**
     * If set to `true`, user can't interact with the component.
     */
    disabled: boolean;
    /** Makes the control a required field. */
    required: boolean;
    validators: ValidationFn[];
    abstract value?: Type;
    protected intl: FormControlIntl;
    private _initialValue?;
    private readonly _internals;
    private _subscriptions;
    constructor();
    /**
     * Declare the component a form associated control
     */
    static get formAssociated(): boolean;
    private _name?;
    get name(): string | undefined;
    /**
     * Form field name, used in form data
     */
    set name(value: string | undefined);
    private _touched;
    get touched(): boolean;
    set touched(value: boolean);
    /**
     * Associated form if available. This is the nearest form on the same (Shadow) DOM
     */
    get form(): HTMLFormElement | undefined;
    get validationMessage(): string;
    /**
     * Return the current validity state
     *
     * @url https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/validity
     */
    get validity(): ValidityState;
    get willValidate(): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changed: PropertyValues): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    protected updateFormValue(): void;
    protected validateFormValue(value: Type | undefined): FormControlValidationState;
    private getFormValidityAndMessage;
}
export {};
