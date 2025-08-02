import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { Padding } from '../distance/padding.js';
import { Gap } from '../distance/gap.js';
import { Direction } from '../direction.js';
export type ToolbarBorder = 'all' | 'start' | 'none' | 'both' | 'end';
export declare const ToolbarBorder: {
    All: ToolbarBorder;
    Both: ToolbarBorder;
    Start: ToolbarBorder;
    None: ToolbarBorder;
    End: ToolbarBorder;
};
export type ToolbarLayer = 'default' | 'elevated' | 'overlay' | 'sunken';
export declare const ToolbarLayer: {
    Default: ToolbarLayer;
    Elevated: ToolbarLayer;
    Overlay: ToolbarLayer;
    Sunken: ToolbarLayer;
};
/**
 * A toolbar defines a row of actions and context information.
 *
 * @since 0.0.9
 * @status Unstable
 *
 * @slot - Content, positioned after the start slot content
 * @slot start - At the start of the toolbar
 * @slot end - At the end of the toolbar
 */
export declare class ToolbarComponent extends LitElement {
    static styles: import("lit").CSSResult[];
    border: ToolbarBorder;
    layer: ToolbarLayer;
    direction: Direction;
    private _gap;
    get gap(): Gap | string;
    /**
     * The gap will apply to the toolbar container.
     *
     * @default 's'
     */
    set gap(value: Gap | string | string[]);
    private _padding;
    get padding(): Padding | string;
    /**
     * The padding will apply to the toolbar container. For individual
     * paddings use stack elements inside the parts.
     *
     * @default '0'
     */
    set padding(value: Padding | string | string[]);
    render(): TemplateResult;
    private isSlotFilled;
    private updateEndSlot;
    private updateStartSlot;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-toolbar': ToolbarComponent;
    }
}
