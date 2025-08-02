import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
export type DropdownPlacement = 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
export declare const DropdownPlacement: {
    BottomEnd: DropdownPlacement;
    BottomStart: DropdownPlacement;
    Bottom: DropdownPlacement;
    LeftEnd: DropdownPlacement;
    LeftStart: DropdownPlacement;
    Left: DropdownPlacement;
    RightEnd: DropdownPlacement;
    RightStart: DropdownPlacement;
    Right: DropdownPlacement;
    TopEnd: DropdownPlacement;
    TopStart: DropdownPlacement;
    Top: DropdownPlacement;
};
/**
 * A dropdown uses a trigger component to show an container with additional content
 *
 * @since 0.0.1
 * @status Preliminary
 *
 * @slot - The dropdown menu content.
 * @slot trigger - The dropdown menu trigger.
 *
 */
export declare class DropdownComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The hoist attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container.
     */
    hoist: boolean;
    /**
     * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep
     * the panel inside the viewport.
     */
    placement: DropdownPlacement;
    /**
     * Disables the dropdown so the panel will not open.
     */
    disabled: boolean;
    /**
     * By default, the dropdown is closed when an item is selected. This attribute will keep it open instead.
     * Useful for dropdowns that allow for multiple interactions.
     */
    stayOpenOnSelect: boolean;
    private _wrappedElement;
    private _defaultSlot;
    private _open;
    get open(): boolean;
    /**
     * Indicates whether the dropdown is open. You can toggle thi s attribute to show and hide the dropdown,
     * or you can use the show() and hide() methods and this attribute will reflect the dropdown’s open state.
     *
     * @default false
     */
    set open(value: boolean);
    /**
     * Show the menu
     */
    show(): Promise<void>;
    /**
     * Hide the menu
     */
    hide(): Promise<void>;
    /**
     * Reposition the open menu
     */
    reposition(): Promise<void>;
    render(): TemplateResult;
    private handleItemSelect;
    private handleTriggerKeydown;
    private getMenu;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-dropdown': DropdownComponent;
    }
}
