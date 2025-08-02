import { LitElement, type TemplateResult, type CSSResult } from 'lit';
import { Size } from '../../size.js';
export type ExpansionPanelChangeEvent = CustomEvent<{
    open: boolean;
}>;
export type ExpansionPanelLayer = 'default' | 'elevated';
export declare const ExpansionPanelLayer: {
    Default: ExpansionPanelLayer;
    Elevated: ExpansionPanelLayer;
};
/**
 * Provides an expandable details view.
 *
 * @since 0.0.8
 * @status Complete
 *
 * @slot - The details' main content.
 * @slot expand-icon - expand icon to use instead of the default (optional).
 * @slot collapse-icon - expand icon to use instead of the default (optional).
 *
 * @event ExpansionPanelChangeEvent - Emitted when the panel opens or closes.
 */
export declare class ExpansionPanelComponent extends LitElement {
    static styles: CSSResult;
    private details;
    /**
     * Size of the Expansion Panel Component.
     * @default 'medium'
     */
    size: Size;
    /** The summary to show in the header. */
    summary: string;
    /**
     * Disables the panel so it can't be expanded.
     */
    disabled: boolean;
    /**
     * Display a different background.
     */
    layer: ExpansionPanelLayer;
    private _open;
    get open(): boolean;
    /**
     * Indicates whether the details are open. You can toggle this attribute to show and hide the details.
     * @default false
     */
    set open(value: boolean);
    firstUpdated(): void;
    render(): TemplateResult;
    private isRtl;
    private show;
    /** Hides the details */
    private hide;
    private handleOpenChange;
    private handleShow;
    private handleSummaryClick;
    private handleSummaryKeyDown;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-expansion-panel': ExpansionPanelComponent;
    }
}
