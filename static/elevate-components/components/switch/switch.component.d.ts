import { type TemplateResult } from 'lit';
import { Size } from '../size.js';
import { CustomFormControl } from '../fields/custom-form-control.js';
export type SwitchChangeEvent = CustomEvent<{
    checked: boolean;
}>;
export type SwitchTone = 'primary' | 'success';
export declare const SwitchTone: {
    Primary: SwitchTone;
    Success: SwitchTone;
};
/**
 * Switches allow the user to toggle an option on or off.
 *
 * @since 0.0.19
 * @status Stable
 *
 * @slot - The switch's label.
 * @slot help-text - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
 *
 * @event SwitchChangeEvent - Emitted when the checked state changes.
 * @event input - Emitted when the switch receives input.
 *
 * @csspart form-control-help-text - The help text's wrapper.
 */
export declare class SwitchComponent extends CustomFormControl<string | boolean | number> {
    static styles: import("lit").CSSResult;
    private hasFocus;
    private _control;
    private _checkedValue;
    private _checked;
    /**
     * The checkbox's help text.
     * If you need to display HTML, use the `help-text` slot instead.
     */
    helpText: string;
    /**
     * Allows to define the value returned if the control is checked
     */
    set checkedValue(value: string | boolean | number);
    get checkedValue(): string | boolean | number;
    /**
     * Size of the Switch Component.
     * @default 'medium'
     */
    size: Size;
    /**
     * Sets the component in a checked/activated state if true
     */
    set checked(value: boolean);
    get checked(): boolean;
    /**
     * This will be the `checkedValue` if the checkbox is checked, otherwise `undefined`
     */
    set value(value: string | boolean | number | undefined);
    get value(): string | boolean | number | undefined;
    /**
     * This will hide the label, a label is highly recommended for Accessibility reasons.
     */
    hideLabel: boolean;
    /**
     * The switch's tone (color).
     * @default 'primary'
     */
    tone: SwitchTone;
    render(): TemplateResult;
    private hasNamedSlot;
    private handleBlur;
    private handleChange;
    private handleInput;
    private updateCheckedStatus;
    private handleFocus;
    private handleKeyDown;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-switch': SwitchComponent;
    }
}
