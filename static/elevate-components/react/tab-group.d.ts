import { TabGroupComponent } from '../components/tabs/tab-group/tab-group.component.js';
import { type EventName } from '@lit/react';
export type ChangeEvent = Event;
/**
 * A control that renders a number of tabs (`elvt-tab`) and the content of the active tab (`elvt-tab-panel`).
 *
 * @since 0.0.1
 * @status Complete
 *
 * @slot - The tab-panels for the tabs.
 * @slot [nav] - The tabs for the tab group.
 *
 * @event change - Emitted when the active tab changes.
 */
export declare const ElvtTabGroup: import("@lit/react").ReactWebComponent<TabGroupComponent, {
    onChange: EventName<ChangeEvent>;
}>;
