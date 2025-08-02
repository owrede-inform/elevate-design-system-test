import { RadioComponent } from '../components/radios/radio/radio.component.js';
import { type EventName } from '@lit/react';
export type ChangeEvent = Event;
export type InputEvent = Event;
export type BlurEvent = Event;
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
export declare const ElvtRadio: import("@lit/react").ReactWebComponent<RadioComponent, {
    onChange: EventName<ChangeEvent>;
    onInput: EventName<InputEvent>;
    onBlur: EventName<BlurEvent>;
}>;
