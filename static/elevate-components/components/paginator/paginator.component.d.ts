import { LitElement, type TemplateResult } from 'lit';
import { Subject } from '@inform-elevate/elevate-cdk';
import { Size } from '../size.js';
/**
 * To modify the labels and text displayed, define a class extending `PaginatorIntl` and
 * include it in a `DependencyProvider`
 */
export declare abstract class PaginatorIntl {
    readonly changes: Subject<void>;
    abstract readonly firstPageLabel: string;
    abstract readonly lastPageLabel: string;
    abstract readonly nextPageLabel: string;
    abstract readonly pageSizeLabel: string;
    abstract readonly previousPageLabel: string;
    abstract getRangeLabel(pageIndex: number, pageSize: number, length: number): string;
}
interface PageEventDetail {
    pageIndex: number;
    pageSize: number;
}
export declare class PageChangeEvent extends CustomEvent<PageEventDetail> {
    constructor(type: string, detail: PageEventDetail, options: EventInit);
}
/**
 * Paging Control Bar
 *
 * @since 0.0.7
 * @status Preliminary
 *
 * @intl {PaginatorIntl}
 * @event {PageChangeEvent} page-change
 */
export declare class PaginatorComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private _subscriptions;
    disabled: boolean;
    /**
     * Hide the page size label and select
     */
    hidePageSize: boolean;
    /**
     * Hide the range status label
     */
    hideRangeStatus: boolean;
    pageSizeOptions: number[];
    size: Size;
    /**
     * Whether to show the first/last buttons to the user.
     */
    showFirstLastButtons: boolean;
    private _messages;
    private icons;
    private _length;
    get length(): number;
    set length(value: number);
    private _pageIndex;
    get pageIndex(): number;
    set pageIndex(value: number);
    private _pageSize;
    get pageSize(): number;
    /**
     * Number of items to display on a page.
     */
    set pageSize(value: number);
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult;
    private emitPageEvent;
    private getMaxPageIndex;
    private getPageSizeOptions;
    private gotoFirstPage;
    private gotoLastPage;
    private gotoNextPage;
    private gotoPreviousPage;
    private gotoPageIndex;
    private onInputPageSize;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-paginator': PaginatorComponent;
    }
}
export {};
