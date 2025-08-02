import { LitElement, type TemplateResult } from 'lit';
import { Size } from '../size.ts';
import { SHAPE_ARC, SHAPE_BAR, SHAPE_RING } from '../shape.js';
export type ProgressShape = typeof SHAPE_BAR | typeof SHAPE_RING | typeof SHAPE_ARC;
export declare const ProgressShape: {
    Bar: ProgressShape;
    Ring: ProgressShape;
    Arc: ProgressShape;
};
/**
 * Show the progress of an ongoing operation.
 *
 * @since 0.0.7
 * @status Preliminary
 *
 * @slot - A label to show inside the progress indicator.
 *
 * @css-property --progress-color - Define a custom color for the progress indicator
 * @css-property --progress-track-color - Define a custom color for the progress track
 */
export declare class ProgressComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * shape the component will display.
     * @default 'bar'
     */
    shape: ProgressShape;
    /** The current progress, the value should be between [0, 1] */
    value: number;
    /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
    indeterminate: boolean;
    /** A custom label for assistive devices. */
    label: string;
    /**
     * Size of the Progress Indicator in Circular Shape. If not set it will depend on the font-size.
     * @default undefined
     */
    size?: Size;
    private get shoelaceProgressValue();
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-progress': ProgressComponent;
    }
}
