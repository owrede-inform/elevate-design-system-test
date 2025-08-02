import { LitElement, type TemplateResult, type CSSResult } from 'lit';
import { Gap } from '../../distance/gap.js';
/**
 * Provides a grouping to behave as an accordion for the expansion panels.
 *
 * @since 0.0.8
 * @status Complete
 *
 * @slot - The expansion panels elements.
 *
 */
export declare class ExpansionPanelGroupComponent extends LitElement {
    static styles: CSSResult[];
    defaultSlot: HTMLSlotElement;
    /**
     * Indicates whether the panel group should allow multiple expanded expansion panel to be expanded simultaneously.
     */
    allowMultipleExpanded: boolean;
    /**
     * A label to use for the expansion panel group. This won't be displayed on the screen, but it will be announced by assistive
     * devices when interacting with the control and is strongly recommended.
     */
    label: string;
    private _gap;
    get gap(): Gap | string;
    /**
     * Gap between the expansion panels
     * @default 'm'
     */
    set gap(value: Gap | string | string[]);
    private handlePanelClick;
    private getExpansionPanelElements;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-expansion-panel-group': ExpansionPanelGroupComponent;
    }
}
