import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { Subject } from '@inform-elevate/elevate-cdk';
/**
 * To modify the label and text displayed, define a class extending `ChipIntl` and
 * include it in a `DependencyProvider` [I18n](/usages/i18n.mdx I18n).
 */
export declare abstract class TabIntl {
    readonly changes: Subject<void>;
    abstract readonly closeLabel: string;
}
interface TabSelectionEventDetail {
    panel: string;
    selected?: boolean;
}
export declare class TabSelectionChangeEvent extends CustomEvent<TabSelectionEventDetail> {
    constructor(type: string, detail: TabSelectionEventDetail, options: EventInit);
}
/**
 * A tab component that can be used inside tab groups to display
 * the selection status of a tab and toggle it.
 *
 * The component will only render correctly if used in conjunction with `elvt-tab-group`.
 *
 * @since 0.0.1
 * @status Complete
 *
 * @slot - The tab's label.
 * @slot [close-icon] - The tab's close icon.
 * @slot [prefix] - A slot for a prefix icon or element, displayed before the tab label.
 * @slot [suffix] - A slot for a suffix icon or element, displayed after the tab label.
 *
 * @event request-close - Emitted when the tab is `closable` and the close button is clicked (or when closing the tab is requested programmatically).
 * @event selection-change - Emitted when the tab is selected. The event detail contains the `panel` attribute of the tab.
 */
export declare class TabComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private _selected;
    private _disabled;
    private _panel;
    /**
     * The unique (per tab group) identifier of the corresponding tab panel.
     */
    set panel(value: string);
    get panel(): string;
    /**
     * Whether this tab is disabled, i.e. can't be activated.
     *
     * @default `false`
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    /**
     * Whether this tab can be closed by the user.
     * If true, a close button will be rendered on the tab.
     *
     * @default `false`
     */
    closable: boolean;
    /**
     * A custom label for assistive devices, used in the close button.
     */
    closeLabel?: string;
    /**
     * Whether this tab is selected.
     * This property is set by the parent `elvt-tab-group` component.
     *
     * @default `false`
     */
    set selected(value: boolean);
    get selected(): boolean;
    private _messages;
    private _subscriptions;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleSelectionClick;
    private handleCloseClick;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-tab': TabComponent;
    }
}
export {};
