import { LitElement, type TemplateResult } from 'lit';
/**
 *
 * @since 0.0.7
 * @status Preliminary
 *
 * @slot - Inner elements
 * @slot content - Tooltip HTML content, use content property for basic text tooltips
 */
export declare class TooltipComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private content;
    private hoist;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-tooltip': TooltipComponent;
    }
}
