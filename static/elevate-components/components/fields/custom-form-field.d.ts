import { CustomFormControl } from './custom-form-control.js';
/**
 * A form field allows for a label and a help text below.
 *
 * @internal
 *
 * @slot label - The input’s label. Alternatively, you can use the label attribute.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the help-text attribute.
 */
export declare abstract class CustomFormField<Type> extends CustomFormControl<Type> {
    private _filledLabelSlot;
    private _filledHelpTextSlot;
    /**
     * The forms label text, use slot for complex labels
     */
    label?: string;
    /**
     * A descriptive text for the select, use the help-text slot for HTML.
     */
    helpText?: string;
    protected renderLabelSlot(passTo?: string): import("lit-html").TemplateResult<1>;
    protected renderHelpTextSlot(passTo?: string): import("lit-html").TemplateResult<1>;
    protected updateFieldSlotStatus(name: string): void;
}
