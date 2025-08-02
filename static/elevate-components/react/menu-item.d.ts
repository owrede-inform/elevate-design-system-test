import { MenuItemComponent } from '../components/menus/menu-item/menu-item.component.js';
/**
 * Menu-Items provide a list of options for the user to choose from.
 *
 * ! Nesting menus is not possible yet.
 *
 * @since 0.0.1
 * @status Preliminary
 *
 * @slot - The menu item's label
 * @slot prefix - Prepend an icon or similar element to the menu item.
 * @slot suffix - Append an icon or similar element to the menu item.
 * @slot submenu A nested menu
 */
export declare const ElvtMenuItem: import("@lit/react").ReactWebComponent<MenuItemComponent, {}>;
