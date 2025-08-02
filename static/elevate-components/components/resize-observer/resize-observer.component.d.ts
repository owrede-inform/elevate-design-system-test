import { LitElement, type TemplateResult } from 'lit';
export type ResizeObservationEvent = CustomEvent<{
    entries: ResizeObserverEntry[];
}>;
/**
 * Triggers a resize event if its size changes.
 *
 * If the delay is greater than 0, the event will trigger after the defined time.
 * Any observed resize will restart that timer. The event will only trigger for
 * the last observed resize.
 *
 * @since 0.0.14
 * @status Stable
 *
 * @event {ResizeObservationEvent} resize
 */
export declare class ResizeObserverComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Delay in milliseconds
     */
    delay: number;
    /**
     * Disable the observer
     */
    disabled: boolean;
    private _pending?;
    private _resizeObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult;
    private triggerDelayed;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-resize-observer': ResizeObserverComponent;
    }
}
