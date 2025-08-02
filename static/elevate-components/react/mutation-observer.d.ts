import { MutationObserverComponent } from '../components/mutation-observer/mutation-observer.component.js';
import { type EventName } from '@lit/react';
import type { MutationObservationEvent } from '../components/mutation-observer/mutation-observer.component.js';
export type { MutationObservationEvent };
/**
 * Trigger an event for DOM changes.
 *
 * @since 0.0.14
 * @status Stable
 *
 * @event {MutationObservationEvent} mutation
 */
export declare const ElvtMutationObserver: import("@lit/react").ReactWebComponent<MutationObserverComponent, {
    onMutation: EventName<MutationObservationEvent>;
}>;
