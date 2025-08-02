import { InputComponent } from '../components/input/input.component.js';
import { type EventName } from '@lit/react';
export type ChangeEvent = Event;
export type InputEvent = Event;
export type BlurEvent = Event;
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
export declare const ElvtInput: import("@lit/react").ReactWebComponent<InputComponent, {
    onChange: EventName<ChangeEvent>;
    onInput: EventName<InputEvent>;
    onBlur: EventName<BlurEvent>;
}>;
