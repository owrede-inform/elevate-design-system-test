import { LitElement, type TemplateResult } from 'lit';
/**
 * Button groups can be used to group related buttons into sections.
 *
 * @since 0.0.4
 * @status Complete
 *
 * @slot - One or more buttons to display in the button group.
 *
 */
export declare class ButtonGroupComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private defaultSlot;
    /**
     * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
     * devices when interacting with the control and is strongly recommended.
     */
    label: string;
    private handleSlotChange;
    render(): TemplateResult;
    private get buttons();
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-button-group': ButtonGroupComponent;
    }
}
