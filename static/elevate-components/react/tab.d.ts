import { TabComponent } from '../components/tabs/tab/tab.component.js';
import { type EventName } from '@lit/react';
export type SelectionChangeEvent = Event;
/**
 * A tab component that can be used inside tab groups to display
 * the selection status of a tab and toggle it.
 *
 * The component will only render correctly if used in conjunction with `elvt-tab-group`.
 *
 * @since 0.0.1
 * @status Complete
 *
 * @slot - The tab's label.
 * @slot [close-icon] - The tab's close icon.
 * @slot [prefix] - A slot for a prefix icon or element, displayed before the tab label.
 * @slot [suffix] - A slot for a suffix icon or element, displayed after the tab label.
 *
 * @event request-close - Emitted when the tab is `closable` and the close button is clicked (or when closing the tab is requested programmatically).
 * @event selection-change - Emitted when the tab is selected. The event detail contains the `panel` attribute of the tab.
 */
export declare const ElvtTab: import("@lit/react").ReactWebComponent<TabComponent, {
    onRequestClose: EventName<CustomEvent>;
    onSelectionChange: EventName<SelectionChangeEvent>;
}>;
