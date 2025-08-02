import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
/**
 * Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
 *
 * @since 0.0.2
 * @status Complete
 *
 * @slot - The breadcrumb items to display.
 * @slot separator - To be used between breadcrumb items.
 *
 */
export declare class BreadcrumbComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private readonly Separator;
    private defaultSlot;
    private separatorSlot;
    private getSeparator;
    private handleSlotChange;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-breadcrumb': BreadcrumbComponent;
    }
}
