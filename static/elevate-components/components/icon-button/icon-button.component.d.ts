import { LitElement, type TemplateResult } from 'lit';
import type { Size } from '../size.js';
import type { LinkTarget } from '../link-target.js';
export type IconButtonShape = 'circle' | 'rectangle';
export declare const IconButtonShape: {
    Circle: IconButtonShape;
    Rectangle: IconButtonShape;
};
/**
 * A clickable icon
 *
 * @since 0.0.3
 * @status Unstable
 *
 * @slot icon - Provide icon elements, use `icon` property for a basic icon
 */
export declare class IconButtonComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Disables the button.
     */
    disabled: boolean;
    /**
     * Tells the browser to download the linked file (set as `href`) as this filename.
     */
    download?: string;
    /**
     * The name of the icon to draw. Use the 'icon' slot for more flexibility.
     */
    icon?: string;
    /**
     * Use a link element instead of the button to allow for browser navigation.
     */
    href?: string;
    /**
     * A description that gets read by assistive devices. For optimal accessibility, you should always include a label
     * that describes what the icon button does.
     */
    label: string;
    /**
     * Show as selected.
     */
    selected: boolean;
    /**
     * Sets the shape of the icon button, this will be applied to the focus ring
     */
    shape?: IconButtonShape;
    /**
     * If set it applies a font-size to the icon, otherwise it will inherit the font-size.
     */
    size?: Size;
    /**
     * Target for the `href` if defined.
     */
    target?: LinkTarget;
    private _button;
    private _hasFocus;
    /**
     * Removes focus from the icon button.
     */
    blur(): void;
    /**
     * Simulates a click on the icon button.
     */
    click(): void;
    /**
     * Sets focus on the icon button.
     */
    focus(options?: FocusOptions): void;
    render(): TemplateResult;
    private handleBlur;
    private handleClick;
    private handleFocus;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-icon-button': IconButtonComponent;
    }
}
