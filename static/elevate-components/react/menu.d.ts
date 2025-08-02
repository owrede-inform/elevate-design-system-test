import { MenuComponent } from '../components/menus/menu/menu.component.js';
import { type EventName } from '@lit/react';
import type { MenuItemSelectEvent } from '../components/menus/menu/menu.component.js';
export type { MenuItemSelectEvent };
/**
 * Menus provide a list of options for the user to choose from.
 *
 * ! Nesting menus is not possible yet.
 *
 * @since 0.0.1
 * @status Preliminary
 *
 * @slot - The menu content (items, labels, dividers, ...).
 * @event {MenuItemSelectEvent} elvt-item-select
 */
export declare const ElvtMenu: import("@lit/react").ReactWebComponent<MenuComponent, {
    onElvtItemSelect: EventName<MenuItemSelectEvent>;
}>;
