import { ResizeObserverComponent } from '../components/resize-observer/resize-observer.component.js';
import { type EventName } from '@lit/react';
import type { ResizeObservationEvent } from '../components/resize-observer/resize-observer.component.js';
export type { ResizeObservationEvent };
/**
 * Triggers a resize event if its size changes.
 *
 * If the delay is greater than 0, the event will trigger after the defined time.
 * Any observed resize will restart that timer. The event will only trigger for
 * the last observed resize.
 *
 * @since 0.0.14
 * @status Stable
 *
 * @event {ResizeObservationEvent} resize
 */
export declare const ElvtResizeObserver: import("@lit/react").ReactWebComponent<ResizeObserverComponent, {
    onResize: EventName<ResizeObservationEvent>;
}>;
