import { CheckboxComponent } from '../components/checkbox/checkbox.component.js';
import { type EventName } from '@lit/react';
import type { CheckboxChangeEvent } from '../components/checkbox/checkbox.component.js';
export type { CheckboxChangeEvent };
export type BlurEvent = Event;
export type InputEvent = Event;
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
export declare const ElvtCheckbox: import("@lit/react").ReactWebComponent<CheckboxComponent, {
    onChange: EventName<CheckboxChangeEvent>;
    onBlur: EventName<BlurEvent>;
    onInput: EventName<InputEvent>;
}>;
