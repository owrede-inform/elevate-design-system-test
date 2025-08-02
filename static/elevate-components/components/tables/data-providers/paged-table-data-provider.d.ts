import { type TableData, type TableItem, type TableItemSort } from '../table.js';
import { TableDataProvider } from './table-data-provider.js';
export declare class PagedTableDataProvider<Type = TableItem> extends TableDataProvider<Type> {
    private readonly pageSize;
    private readonly fetcher;
    private _slices;
    private _sliceSort?;
    constructor(pageSize: number, fetcher: (pageIndex: number, pageSize: number, sortBy?: TableItemSort) => Promise<TableData<Type>>);
    private getSlice;
    reset(): void;
    slice(start?: number, end?: number, sortBy?: TableItemSort): Promise<TableData<Type>>;
}
