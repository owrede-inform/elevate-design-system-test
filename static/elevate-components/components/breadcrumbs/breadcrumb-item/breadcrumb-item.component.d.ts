import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import { LinkTarget } from '../../link-target.ts';
/**
 * Breadcrumb Items are used inside [breadcrumbs] to represent a route path.
 *
 * @since 0.0.2
 * @status Complete
 *
 * @slot - The breadcrumb item's label.
 *
 */
export declare class BreadcrumbItemComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Optional URL to direct the user to when the breadcrumb item is activated.
     * When set, a link will be rendered internally.
     */
    href?: string;
    /**
     * Indicates whether the breadcrumb item is clickable.
     * When set, a button will be rendered internally.
     */
    clickable: boolean;
    /**
     * The target attribute for the link, if `href` is set.
     * This determines where the linked document will open.
     * Defaults to `_self`, which opens the link in the same frame as it was clicked.
     */
    target?: LinkTarget;
    /**
     * Indicates whether the breadcrumb item is selected.
     * This can be used to visually indicate the current page or section.
     */
    selected: boolean;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-breadcrumb-item': BreadcrumbItemComponent;
    }
}
