import { LitElement, type TemplateResult } from 'lit';
import { Padding } from '../distance/padding.js';
import { Direction } from '../direction.js';
import { Size } from '../size.js';
/**
 * The divider acts as a separator in a stack of items. By default
 * it will separate the items of a column with a horizontal line.
 *
 * @since 0.0.3
 * @status Stable
 *
 * @css-property --divider-end-length - Length of the divider line before the prefix and after the suffix
 * @css-property --divider-color - Overwrite divider text color, default `currentColor`
 * @css-property --divider-stroke-color - Overwrite divider stroke color, default `var(--divider-color)`
 */
export declare class DividerComponent extends LitElement {
    static styles: import("lit").CSSResult[];
    /**
     * Let the divider direction matches the container direction
     */
    direction: Direction;
    /**
     * Divider size adds distance before/after the separator depending on the direction.
     * If undefined it will add no distance.
     *
     * @default undefined
     */
    size?: Size;
    private _padding;
    private _filledSlotDefault;
    private _filledSlotPrefix;
    private _filledSlotSuffix;
    /**
     * Define padding around the divider line. The padding will be a part of the divider.
     */
    get padding(): Padding | string;
    /**
     * The padding will apply to all parts of the card. For individual
     * paddings use stack elements inside the parts.
     *
     * @default '0'
     */
    set padding(value: Padding | string | string[]);
    render(): TemplateResult;
    protected updateSlotStatus(name?: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-divider': DividerComponent;
    }
}
