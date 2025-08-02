import { NotificationComponent } from '../components/notification/notification.component.js';
import { type EventName } from '@lit/react';
export type ChangeEvent = Event;
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
export declare const ElvtNotification: import("@lit/react").ReactWebComponent<NotificationComponent, {
    onChange: EventName<ChangeEvent>;
}>;
