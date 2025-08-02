import { ApplicationComponent } from '../components/application/application.component.js';
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
export declare const ElvtApplication: import("@lit/react").ReactWebComponent<ApplicationComponent, {}>;
