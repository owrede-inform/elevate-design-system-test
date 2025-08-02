import { IconComponent } from '../components/icon/icon.component.js';
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
export declare const ElvtIcon: import("@lit/react").ReactWebComponent<IconComponent, {}>;
