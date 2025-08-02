import { LitElement, type TemplateResult } from 'lit';
import { type TableCellAlignment, TableItemSortDirection } from '../table.js';
/**
 * A table column - used inside `elvt-table`
 *
 * @since 0.0.20
 * @status Experimental
 */
export declare class TableColumnComponent extends LitElement {
    static styles: import("lit").CSSResult;
    alignment?: TableCellAlignment;
    sortable?: TableItemSortDirection[];
    sorted: TableItemSortDirection;
    private _width?;
    get width(): string | undefined;
    set width(value: string | undefined);
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-table-column': TableColumnComponent;
    }
}
