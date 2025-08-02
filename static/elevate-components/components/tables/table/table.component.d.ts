import { LitElement, type TemplateResult } from 'lit';
import { type Table, type TableColumnDefinition, type TableItem, type TableItemSort, type TableRow, type TableRowDefinition } from '../table.js';
import { TableDataProvider } from '../data-providers/table-data-provider.js';
import { TableSelection } from '../table-selection.js';
export type { TableRowEvent } from '../table.js';
export type { TableSelectionChangeEvent } from '../table-selection.js';
export type TableScrollMode = 'none' | 'inner' | 'virtual';
export declare const TableScrollMode: {
    None: TableScrollMode;
    Inner: TableScrollMode;
    Virtual: TableScrollMode;
};
/**
 * Table
 *
 * Table can be defined in two ways. You can create a table using the `elvt-table-*` elements or
 * using a data provider and a columns definition. If you add child elements, the columns definition and
 * data provider will be ignored.
 *
 * ```html
 * <elvt-table>
 *     <elvt-table-column slot="head">Column Label</elvt-table-column>
 *     <elvt-table-row>
 *         <elvt-table-cell>Content</elvt-table-cell>
 *     <elvt-table-row>
 * </elvt-table>
 * ```
 *
 * Dynamic tables need a column definition and a data provider. These need to be set as properties. Only
 * tables defined this way can use virtual scroll.
 *
 * ```ts
 * const columns = [
 *     {
 *         id: 'name',
 *         label: 'Name',
 *         data: (item: TableItem) => html`${item.first_name} ${item.last_name}`,
 *     },
 *     {
 *         id: 'email',
 *         label: 'Email',
 *         data: (item: TableItem) => item.email,
 *     },
 *     {
 *         id: 'company',
 *         label: 'Company',
 *         data: (item: TableItem) => item.email,
 *     },
 * ];
 * const provider = new ArrayDataProvider(records);
 * ```
 *
 * ### ArrayTableDataProvider
 *
 * A basic table data provider that takes and array with all records and optionally a compare function (for sorting).
 *
 * ```ts
 *     const provider = new ArrayTableDataProvider(accounts.slice(0, 5), { compare: columnCompare });
 * ```
 *
 * ### PagedTableDataProvider
 *
 * Allow to use an asynchronous function to fetch slices of data from an API.
 *
 * ```ts
 * const provider = new PagedTableDataProvider(
 *     // page size
 *     10,
 *     // asynchronous fetcher
 *     async (pageIndex: number, pageSize: number, sortBy?: TableItemSort) => {
 *         const offset = pageIndex * pageSize;
 *         let url = `http://example.com/api/endpoint?offset=${offset}&limit=${limit}`;
 *         if (sortBy) {
 *           url += `&sortBy=${sortBy.column}|${sortBy.direction}`
 *         }
 *         const response = await fetch(url);
 *         return {
 *             items: response.arrayOfItems,
 *             length: response.absoluteCountOfItems,
 *         };
 *     }
 * );
 * ```
 *
 * ### Custom Table Data Providers
 *
 * If implementing an own data provider it must extend the abstract TableDataProvider class.
 *
 * ```ts
 * import { BehaviourSubject, Subject } from '@inform-elevate/elevate-cdk';
 * import { TableData, TableProviderStatus } from './table-data-provider';
 * export abstract class TableDataProvider {
 *     public readonly status = new BehaviourSubject<TableProviderStatus>(TableProviderStatus.Created);
 *
 *     public readonly changes = new Subject<void>();
 *
 *     public abstract slice(start?: number, end?: number, sortBy?: string): Promise<TableData>;
 * }
 * ```
 *
 * @since 0.0.14
 * @status Experimental
 *
 * @intl {TableIntl}
 *
 * @event {TableRowEvent} table-row-click
 * @event {TableSelectionChangeEvent} table-selection-change
 *
 * @slot - Table Rows
 * @slot head - Table Columns
 */
export declare class TableComponent<Type = TableItem> extends LitElement implements Table<Type> {
    static styles: import("lit").CSSResult;
    columns: TableColumnDefinition[];
    displayedColumns: string[];
    row?: TableRowDefinition | ((item: TableItem) => TableRowDefinition);
    scrollMode: TableScrollMode;
    readonly selection: TableSelection<Type>;
    private _defaultRowHeight;
    private _limits;
    private _loadingTimeout;
    private _loadingTimeoutDelay;
    private _messages;
    private _providerStatus?;
    private _providerSubscriptions;
    private _resizeObserver;
    private _scrollViewportElement?;
    private _slice;
    private _subscriptions;
    private _tableHeaderElement?;
    private _selectionToggleElement?;
    private _updateTrigger?;
    private _provider?;
    get trackBy(): (item: Type) => string | number;
    set trackBy(value: (item: Type) => string | number);
    private handleSelectionToggleClick;
    get provider(): TableDataProvider | undefined;
    set provider(value: TableDataProvider | undefined);
    private _rowHeight;
    get rowHeight(): number;
    set rowHeight(value: number);
    private _selectable;
    get selectable(): boolean;
    set selectable(value: boolean);
    private _sortBy;
    get sortBy(): TableItemSort | undefined;
    set sortBy(value: TableItemSort | undefined);
    get rowOffset(): number;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private getSelectionStatus;
    private getSelectionToggle;
    render(): TemplateResult | string;
    updated(): void;
    private getDataRow;
    private getDisplayColumns;
    private getHeaderColumns;
    private handleColumnClick;
    private handleScroll;
    private handleScrollEnd;
    private handleTableRowClick;
    private triggerUpdate;
    private updateItems;
    get rows(): TableRow<Type>[];
    private updateRows;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-table': TableComponent;
    }
}
