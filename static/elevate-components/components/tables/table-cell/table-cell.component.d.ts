import { LitElement, type TemplateResult } from 'lit';
import type { TableCellAlignment } from '../table.js';
/**
 * A table cell - used inside `elvt-table`
 *
 * @since 0.0.20
 * @status Experimental
 */
export declare class TableCellComponent extends LitElement {
    static styles: import("lit").CSSResult;
    alignment: TableCellAlignment;
    private _width?;
    get width(): string | undefined;
    set width(value: string | undefined);
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-table-cell': TableCellComponent;
    }
}
