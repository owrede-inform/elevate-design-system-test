import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { Padding } from '../distance/padding.js';
import { Gap } from '../distance/gap.js';
import type { Direction } from '../direction.js';
export type StackAlignment = 'start' | 'center' | 'end' | 'stretch';
export declare const StackAlignment: {
    Start: StackAlignment;
    End: StackAlignment;
    Center: StackAlignment;
    Stretch: StackAlignment;
};
export type StackDistribution = 'start' | 'end' | 'overlap' | 'center' | 'stretch' | 'stretch-start' | 'stretch-end' | 'space-between';
export declare const StackDistribution: {
    Start: StackDistribution;
    End: StackDistribution;
    Center: StackDistribution;
    Overlap: StackDistribution;
    Stretch: StackDistribution;
    StretchStart: StackDistribution;
    StretchEnd: StackDistribution;
    SpaceBetween: StackDistribution;
};
export type StackDirection = Direction | 'row-reverse' | 'column-reverse' | 'multi-column';
export declare const StackDirection: {
    Row: StackDirection;
    Column: StackDirection;
    RowReverse: StackDirection;
    ColumnReverse: StackDirection;
    MultiColumn: StackDirection;
};
/**
 * A container for a stack of child elements.
 *
 * @since 0.0.1
 * @status Unstable
 *
 * @slot - Stack items
 *
 * @cssproperty --overlap-indent - Modify indent for overlap mode, default '40%'
 */
export declare class StackComponent extends LitElement {
    static styles: import("lit").CSSResult[];
    /**
     * Align the children against the direction axis, the default depends on the direction.
     * Rows use `center`, Columns use `stretch`
     */
    alignment?: StackAlignment;
    /**
     * Distribute the children on the direction axis, the default depends on the direction.
     * Rows use `stretch`, Columns use `start`
     */
    distribution?: StackDistribution;
    /**
     * @default 'row'
     */
    direction: StackDirection;
    wrap: boolean;
    private _gap;
    get gap(): Gap | string;
    /**
     * @default 's'
     */
    set gap(value: Gap | string | string[]);
    private _padding;
    get padding(): Padding | string;
    /**
     * @default '0'
     */
    set padding(value: Padding | string | string[]);
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-stack': StackComponent;
    }
}
