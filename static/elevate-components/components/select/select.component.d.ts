import { type TemplateResult } from 'lit';
import { Size } from '../size.js';
import { CustomFormField } from '../fields/custom-form-field.js';
interface SelectOptionItem {
    label: TemplateResult | string | ((option: SelectOptionItem) => TemplateResult | string);
    value: string | number;
}
type SelectOption = string | number | SelectOptionItem;
interface SelectOptionGroup {
    items: SelectOption[];
    label: TemplateResult | string | ((option: SelectOptionGroup) => TemplateResult | string);
}
/**
 * A select field
 *
 * @since 0.0.14
 * @status Preliminary
 *
 * @slot prefix - Prefix icon or similar element
 * @slot suffix - Suffix icon or similar element
 */
export declare class SelectComponent extends CustomFormField<string | string[]> {
    static styles: import("lit").CSSResult;
    /**
     * Add a clear button if the value is set
     */
    clearable: boolean;
    /**
     * Select placeholder text
     */
    placeholder?: string;
    /**
     * If set to `true`, the field will be invalid if empty
     */
    required: boolean;
    /**
     * Size of the control.
     * @default 'medium'
     */
    size: Size;
    private _wrappedSelect?;
    multiple: boolean;
    private _options;
    get options(): (SelectOptionItem | SelectOptionGroup)[];
    set options(value: (SelectOptionItem | SelectOptionGroup)[]);
    private _value;
    get value(): string | string[] | undefined;
    set value(value: string | string[] | undefined);
    render(): TemplateResult;
    private handleInput;
    private handleChange;
    private renderOption;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-select': SelectComponent;
    }
}
export {};
