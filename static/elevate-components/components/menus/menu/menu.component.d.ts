import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import type { Menu, MenuItem } from './menu.js';
export type { MenuItemSelectEvent } from './menu.js';
export type MenuShape = 'box' | 'inline';
export declare const MenuShape: {
    Box: MenuShape;
    Inline: MenuShape;
};
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
export declare class MenuComponent extends LitElement implements Menu {
    static styles: import("lit").CSSResult;
    private _slot;
    shape: MenuShape;
    private handleItemSelect;
    /**
     * Return all menu items (identified by the 'role' attribute)
     */
    get items(): MenuItem[];
    connectedCallback(): void;
    setCurrentItem(item: MenuItem): void;
    render(): TemplateResult;
    private handleSlotChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-menu': MenuComponent;
    }
}
