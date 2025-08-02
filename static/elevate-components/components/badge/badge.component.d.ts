import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { Tone } from '../tone.ts';
import { Shape } from '../shape.ts';
import { Padding } from '../distance/padding.js';
/**
 * A badge component that is used to draw attention and display statuses or counts.
 *
 * @since 0.0.1
 * @status Complete
 *
 * @slot - The badge's content.
 *
 */
export declare class BadgeComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private _padding?;
    get padding(): Padding | string | undefined;
    /**
     * Allows to modify the default padding of the badge.
     *
     * @default undefined
     */
    set padding(value: Padding | string | string[]);
    pulse: boolean;
    /**
     * If set to shape `pill`, displays a chip with rounded edges (pill style).
     *  @default 'pill'
     */
    shape: Shape;
    /**
     * The badge's tone (color).
     * @default 'neutral'
     */
    tone: Tone;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-badge': BadgeComponent;
    }
}
