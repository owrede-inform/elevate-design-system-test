import { SelectComponent } from '../components/select/select.component.js';
import { type EventName } from '@lit/react';
export type BlurEvent = Event;
/**
 * A select field
 *
 * @since 0.0.14
 * @status Preliminary
 *
 * @slot prefix - Prefix icon or similar element
 * @slot suffix - Suffix icon or similar element
 */
export declare const ElvtSelect: import("@lit/react").ReactWebComponent<SelectComponent, {
    onInput: EventName<Event>;
    onChange: EventName<Event>;
    onBlur: EventName<BlurEvent>;
}>;
