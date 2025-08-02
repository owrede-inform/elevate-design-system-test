import { SwitchComponent } from '../components/switch/switch.component.js';
import { type EventName } from '@lit/react';
export type SwitchChangeEventEvent = Event;
export type InputEvent = Event;
export type ChangeEvent = Event;
export type BlurEvent = Event;
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
export declare const ElvtSwitch: import("@lit/react").ReactWebComponent<SwitchComponent, {
    onSwitchChangeEvent: EventName<SwitchChangeEventEvent>;
    onInput: EventName<InputEvent>;
    onChange: EventName<ChangeEvent>;
    onBlur: EventName<BlurEvent>;
}>;
