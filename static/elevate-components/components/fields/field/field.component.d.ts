import { LitElement, type TemplateResult } from 'lit';
import { Size } from '../../size.js';
/**
 * Outer frame of a form field, with the label and help text.
 *
 * @since 0.0.22
 * @status Unstable
 *
 * @intl {DefaultFormControlIntl}
 *
 * @slot - Form control
 * @slot label - Field label. Alternatively, you can use the `help-text` attribute.
 * @slot help-text - Text that describes how to use the form field. Alternatively, you can use the `help-text` attribute.
 * @slot status - Show a status (like character count and limit)
 */
export declare class FieldComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The forms label text, use slot for complex labels
     */
    label?: string;
    /**
     * A descriptive text for the select, use the help-text slot for HTML.
     */
    helpText?: string;
    /**
     * Show required indicator on label
     */
    required: boolean;
    /**
     * Show label / help text as disabled, this will not modify the control.
     */
    disabled: boolean;
    /**
     * Show label / help text in error state, this will not modify the control.
     */
    invalid: boolean;
    /**
     * Group mode for multiple form controls with own labels. This will replace the
     * internal `label` element with a `fieldset` and `legend` avoiding nested label elements.
     */
    group: boolean;
    /**
     * Visually hide field label
     */
    hideLabel: boolean;
    /**
     * Size of the field.
     * @default 'medium'
     */
    size: Size;
    private _filledHelpText;
    private _filledStatus;
    private handleLabelClick;
    private focusFirstControl;
    render(): TemplateResult;
    protected updateFieldSlotStatus(name: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-form-field': FieldComponent;
    }
}
