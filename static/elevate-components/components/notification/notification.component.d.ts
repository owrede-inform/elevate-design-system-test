import { LitElement, type TemplateResult, type PropertyValues } from 'lit';
import { Tone } from '../tone.ts';
export type NotificationChangeEvent = CustomEvent<{
    open: boolean;
}>;
/**
 * Used to display important messages inline or as toast notifications.
 *
 * @since 0.0.11
 * @status Preliminary
 *
 * @slot - The alert's main content.
 * @slot icon - An icon to show in the alert.
 *
 * @event change - Emitted when the alert opens or closes.
 *
 * Note: it provides only rtl direction when the duration is set, ltr will be added later ;)
 *
 */
export declare class NotificationComponent extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Enables a close button that allows the user to dismiss the notification.
     */
    closable: boolean;
    /**
     * The notification's tone (color).
     * @default 'primary'
     */
    tone: Tone;
    private _wrappedElement?;
    private _duration;
    get duration(): number;
    /**
     * The length of time, in milliseconds, the notification will show before closing itself.
     * If the user interacts with the notification before it closes (e.g. moves the mouse over it), the timer will restart.
     * Defaults to `Infinity`, meaning the notification will not close on its own.
     */
    set duration(value: number);
    private _open;
    get open(): boolean;
    /**
     * Indicates whether or not the notification is open. You can toggle this attribute to show and hide the notification.
     * @default false
     */
    set open(value: boolean);
    private get notificationDefaultIcon();
    private get notificationVariant();
    /** Hides the notification. */
    hide(): undefined;
    render(): TemplateResult;
    /** Shows the notification. */
    show(): undefined;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private handleShowAndHide;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-notification': NotificationComponent;
    }
}
