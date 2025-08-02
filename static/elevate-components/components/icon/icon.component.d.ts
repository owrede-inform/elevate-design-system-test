import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { RgbColor } from '@inform-elevate/elevate-cdk';
/**
 * Display an icon
 *
 * Icons are expected to be defined as an SVG path on a raster of 24 by 24.
 *
 * @since 0.0.1
 * @status Complete
 *
 * @cssproperty --icon-size - The icon size (default: `1em`)
 * @cssproperty --icon-scale - Scale icon motive (with transform filter)
 * @cssproperty --icon-alignment - Vertical alignment
 * @cssproperty --icon-color - The icon color
 * @cssproperty --icon-color-on-dark - Icon color on a dark fill color (default: `#fff`)
 * @cssproperty --icon-color-on-light - Icon color on a light fill color (default: `#000`)
 * @cssproperty --emblem-padding - Cutout padding for the emblem (default: `1px`)
 * @csspart icon - The icon container element
 * @csspart emblem - The emblem container element
 * @csspart icon-svg - The icon `<svg/>` element (not in mask mode)
 * @csspart emblem-svg - The emblem `<svg/>` element (not in mask mode)
 * @csspart icon-mask - The icon span with the mask image (only in mask mode)
 * @csspart emblem-mask - The emblem span with the mask image (only in mask mode)
 */
export declare class IconComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Set an aspect ratio for the icon element. The icon will be centered.
     *
     * @default '1 / 1'
     */
    aspectRatio: string;
    /**
     * Set a background color for the icon as a hexadecimal color code. The primary icon color will depend on the
     * lightness of the color.
     */
    fill: string;
    selected: boolean;
    image?: string;
    private _emblemValue?;
    private _iconValue?;
    private _emblem;
    get emblem(): string;
    /**
     * The emblem is a second icon that will be put in a cutout in the lower right corner of the primary icon.
     */
    set emblem(value: string);
    private _icon;
    get icon(): string;
    /**
     * The icon can be provided as a svg path, and encoded JSON or a URL.
     */
    set icon(value: string);
    disconnectedCallback(): void;
    getFillColor(): RgbColor | undefined;
    render(): TemplateResult | string;
    private createElement;
    private fetchIconFromUrl;
    private parseIconString;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-icon': IconComponent;
    }
}
