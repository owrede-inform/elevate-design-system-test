import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { Size } from '../../size.ts';
import { LinkTarget } from '../../link-target.js';
import { Tone, TONE_EMPHASIZED, TONE_SUBTLE } from '../../tone.js';
import { Padding } from '../../distance/padding.js';
export type ButtonType = 'button' | 'reset' | 'submit';
export declare const ButtonType: {
    Button: ButtonType;
    Reset: ButtonType;
    Submit: ButtonType;
};
export type ButtonTone = Tone | typeof TONE_EMPHASIZED | typeof TONE_SUBTLE;
export declare const ButtonTone: {
    Emphasized: ButtonTone;
    Subtle: ButtonTone;
    Neutral: Tone;
    Primary: Tone;
    Success: Tone;
    Warning: Tone;
    Danger: Tone;
};
/**
 * Buttons represent actions that are available to the user.
 *
 * @since 0.0.3
 * @status Complete
 *
 * @slot - The button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 */
export declare class ButtonComponent extends LitElement {
    static styles: import("lit").CSSResult[];
    /**
     * If set to `true`, user can't interact with the component.
     */
    disabled: boolean;
    /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
    download?: string;
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    href?: string;
    name?: string;
    private _padding?;
    get padding(): Padding | string | undefined;
    /**
     * Allows to modify the default padding of the button.
     *
     * @default undefined
     */
    set padding(value: Padding | string | string[]);
    /**
     * When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
     * internal default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
     * specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
     * setting the attribute to an empty string or a value of your choice, respectively.
     */
    rel?: string;
    /**
     * Display the button as selected
     */
    selected: boolean;
    /**
     * Size of the Button Component.
     * @default 'medium'
     */
    size: Size;
    /** Tells the browser where to open the link. Only used when `href` is present. */
    target: LinkTarget;
    /**
     * Button tone (color).
     * @default 'neutral'
     */
    tone: ButtonTone;
    /**
     * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
     * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
     */
    type: ButtonType;
    value?: string;
    private _element?;
    private _filledSlots;
    private readonly _internals;
    private _subscriptions;
    constructor();
    /**
     * Declare the component a form associated control
     */
    static get formAssociated(): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult;
    focus(options?: FocusOptions): void;
    /**
     * Store the 'filled' state of a slot. This allows to
     * hide the empty slots.
     */
    private handleSlotChange;
    private isLink;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-button': ButtonComponent;
    }
}
