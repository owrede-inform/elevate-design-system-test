import { PaginatorComponent } from '../components/paginator/paginator.component.js';
import { type EventName } from '@lit/react';
import type { PageChangeEvent } from '../components/paginator/paginator.component.js';
export type { PageChangeEvent };
/**
 * Paging Control Bar
 *
 * @since 0.0.7
 * @status Preliminary
 *
 * @intl {PaginatorIntl}
 * @event {PageChangeEvent} page-change
 */
export declare const ElvtPaginator: import("@lit/react").ReactWebComponent<PaginatorComponent, {
    onPageChange: EventName<PageChangeEvent>;
}>;
