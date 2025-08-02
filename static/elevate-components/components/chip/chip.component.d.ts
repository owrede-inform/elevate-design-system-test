import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { Subject } from '@inform-elevate/elevate-cdk';
import { Size } from '../size.js';
import { Tone } from '../tone.ts';
import { Shape } from '../shape.ts';
/**
 * To modify the label and text displayed, define a class extending `ChipIntl` and
 * include it in a `DependencyProvider` [I18n](/usages/i18n.mdx I18n).
 */
export declare abstract class ChipIntl {
    readonly changes: Subject<void>;
    abstract readonly removeLabel: string;
}
/**
 * A chip component is used as labels to organize things or to indicate a selection.
 *
 * @since 0.0.12
 * @status Unstable
 *
 * @slot - The chip's content.
 * @slot remove-icon - The chip's icon.
 *
 * @event request-remove - Emitted when the removable prop is enabled and chip icon remove area is clicked.
 * @event request-edit - Emitted when the editable prop is enabled and chip content area is clicked.
 */
export declare class ChipComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private _subscriptions;
    /**
     * Chip tone (color).
     * @default 'neutral'
     */
    tone: Tone;
    /**
     * Size of the Chip Component.
     * @default 'medium'
     */
    size: Size;
    /**
     * If set to shape `pill`, displays a chip with rounded edges (pill style).
     *  @default 'default'
     */
    shape: Shape;
    /** Shows a remove action and makes the chip removable. */
    removable: boolean;
    /** */
    editable: boolean;
    /** A custom label for assistive devices, used in the remove button. */
    removeLabel: string;
    private _messages;
    private handleRemoveClick;
    private handleEditClick;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-chip': ChipComponent;
    }
}
