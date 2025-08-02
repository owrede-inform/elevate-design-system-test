import { LitElement, type TemplateResult } from 'lit';
/**
 * The lightbox fill the whole window with a backdrop and displays
 * a content above it.
 *
 * The slots are transparent by default for maximum flexibility. Card work well as
 * a visible container inside.
 *
 * @since 0.0.16
 * @status Unstable
 */
export declare class LightboxComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private _subscriptions;
    private handleBackdropClick;
    private handleEscapePress;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-lightbox': LightboxComponent;
    }
}
