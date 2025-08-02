import { TextareaComponent } from '../components/textarea/textarea.component.js';
import { type EventName } from '@lit/react';
export type ChangeEvent = Event;
export type InputEvent = Event;
export type BlurEvent = Event;
/**
 * A textarea field
 *
 * @since 0.0.1
 * @status Preliminary
 *
 * @attribute {boolean} autofocus  -  Indicating that an element should be focused on page load
 */
export declare const ElvtTextarea: import("@lit/react").ReactWebComponent<TextareaComponent, {
    onChange: EventName<ChangeEvent>;
    onInput: EventName<InputEvent>;
    onBlur: EventName<BlurEvent>;
}>;
