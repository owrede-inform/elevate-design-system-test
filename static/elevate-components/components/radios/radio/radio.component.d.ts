import { type CSSResult, type TemplateResult } from 'lit';
import { Size } from '../../size.js';
import { CustomFormControl } from '../../fields/custom-form-control.js';
/**
 * A radio component that allows the user to select a single option from a group.
 *
 * Be aware that the radio is not a form field by itself. It needs a radio group.
 *
 * @since 0.0.21
 * @status Complete
 *
 * @slot - The radio's label.
 */
export declare class RadioComponent extends CustomFormControl<string | boolean | number> {
    static styles: CSSResult;
    private hasFocus;
    /**
     * Size of the Radio Component.
     * Add the size attribute to the Field's Group to change the radios’ size.
     * @default 'medium'
     */
    size: Size;
    private _checked;
    get checked(): boolean;
    set checked(value: boolean);
    /**
     * The radio's value. When selected, the field's group will get this value.
     */
    value?: string | boolean | number;
    /**
     * This will hide the label, a radio's label is highly recommended for Accessibility reasons.
     */
    hideLabel: boolean;
    constructor();
    private handleBlur;
    private handleFocus;
    private handleClick;
    connectedCallback(): void;
    private setInitialAttributes;
    updated(changedProperties: Map<string, unknown>): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-radio': RadioComponent;
    }
}
