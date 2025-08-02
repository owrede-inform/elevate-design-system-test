import { type CSSResult, type TemplateResult } from 'lit';
import { Size } from '../../size.js';
import { CustomFormField } from '../../fields/custom-form-field.js';
/**
 * A radio component that allows the user to select a single option from a group.
 *
 * @since 0.0.1
 * @status Preliminary
 *
 * @slot - The radio elements
 */
export declare class RadioGroupComponent extends CustomFormField<string | number | boolean> {
    static styles: CSSResult;
    /**
     * If set to `true`, one child has to be checked for the group to be valid
     */
    required: boolean;
    private _size;
    get size(): Size;
    /**
     * Size of the Radio (Group) Component.
     * Add the size attribute to the Field's Group to change the radios’ size.
     * @default 'medium'
     */
    set size(value: Size);
    private _value?;
    get value(): string | number | boolean | undefined;
    /**
     * The radio's value.
     */
    set value(value: string | number | boolean);
    focus(): void;
    render(): TemplateResult;
    private emit;
    private getOptionElements;
    private handleBlur;
    private handleKeyDown;
    private handleLabelClick;
    private handleOptionClick;
    private handleOptionsAssign;
    private hasSlotAssignedNodes;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-radio-group': RadioGroupComponent;
    }
}
