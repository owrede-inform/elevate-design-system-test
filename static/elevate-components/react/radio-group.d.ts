import { RadioGroupComponent } from '../components/radios/radio-group/radio-group.component.js';
import { type EventName } from '@lit/react';
export type ChangeEvent = Event;
export type InputEvent = Event;
export type BlurEvent = Event;
/**
 * A radio component that allows the user to select a single option from a group.
 *
 * @since 0.0.1
 * @status Preliminary
 *
 * @slot - The radio elements
 */
export declare const ElvtRadioGroup: import("@lit/react").ReactWebComponent<RadioGroupComponent, {
    onType: EventName<Event>;
    onChange: EventName<ChangeEvent>;
    onInput: EventName<InputEvent>;
    onBlur: EventName<BlurEvent>;
}>;
