import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
interface ActiveTabEventDetail {
    activeTab: string;
}
export declare class ActiveTabChangeEvent extends CustomEvent<ActiveTabEventDetail> {
    constructor(type: string, detail: ActiveTabEventDetail, options: EventInit);
}
/**
 * A control that renders a number of tabs (`elvt-tab`) and the content of the active tab (`elvt-tab-panel`).
 *
 * @since 0.0.1
 * @status Complete
 *
 * @slot - The tab-panels for the tabs.
 * @slot [nav] - The tabs for the tab group.
 *
 * @event change - Emitted when the active tab changes.
 */
export declare class TabGroupComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private mutationObserver;
    private _activeTab;
    private panelsSlot;
    private navSlot;
    /**
     * The name of the currently active tab.
     */
    set activeTab(value: string);
    get activeTab(): string;
    private getAllTabs;
    private getAllPanels;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private syncTabsAndPanels;
    private handleSlotChange;
    private getDefaultActiveTab;
    private positionActiveTabIndicator;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-tab-group': TabGroupComponent;
    }
}
export {};
