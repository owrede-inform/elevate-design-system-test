import { BehaviourSubject, Subject } from '@inform-elevate/elevate-cdk';
import { type TableData, type TableItem, type TableItemSort, TableProviderStatus } from '../table.js';
export declare abstract class TableDataProvider<Type = TableItem> {
    readonly status: BehaviourSubject<TableProviderStatus>;
    readonly changes: Subject<void>;
    abstract slice(start?: number, end?: number, sortBy?: TableItemSort): Promise<TableData<Type>>;
}
