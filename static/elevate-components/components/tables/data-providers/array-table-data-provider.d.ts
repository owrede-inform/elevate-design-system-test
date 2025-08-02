import { type TableData, type TableItem, type TableItemSort } from '../table.js';
import { TableDataProvider } from './table-data-provider.js';
type TableItemCompareFunction<Type = TableItem> = (a: Type, b: Type, sortBy: TableItemSort) => number;
interface ArrayTableProviderOptions {
    compare?: TableItemCompareFunction;
}
export declare class ArrayTableDataProvider<Type = TableItem> extends TableDataProvider<Type> {
    private _items;
    private _sortedItems;
    private readonly _options;
    constructor(items: Type[] | Promise<Type[]>, options?: Partial<ArrayTableProviderOptions>);
    next(items: Type[] | Promise<Type[]>): void;
    slice(start: number, end: number, sortBy?: TableItemSort): Promise<TableData<Type>>;
    private getSortedItems;
}
export {};
