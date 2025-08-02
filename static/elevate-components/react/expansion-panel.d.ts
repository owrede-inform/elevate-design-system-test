import { ExpansionPanelComponent } from '../components/expansion-panels/expansion-panel/expansion-panel.component.js';
import { type EventName } from '@lit/react';
export type ExpansionPanelChangeEventEvent = Event;
/**
 * Provides an expandable details view.
 *
 * @since 0.0.8
 * @status Complete
 *
 * @slot - The details' main content.
 * @slot expand-icon - expand icon to use instead of the default (optional).
 * @slot collapse-icon - expand icon to use instead of the default (optional).
 *
 * @event ExpansionPanelChangeEvent - Emitted when the panel opens or closes.
 */
export declare const ElvtExpansionPanel: import("@lit/react").ReactWebComponent<ExpansionPanelComponent, {
    onExpansionPanelChangeEvent: EventName<ExpansionPanelChangeEventEvent>;
}>;
