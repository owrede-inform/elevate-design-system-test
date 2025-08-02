import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { LinkTarget } from '../link-target.js';
export type LinkUsage = 'internal' | 'external';
export declare const LinkUsage: {
    Internal: LinkUsage;
    External: LinkUsage;
};
/**
 * A link that redirects to a URL if clicked
 *
 * @since 0.0.5
 * @status Unstable
 *
 * @slot - The link label
 *
 */
export declare class LinkComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * How the link is used, e.g. if it's an external link.
     * Determines the visual style of the link.
     */
    usage: LinkUsage;
    /**
     * The URL the link is referring to
     */
    href: string;
    /** Tells the browser where to open the link. */
    target: LinkTarget;
    private usageIcon;
    private usageClass;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-link': LinkComponent;
    }
}
