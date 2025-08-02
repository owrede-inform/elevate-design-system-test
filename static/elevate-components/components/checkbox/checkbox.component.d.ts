import { type TemplateResult, type CSSResult } from 'lit';
import { Size } from '../size.js';
import { CustomFormControl } from '../fields/custom-form-control.js';
export type CheckboxChangeEvent = CustomEvent<{
    checked: boolean;
}>;
/**
 * A checkbox allows the user to toggle an option on or off.
 *
 * Unlike the standard HTML checkbox it will change the value property depending on the checked status. So
 * it can be treated like other form fields.
 *
 * @since 0.0.15
 * @status Unstable
 *
 * @slot - The checkbox's label.
 * @slot help-text - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
 *
 * @event {CheckboxChangeEvent} change - Emitted when the checked state changes.
 * @event blur - Emitted when the checkbox loses focus.
 * @event input - Emitted when the checkbox receives input.
 *
 * @csspart form-control-help-text - The help text's wrapper.
 */
export declare class CheckboxComponent extends CustomFormControl<string | boolean | number> {
    static styles: CSSResult;
    /**
     * The checkbox's help text.
     * If you need to display HTML, use the `help-text` slot instead.
     */
    helpText: string;
    /**
     * If `true`, the checkbox will visually appear as indeterminate.
     */
    indeterminate: boolean;
    /**
     * Size of the Checkbox Component.
     * @default 'medium'
     */
    size: Size;
    private _control;
    private hasFocus;
    private _checked;
    get checked(): boolean;
    /**
     * Sets the component in a checked/activated state if true
     */
    set checked(value: boolean);
    private _checkedValue;
    get checkedValue(): string | boolean | number;
    focus(): void;
    /**
     * The value returned by the value property if the control is checked
     * @default true
     */
    set checkedValue(value: string | boolean | number);
    get value(): string | boolean | number | undefined;
    /**
     * This will be the `checkedValue` if the checkbox is checked, otherwise `undefined`
     */
    set value(value: string | boolean | number | undefined);
    /**
     * This will hide the label, a checkbox's label is highly recommended for Accessibility reasons.
     */
    hideLabel: boolean;
    render(): TemplateResult;
    private hasNamedSlot;
    private handleBlur;
    private handleChange;
    private handleInput;
    private updateCheckedStatus;
    private handleFocus;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-checkbox': CheckboxComponent;
    }
}
