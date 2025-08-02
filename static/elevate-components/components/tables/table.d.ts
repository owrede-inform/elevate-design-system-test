import type { TemplateResult } from 'lit';
import { Subject } from '@inform-elevate/elevate-cdk';
import { TableSelection } from './table-selection.js';
export type TableItem = Record<string, unknown>;
export declare enum TableProviderStatus {
    Created = "created",
    Loading = "loading",
    Ready = "ready",
    Failure = "failure"
}
/**
 * A slice of data
 */
export interface TableData<Type = TableItem> {
    items: Type[];
    /**
     * The absolute length of the data result, use -1 if unknown.
     */
    length: number;
}
export declare enum TableItemSortDirection {
    Ascending = "asc",
    Descending = "desc"
}
export interface TableItemSort {
    column: string;
    direction: TableItemSortDirection;
}
export type TableCellAlignment = 'start' | 'end' | 'center' | 'justify';
export declare const TableCellAlignment: {
    start: TableCellAlignment;
    end: TableCellAlignment;
    center: TableCellAlignment;
    justify: TableCellAlignment;
};
export interface TableColumnDefinition<Type = TableItem> {
    alignment?: TableCellAlignment;
    data: (item: Type, index: number, definition: TableColumnDefinition) => string | TemplateResult;
    dataAlignment?: TableCellAlignment;
    id: string;
    label?: string | ((definition: TableColumnDefinition) => string | TemplateResult);
    sortable?: boolean | TableItemSortDirection;
    width?: number | string;
}
export interface TableRowDefinition {
    label?: string | TemplateResult;
    clickable?: boolean;
}
export interface TableRowEventDetails<Type = TableItem> {
    index: number;
    item?: Type;
    row: TableRow<Type>;
}
export declare class TableRowEvent<Type = TableItem> extends CustomEvent<TableRowEventDetails<Type>> {
}
export interface TableRow<Type = TableItem> {
    item?: Type;
    requestUpdate: () => void;
}
export interface Table<Type = TableItem> extends EventTarget {
    selectable: boolean;
    selection: TableSelection<Type>;
    rowOffset: number;
}
export declare abstract class TableIntl {
    readonly changes: Subject<void>;
    abstract readonly selectAllLabel: string;
    abstract readonly selectNoneLabel: string;
    abstract readonly selectRowLabel: string;
    abstract readonly deselectRowLabel: string;
}
export declare class DefaultTableIntl extends TableIntl {
    readonly selectAllLabel = "Select all";
    readonly selectNoneLabel = "Select none";
    readonly selectRowLabel = "Select row";
    readonly deselectRowLabel = "Deselect row";
}
