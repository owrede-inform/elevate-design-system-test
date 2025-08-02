import { LitElement, type TemplateResult } from 'lit';
import { Tone } from '../tone.ts';
export type IndicatorPosition = 'top-start' | 'bottom-start' | 'top-end' | 'bottom-end';
export declare const IndicatorPosition: {
    BottomEnd: IndicatorPosition;
    BottomStart: IndicatorPosition;
    TopEnd: IndicatorPosition;
    TopStart: IndicatorPosition;
};
/**
 * Attach an indicator to the enclosed component
 *
 * @since 0.0.14
 * @status Experimental
 *
 * @slot - Component to attach the indicator to.
 *
 * @cssproperty --indicator-offset-column - horizontal indicator offset (default: `8px`)
 * @cssproperty --indicator-offset-row - vertical indicator offset (default: `12px`)
 */
export declare class IndicatorComponent extends LitElement {
    static styles: import("lit").CSSResult;
    position: IndicatorPosition;
    tone: Tone;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-indicator': IndicatorComponent;
    }
}
