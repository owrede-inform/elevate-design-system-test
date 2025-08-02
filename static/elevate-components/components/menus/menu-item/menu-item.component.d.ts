import { LitElement, type TemplateResult } from 'lit';
import type { MenuItem } from '../menu/menu.js';
import { LinkTarget } from '../../link-target.js';
export type MenuItemType = 'checkbox' | 'normal';
export declare const MenuItemType: {
    Checkbox: MenuItemType;
    Normal: MenuItemType;
};
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
export declare class MenuItemComponent extends LitElement implements MenuItem {
    static styles: import("lit").CSSResult;
    /**
     * Disables the item
     */
    disabled: boolean;
    /**
     * Display the item as selected (for navigations)
     */
    selected: boolean;
    /**
     * Make it easy to recognize as a menu item.
     */
    isMenuItem: true;
    /**
     * Set the type attribute to checkbox to create a menu item that will toggle on and off when selected.
     */
    type: MenuItemType;
    /**
     * A value to store in the menu item. This can be used as a context when selected.
     */
    value?: string;
    private _hasSubmenu;
    private _submenuSlot;
    private _wrappedElement;
    private _wrappedItem;
    private _hasPrefix;
    private _hasSuffix;
    private _checked;
    /** When set, the menu item will open the url if clicked */
    href?: string;
    /** Tells the browser where to open the link. Only used when `href` is present. */
    target: LinkTarget;
    private handleClick;
    get checked(): boolean;
    /**
     * Draws the item in a checked state.
     */
    set checked(value: boolean);
    connectedCallback(): void;
    focus(): void;
    isSubmenu(): boolean;
    render(): TemplateResult;
    setFocusable(value: boolean): void;
    private isSlotFilled;
    private handleSubmenuSlotChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-menu-item': MenuItemComponent;
    }
}
