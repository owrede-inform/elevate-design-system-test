import { LitElement, type TemplateResult } from 'lit';
export type SkeletonEffect = 'none' | 'pulse' | 'sheen';
export declare const SkeletonEffect: {
    None: SkeletonEffect;
    Pulse: SkeletonEffect;
    Sheen: SkeletonEffect;
};
/**
 * Skeletons are used to provide a visual representation of where content will eventually load.
 *
 * @since 0.0.1
 * @status Preliminary
 *
 * @cssproperty --skeleton-min-width - The skeleton's min width value.
 */
export declare class SkeletonComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The effect the skeleton will have.
     * @default 'none'
     */
    effect: SkeletonEffect;
    /** The width of the skeleton component, it takes by default 100% of its container.
     * the value will display as a percentage, 0 to 100 */
    width: number;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-skeleton': SkeletonComponent;
    }
}
