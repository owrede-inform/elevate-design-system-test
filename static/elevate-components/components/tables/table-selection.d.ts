import type { TableItem } from './table.js';
export declare class TableSelectionChangeEvent<Type = TableItem> extends CustomEvent<{
    items: Type[];
}> {
}
export declare class TableSelection<Type = TableItem> {
    readonly table: EventTarget;
    private _selectedItems;
    private _trackers;
    constructor(table: EventTarget);
    private _trackBy;
    get trackBy(): (item: Type) => string | number;
    set trackBy(value: (item: Type) => string | number);
    get length(): number;
    [Symbol.iterator](): {
        next: () => {
            value: Type;
            done: boolean;
        } | {
            value: undefined;
            done: boolean;
        };
    };
    add(item: Type): void;
    assign(items: Type[]): void;
    clear(): void;
    indexOf(item: Type): number;
    remove(item: Type): void;
    private getTrackValue;
}
