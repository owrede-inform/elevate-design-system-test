import { LitElement, type TemplateResult } from 'lit';
import { type TableItem, type TableRow } from '../table.js';
export type { TableRowEvent } from '../table.js';
export type { TableSelectionChangeEvent } from '../table-selection.js';
/**
 * A table row - used inside `elvt-table`
 *
 * @since 0.0.20
 * @status Experimental
 *
 * @slot label - Checkbox Label (for accessibility)
 */
export declare class TableRowComponent<Type = TableItem> extends LitElement implements TableRow<Type> {
    static styles: import("lit").CSSResult;
    /**
     * The item represented by the row.
     */
    item?: Type;
    /**
     * The label is used in the selection checkbox (accessibility). It will be prefixed
     * with the select/deselect intl text.
     */
    label: string;
    private _messages;
    private _rowSelector?;
    private _subscriptions;
    private _table?;
    private _clickable;
    get clickable(): boolean;
    /**
     * A clickable row can receive the focus and trigger 'table-row-click' events
     */
    set clickable(value: boolean);
    get selected(): boolean;
    connectedCallback(): void;
    handleTableRowClick(): void;
    handleTableRowKeydown(event: KeyboardEvent): void;
    disconnectedCallback(): void;
    render(): TemplateResult | string;
    private emitRowClick;
    private getRowIndex;
    private getTableElement;
    private handleCheckboxInput;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-table-row': TableRowComponent;
    }
}
