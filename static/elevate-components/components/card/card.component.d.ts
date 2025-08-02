import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { Padding } from '../distance/padding.js';
export type CardBorder = 'all' | 'none' | 'rounded';
export declare const CardBorder: {
    All: CardBorder;
    Rounded: CardBorder;
    None: CardBorder;
};
export type CardLayer = 'default' | 'elevated' | 'overlay' | 'sunken';
export declare const CardLayer: {
    Default: CardLayer;
    Elevated: CardLayer;
    Overlay: CardLayer;
    Sunken: CardLayer;
};
/**
 * A card is a visual container for related subjects. The content of a
 * card will stretch if the height is set.
 *
 * @since 0.0.2
 * @status Unstable
 *
 * @slot - Content
 * @slot header - Card header content
 * @slot footer - Card footer content
 */
export declare class CardComponent extends LitElement {
    static styles: import("lit").CSSResult[];
    border: CardBorder;
    layer: CardLayer;
    private _padding;
    get padding(): Padding | string;
    /**
     * The padding will apply to all parts of the card. For individual
     * paddings use stack elements inside the parts.
     *
     * @default '0'
     */
    set padding(value: Padding | string | string[]);
    render(): TemplateResult;
    private isSlotFilled;
    private updateFooterSlot;
    private updateHeaderSlot;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-card': CardComponent;
    }
}
