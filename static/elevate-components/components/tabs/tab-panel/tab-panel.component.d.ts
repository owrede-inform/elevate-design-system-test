import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
/**
 * A tab panel component that wraps the content of a single tab
 * inside a tab group.
 *
 * The component will only render correctly if used in conjunction with `elvt-tab-group`.
 *
 * @since 0.0.1
 * @status Complete
 *
 * @slot - The tab's content.
 */
export declare class TabPanelComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private _selected;
    /**
     * The unique (per tab group) identifier of this tab panel used to associate it with the corresponding tab.
     */
    name: string;
    /** When true, the tab panel will be shown. */
    set selected(value: boolean);
    get selected(): boolean;
    connectedCallback(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-tab-panel': TabPanelComponent;
    }
}
