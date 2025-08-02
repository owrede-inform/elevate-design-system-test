import { LitElement, type TemplateResult } from 'lit';
import { DependencyContainer, type DependencyProvider } from '@inform-elevate/elevate-cdk';
/**
 * Application acts as a main container providing services to its children and maintaining state.
 *
 * - It has slot for basic positions.
 * - The `header` and `footer` slots will align their children horizontally, all others vertically.
 * - The `side-start` and `side-end` will be positioned depending on the reading direction
 * - Padding and gap have to be defined inside the slots.
 * - Nested `elvt-application` instances will inherit theme and services from their ancestor.
 *
 * @since 0.0.7
 * @status Unstable
 *
 * @slot - content area
 * @slot header - At the top of the component
 * @slot footer - At the bottom of the component
 * @slot side-start - At the start side of the component (in reading direction)
 * @slot side-end - At the end side of the component (in reading direction)
 */
export declare class ApplicationComponent extends LitElement {
    readonly [DependencyContainer.Symbol]: DependencyContainer;
    static styles: import("lit").CSSResult;
    set providers(providers: DependencyProvider[]);
    get providers(): DependencyContainer;
    /**
     * Setting `root` will disable inheritance and set the theme only for this container.
     */
    root: boolean;
    private _theme?;
    get theme(): string | undefined;
    /**
     * The identifier/name of the theme. It needs to start with an ASCII letter and consists of only  ASCII letters and digits.
     *
     * Setting this value will apply CSS classes to the body element to activate the theme.
     */
    set theme(value: string | undefined);
    /**
     * Fetches the nearest ApplicationComponent instance on the ancestor axis of its descendant.
     */
    static getAsAncestor(descendant: Element): ApplicationComponent | null;
    connectedCallback(): void;
    render(): TemplateResult;
    private applyTheme;
    private getAncestor;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-application': ApplicationComponent;
    }
}
