import { TableRowComponent } from '../components/tables/table-row/table-row.component.js';
import { type EventName } from '@lit/react';
import type { TableRowEvent } from '../components/tables/table-row/table-row.component.js';
export type { TableRowEvent };
/**
 * A table row - used inside `elvt-table`
 *
 * @since 0.0.20
 * @status Experimental
 *
 * @slot label - Checkbox Label (for accessibility)
 */
export declare const ElvtTableRow: import("@lit/react").ReactWebComponent<TableRowComponent<import("../index.ts").TableItem>, {
    onTableRowClick: EventName<TableRowEvent>;
}>;
