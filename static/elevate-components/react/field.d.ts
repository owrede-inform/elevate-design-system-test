import { FieldComponent } from '../components/fields/field/field.component.js';
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
export declare const ElvtField: import("@lit/react").ReactWebComponent<FieldComponent, {}>;
