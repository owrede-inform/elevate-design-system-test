import { LitElement, type TemplateResult } from 'lit';
export type MutationObservationEvent = CustomEvent<{
    mutations: MutationRecord[];
}>;
/**
 * Trigger an event for DOM changes.
 *
 * @since 0.0.14
 * @status Stable
 *
 * @event {MutationObservationEvent} mutation
 */
export declare class MutationObserverComponent extends LitElement {
    static styles: import("lit").CSSResult;
    attributeOldValue: boolean;
    characterData: boolean;
    characterDataOldValue: boolean;
    childList: boolean;
    /**
     * Disable the observer
     */
    disabled: boolean;
    subtree: boolean;
    private _mutationObserver;
    private _observerOptions;
    private _attributeFilter?;
    get attributeFilter(): string | string[] | undefined;
    set attributeFilter(value: string | string[]);
    disconnectedCallback(): void;
    render(): TemplateResult;
    private observe;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-mutation-observer': MutationObserverComponent;
    }
}
