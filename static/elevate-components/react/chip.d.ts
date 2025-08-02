import { ChipComponent } from '../components/chip/chip.component.js';
import { type EventName } from '@lit/react';
/**
 * A chip component is used as labels to organize things or to indicate a selection.
 *
 * @since 0.0.12
 * @status Unstable
 *
 * @slot - The chip's content.
 * @slot remove-icon - The chip's icon.
 *
 * @event request-remove - Emitted when the removable prop is enabled and chip icon remove area is clicked.
 * @event request-edit - Emitted when the editable prop is enabled and chip content area is clicked.
 */
export declare const ElvtChip: import("@lit/react").ReactWebComponent<ChipComponent, {
    onRequestRemove: EventName<CustomEvent>;
    onRequestEdit: EventName<CustomEvent>;
}>;
