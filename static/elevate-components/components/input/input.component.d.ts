import { Size } from '../size.js';
import type { AutoCapitalize } from '../auto-capitalize.js';
import { EnterKeyHint } from '../enter-key-hint.js';
import type { InputMode } from '../input-mode.js';
import { CustomFormField } from '../fields/custom-form-field.js';
export type InputType = 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
export declare const InputType: {
    Date: InputType;
    DateTimeLocal: InputType;
    Email: InputType;
    Number: InputType;
    Password: InputType;
    Search: InputType;
    Tel: InputType;
    Text: InputType;
    Time: InputType;
    Url: InputType;
};
/**
 * An input field
 *
 * @since 0.0.1
 * @status Preliminary
 *
 * @attribute {boolean} autofocus  -  Indicating that an element should be focused on page load
 *
 * @slot prefix - Prefix icon or similar element
 * @slot suffix - Suffix icon or similar element
 */
export declare class InputComponent extends CustomFormField<string> {
    static styles: import("lit").CSSResult;
    /**
     * Specify what if any permission the user agent has to provide automated assistance in filling
     * out the field value
     */
    autocomplete?: string;
    /**
     * Add a clear button if the value is set
     */
    clearable: boolean;
    /**
     * A maximum value for date/number inputs
     */
    max?: number | string;
    /**
     * A maximum character length
     */
    maxlength?: number | string;
    /**
     * A minimum value for date/number inputs
     */
    min?: number | string;
    /**
     * A minimum character length
     */
    minlength?: number | string;
    /**
     * A regular expression pattern to validate input against.
     */
    pattern?: string;
    /**
     * Input placeholder text
     */
    placeholder?: string;
    /**
     * Size of the input.
     * @default 'medium'
     */
    size: Size;
    /**
     * A step value for date/number inputs
     */
    step?: number;
    /**
     * Input type (as provided by the browser)
     * @default 'text'
     */
    type: InputType;
    /**
     * If set to `true`, the input is readonly.
     */
    readonly: boolean;
    /**
     * If set to `true`, the field will be invalid if empty
     */
    required: boolean;
    private _wrappedElement;
    private _value?;
    private handleInput;
    get value(): string | undefined;
    set value(value: string | undefined);
    private _autocapitalize;
    get autocapitalize(): AutoCapitalize;
    /**
     * Automatically capitalize text input
     *
     * @default 'none'
     */
    set autocapitalize(value: AutoCapitalize);
    private _enterKeyHint;
    get enterKeyHint(): EnterKeyHint;
    /**
     * Defines what action label (or icon) to present for the enter key on virtual keyboards
     */
    set enterKeyHint(value: EnterKeyHint);
    private _inputMode;
    get inputMode(): InputMode;
    /**
     * Input mode for virtual keyboards
     */
    set inputMode(value: InputMode);
    get spellcheck(): boolean;
    /**
     * Enables spell checking on the input
     */
    set spellcheck(value: boolean);
    get autofocus(): boolean;
    set autofocus(value: boolean);
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-input': InputComponent;
    }
}
