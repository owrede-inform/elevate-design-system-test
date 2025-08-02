import { Size } from '../size.js';
import type { AutoCapitalize } from '../auto-capitalize.js';
import { EnterKeyHint } from '../enter-key-hint.js';
import type { InputMode } from '../input-mode.js';
import { CustomFormField } from '../fields/custom-form-field.js';
export type TextareaResize = 'auto' | 'both' | 'none' | 'vertical';
export declare const TextareaResize: {
    Auto: TextareaResize;
    Both: TextareaResize;
    None: TextareaResize;
    Vertical: TextareaResize;
};
/**
 * A textarea field
 *
 * @since 0.0.1
 * @status Preliminary
 *
 * @attribute {boolean} autofocus  -  Indicating that an element should be focused on page load
 */
export declare class TextareaComponent extends CustomFormField<string> {
    static styles: import("lit").CSSResult;
    /**
     * If set to `true`, the textarea is readonly.
     */
    readonly: boolean;
    /**
     * If set to `true`, the textarea is mandatory.
     */
    required: boolean;
    /**
     * Resize mode
     */
    resize?: TextareaResize;
    /**
     * Textarea placeholder text
     */
    placeholder?: string;
    /**
     * Size of the textarea.
     * @default 'medium'
     */
    size: Size;
    private _wrappedElement;
    private _value?;
    get value(): string | undefined;
    set value(value: string | undefined);
    private _autocapitalize;
    get autocapitalize(): AutoCapitalize;
    /**
     * Automatically capitalize text textarea
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
    private handleInput;
    blur(): void;
    focus(options?: FocusOptions): void;
    /**
     * Enables spell checking on the textarea
     */
    set spellcheck(value: boolean);
    get autofocus(): boolean;
    set autofocus(value: boolean);
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-textarea': TextareaComponent;
    }
}
