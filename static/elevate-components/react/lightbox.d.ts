import { LightboxComponent } from '../components/lightbox/lightbox.component.js';
import { type EventName } from '@lit/react';
/**
 * The lightbox fill the whole window with a backdrop and displays
 * a content above it.
 *
 * The slots are transparent by default for maximum flexibility. Card work well as
 * a visible container inside.
 *
 * @since 0.0.16
 * @status Unstable
 */
export declare const ElvtLightbox: import("@lit/react").ReactWebComponent<LightboxComponent, {
    onBackdropClick: EventName<CustomEvent>;
    onEscapeKeypress: EventName<CustomEvent>;
}>;
