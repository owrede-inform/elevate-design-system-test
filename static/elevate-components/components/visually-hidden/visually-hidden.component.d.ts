import { LitElement, type TemplateResult } from 'lit';
/**
 * Makes content accessible to assistive devices without displaying it on the screen. If an element inside has
 * the focus the component will be visible.
 *
 * @since 0.0.7
 * @status Stable
 */
export declare class VisuallyHiddenComponent extends LitElement {
    static styles: import("lit").CSSResult;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-visually-hidden': VisuallyHiddenComponent;
    }
}
