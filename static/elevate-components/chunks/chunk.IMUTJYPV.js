import {
  FormController
} from "./chunk.Q4OHJO6S.js";
import {
  TONE_EMPHASIZED,
  TONE_SUBTLE,
  Tone
} from "./chunk.GFUPY45O.js";
import {
  distance_styles_default
} from "./chunk.N5ECHOWP.js";
import {
  Padding
} from "./chunk.E3TEPSWS.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass,
  __spreadProps,
  __spreadValues
} from "./chunk.S3NI7NKU.js";

// src/components/buttons/button/button.component.ts
import { property, query, state } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

// src/components/buttons/button/button.styles.scss?inline
var button_styles_default = `:host {
  --button-height: var(--elvt-component-button-height-m, 2.5rem);
  --button-gap: var(--elvt-component-button-gap-m, 0.5rem);
  --button-padding-column: var(--elvt-component-button-padding-column-m, 0.75rem);
  --button-border-radius: var(--elvt-component-button-border-radius-s, 0.25rem);
  --button-border-width: var(--elvt-component-button-border-width, 0.0625rem);
  --button-fill: var(--elvt-component-button-fill-neutral-default, rgb(255, 255, 255));
  --button-text: var(--elvt-component-button-label-neutral-default, rgb(47, 50, 64));
  --button-border: var(--elvt-component-button-border-neutral-color-default, rgb(163, 170, 180));
  --button-fill--hover: var(--elvt-component-button-fill-neutral-hover, rgb(243, 244, 247));
  --button-text--hover: var(--elvt-component-button-label-neutral-hover, rgb(47, 50, 64));
  --button-border--hover: var(--elvt-component-button-border-neutral-color-hover, rgb(112, 122, 143));
  --button-fill--active: var(--elvt-component-button-fill-neutral-active, rgb(190, 195, 205));
  --button-text--active: var(--elvt-component-button-label-neutral-active, rgb(47, 50, 64));
  --button-border--active: var(--elvt-component-button-border-neutral-color-active, rgb(93, 102, 121));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-neutral-default, rgb(93, 102, 121));
  --icon-size: 1.6em;
  --icon-alignment: middle;
  --progress-color: var(--button-text);
  --progress-track-color: color-mix(in srgb, var(--button-text), transparent 60%);
  display: inline-grid;
  grid-template: 1fr/1fr;
  position: relative;
}
:host .disabled {
  --button-fill: var(--elvt-component-button-fill-neutral-disabled-default, rgb(243, 244, 247));
  --button-text: var(--elvt-component-button-label-neutral-disabled-default, rgb(163, 170, 180));
  --button-border: var(--elvt-component-button-border-neutral-color-disabled-default, rgb(190, 195, 205));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-neutral-disabled-default, rgb(190, 195, 205));
  cursor: not-allowed;
}
:host .button {
  font-family: var(--elvt-type-alias-emphasized-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-m-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-m-font-size, 1rem);
  line-height: 1.5;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: stretch;
  border-radius: var(--button-border-radius);
  background: var(--button-fill);
  color: var(--button-text);
  border: var(--button-border-width) solid var(--button-border);
  height: var(--button-height);
  min-width: var(--button-height);
  padding: 0 var(--button-padding-column);
  gap: var(--button-gap);
  text-decoration: none;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}
:host .button slot {
  display: none;
  background: inherit;
  color: inherit;
}
:host .button slot[data-filled], :host .button slot:not([name]) {
  /* Allow to override slot display for accessibility tests */
  display: var(--override-slot-display, block);
}
:host .button [part=label] {
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
:host .button:not(.disabled) {
  cursor: pointer;
}
:host .button:not(.disabled):focus {
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: var(--elvt-alias-action-focus-border-width-m, 0.125rem);
  z-index: 1;
}
:host .button:not(.disabled):hover {
  --button-fill: var(--button-fill--hover);
  --button-text: var(--button-text--hover);
  --border-color: var(--button-border--hover);
}
:host .button:not(.disabled):active {
  --button-fill: var(--button-fill--active);
  --button-text: var(--button-text--active);
  --border-color: var(--button-border--active);
}

:host([padding]) .button {
  padding: var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left);
}

:host([shape=pill]) {
  --button-border-radius: 4000px;
}

/* Color depending on tone and selected attributes */
:host([selected]) {
  --button-fill: var(--elvt-component-button-fill-neutral-selected-default, rgb(213, 217, 225));
  --button-text: var(--elvt-component-button-label-neutral-selected-default, rgb(17, 18, 23));
  --button-border: var(--elvt-component-button-border-neutral-color-selected-default, rgb(136, 145, 160));
  --button-fill--hover: var(--elvt-component-button-fill-neutral-selected-hover, rgb(163, 170, 180));
  --button-text--hover: var(--elvt-component-button-label-neutral-selected-hover, rgb(17, 18, 23));
  --button-border--hover: var(--elvt-component-button-border-neutral-color-selected-hover, rgb(93, 102, 121));
  --button-fill--active: var(--elvt-component-button-fill-neutral-selected-active, rgb(136, 145, 160));
  --button-text--active: var(--elvt-component-button-label-neutral-selected-active, rgb(17, 18, 23));
  --button-border--active: var(--elvt-component-button-border-neutral-color-selected-active, rgb(77, 83, 102));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-neutral-selected-default, rgb(93, 102, 121));
}

:host([tone=primary]) {
  --button-fill: var(--elvt-component-button-fill-primary-default, rgb(11, 92, 223));
  --button-text: var(--elvt-component-button-label-primary-default, rgb(255, 255, 255));
  --button-border: var(--elvt-component-button-border-primary-color-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-primary-hover, rgb(27, 80, 166));
  --button-text--hover: var(--elvt-component-button-label-primary-hover, rgb(255, 255, 255));
  --button-border--hover: var(--elvt-component-button-border-primary-color-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-primary-active, rgb(35, 51, 75));
  --button-text--active: var(--elvt-component-button-label-primary-active, rgb(255, 255, 255));
  --button-border--active: var(--elvt-component-button-border-primary-color-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-primary-default, rgb(35, 51, 75));
}
:host([tone=primary]) .disabled {
  --button-fill: var(--elvt-component-button-fill-primary-disabled-default, rgb(144, 198, 255));
  --button-text: var(--elvt-component-button-label-primary-disabled-default, rgb(234, 244, 255));
  --button-border: var(--elvt-component-button-border-primary-color-disabled-default, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-primary-selected-default, rgb(35, 51, 75));
}

:host([tone=primary][selected]) {
  --button-fill: var(--elvt-component-button-fill-primary-selected-default, rgb(35, 66, 117));
  --button-text: var(--elvt-component-button-label-primary-selected-default, rgb(255, 255, 255));
  --button-border: var(--elvt-component-button-border-primary-color-selected-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-primary-selected-hover, rgb(35, 51, 75));
  --button-text--hover: var(--elvt-component-button-label-primary-selected-hover, rgb(255, 255, 255));
  --button-border--hover: var(--elvt-component-button-border-primary-color-selected-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-primary-selected-active, rgb(29, 33, 41));
  --button-text--active: var(--elvt-component-button-label-primary-selected-active, rgb(255, 255, 255));
  --button-border--active: var(--elvt-component-button-border-primary-color-selected-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-primary-selected-default, rgb(35, 51, 75));
}

:host([tone=success]) {
  --button-fill: var(--elvt-component-button-fill-success-default, rgb(5, 118, 61));
  --button-text: var(--elvt-component-button-label-success-default, rgb(255, 255, 255));
  --button-border: var(--elvt-component-button-border-success-color-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-success-hover, rgb(5, 96, 54));
  --button-text--hover: var(--elvt-component-button-label-success-hover, rgb(255, 255, 255));
  --button-border--hover: var(--elvt-component-button-border-success-color-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-success-active, rgb(16, 58, 38));
  --button-text--active: var(--elvt-component-button-label-success-active, rgb(255, 255, 255));
  --button-border--active: var(--elvt-component-button-border-success-color-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-success-default, rgb(16, 58, 38));
}
:host([tone=success]) .disabled {
  --button-fill: var(--elvt-component-button-fill-success-disabled-default, rgb(170, 230, 188));
  --button-text: var(--elvt-component-button-label-success-disabled-default, rgb(230, 248, 236));
  --button-border: var(--elvt-component-button-border-success-color-disabled-default, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-success-selected-default, rgb(16, 58, 38));
}

:host([tone=success][selected]) {
  --button-fill: var(--elvt-component-button-fill-success-selected-default, rgb(11, 77, 47));
  --button-text: var(--elvt-component-button-label-success-selected-default, rgb(255, 255, 255));
  --button-border: var(--elvt-component-button-border-success-color-selected-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-success-selected-hover, rgb(16, 58, 38));
  --button-text--hover: var(--elvt-component-button-label-success-selected-hover, rgb(255, 255, 255));
  --button-border--hover: var(--elvt-component-button-border-success-color-selected-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-success-selected-active, rgb(19, 37, 29));
  --button-text--active: var(--elvt-component-button-label-success-selected-active, rgb(255, 255, 255));
  --button-border--active: var(--elvt-component-button-border-success-color-selected-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-success-selected-default, rgb(16, 58, 38));
}

:host([tone=warning]) {
  --button-fill: var(--elvt-component-button-fill-warning-default, rgb(248, 143, 0));
  --button-text: var(--elvt-component-button-label-warning-default, rgb(64, 19, 0));
  --button-border: var(--elvt-component-button-border-warning-color-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-warning-hover, rgb(216, 120, 0));
  --button-text--hover: var(--elvt-component-button-label-warning-hover, rgb(64, 19, 0));
  --button-border--hover: var(--elvt-component-button-border-warning-color-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-warning-active, rgb(164, 77, 0));
  --button-text--active: var(--elvt-component-button-label-warning-active, rgb(64, 19, 0));
  --button-border--active: var(--elvt-component-button-border-warning-color-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-warning-default, rgb(119, 42, 0));
}
:host([tone=warning]) .disabled {
  --button-fill: var(--elvt-component-button-fill-warning-disabled-default, rgb(255, 243, 211));
  --button-text: var(--elvt-component-button-label-warning-disabled-default, rgb(255, 179, 54));
  --button-border: var(--elvt-component-button-border-warning-color-disabled-default, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-warning-selected-default, rgb(119, 42, 0));
}

:host([tone=warning][selected]) {
  --button-fill: var(--elvt-component-button-fill-warning-selected-default, rgb(187, 99, 0));
  --button-text: var(--elvt-component-button-label-warning-selected-default, rgb(67, 14, 14));
  --button-border: var(--elvt-component-button-border-warning-color-selected-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-warning-selected-hover, rgb(164, 77, 0));
  --button-text--hover: var(--elvt-component-button-label-warning-selected-hover, rgb(67, 14, 14));
  --button-border--hover: var(--elvt-component-button-border-warning-color-selected-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-warning-selected-active, rgb(142, 58, 0));
  --button-text--active: var(--elvt-component-button-label-warning-selected-active, rgb(67, 14, 14));
  --button-border--active: var(--elvt-component-button-border-warning-color-selected-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-warning-selected-default, rgb(119, 42, 0));
}

:host([tone=danger]) {
  --button-fill: var(--elvt-component-button-fill-danger-default, rgb(206, 1, 1));
  --button-text: var(--elvt-component-button-label-danger-default, rgb(255, 255, 255));
  --button-border: var(--elvt-component-button-border-danger-color-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-danger-hover, rgb(171, 1, 1));
  --button-text--hover: var(--elvt-component-button-label-danger-hover, rgb(255, 255, 255));
  --button-border--hover: var(--elvt-component-button-border-danger-color-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-danger-active, rgb(108, 1, 1));
  --button-text--active: var(--elvt-component-button-label-danger-active, rgb(255, 255, 255));
  --button-border--active: var(--elvt-component-button-border-danger-color-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-danger-default, rgb(108, 1, 1));
}
:host([tone=danger]) .disabled {
  --button-fill: var(--elvt-component-button-fill-danger-disabled-default, rgb(255, 172, 172));
  --button-text: var(--elvt-component-button-label-danger-disabled-default, rgb(255, 240, 240));
  --button-border: var(--elvt-component-button-border-danger-color-disabled-default, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-danger-selected-default, rgb(108, 1, 1));
}

:host([tone=danger][selected]) {
  --button-fill: var(--elvt-component-button-fill-danger-selected-default, rgb(139, 1, 1));
  --button-text: var(--elvt-component-button-label-danger-selected-default, rgb(255, 255, 255));
  --button-border: var(--elvt-component-button-border-danger-color-selected-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-danger-selected-hover, rgb(108, 1, 1));
  --button-text--hover: var(--elvt-component-button-label-danger-selected-hover, rgb(255, 255, 255));
  --button-border--hover: var(--elvt-component-button-border-danger-color-selected-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-danger-selected-active, rgb(67, 14, 14));
  --button-text--active: var(--elvt-component-button-label-danger-selected-active, rgb(255, 255, 255));
  --button-border--active: var(--elvt-component-button-border-danger-color-selected-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-danger-selected-default, rgb(108, 1, 1));
}

:host([tone=emphasized]) {
  --button-fill: var(--elvt-component-button-fill-emphasized-default, rgb(213, 217, 225));
  --button-text: var(--elvt-component-button-label-emphasized-default, rgb(47, 50, 64));
  --button-border: var(--elvt-component-button-border-emphasized-color-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-emphasized-hover, rgb(190, 195, 205));
  --button-text--hover: var(--elvt-component-button-label-emphasized-hover, rgb(47, 50, 64));
  --button-border--hover: var(--elvt-component-button-border-emphasized-color-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-emphasized-active, rgb(136, 145, 160));
  --button-text--active: var(--elvt-component-button-label-emphasized-active, rgb(47, 50, 64));
  --button-border--active: var(--elvt-component-button-border-emphasized-color-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-emphasized-default, rgb(77, 83, 102));
}
:host([tone=emphasized]) .disabled {
  --button-fill: var(--elvt-component-button-fill-emphasized-disabled-default, rgb(213, 217, 225));
  --button-text: var(--elvt-component-button-label-emphasized-disabled-default, rgb(163, 170, 180));
  --button-border: var(--elvt-component-button-border-emphasized-color-disabled-default, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-emphasized-selected-default, rgb(77, 83, 102));
}

:host([tone=emphasized][selected]) {
  --button-fill: var(--elvt-component-button-fill-emphasized-selected-default, rgb(163, 170, 180));
  --button-text: var(--elvt-component-button-label-emphasized-selected-default, rgb(17, 18, 23));
  --button-border: var(--elvt-component-button-border-emphasized-color-selected-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-emphasized-selected-hover, rgb(136, 145, 160));
  --button-text--hover: var(--elvt-component-button-label-emphasized-selected-hover, rgb(17, 18, 23));
  --button-border--hover: var(--elvt-component-button-border-emphasized-color-selected-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-emphasized-selected-active, rgb(112, 122, 143));
  --button-text--active: var(--elvt-component-button-label-emphasized-selected-active, rgb(17, 18, 23));
  --button-border--active: var(--elvt-component-button-border-emphasized-color-selected-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-emphasized-selected-default, rgb(77, 83, 102));
}

:host([tone=subtle]) {
  --button-fill: var(--elvt-component-button-fill-subtle-default, rgb(234, 244, 255));
  --button-text: var(--elvt-component-button-label-subtle-default, rgb(11, 92, 223));
  --button-border: var(--elvt-component-button-border-subtle-color-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-subtle-hover, rgb(185, 219, 255));
  --button-text--hover: var(--elvt-component-button-label-subtle-hover, rgb(11, 92, 223));
  --button-border--hover: var(--elvt-component-button-border-subtle-color-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-subtle-active, rgb(95, 172, 255));
  --button-text--active: var(--elvt-component-button-label-subtle-active, rgb(11, 92, 223));
  --button-border--active: var(--elvt-component-button-border-subtle-color-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-subtle-default, rgba(255, 255, 255, 0));
}
:host([tone=subtle]) .disabled {
  --button-fill: var(--elvt-component-button-fill-subtle-disabled-default, rgb(185, 219, 255));
  --button-text: var(--elvt-component-button-label-subtle-disabled-default, rgb(234, 244, 255));
  --button-border: var(--elvt-component-button-border-subtle-color-disabled-default, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-subtle-selected-default, rgba(255, 255, 255, 0));
}

:host([tone=subtle][selected]) {
  --button-fill: var(--elvt-component-button-fill-subtle-selected-default, rgb(144, 198, 255));
  --button-text: var(--elvt-component-button-label-subtle-selected-default, rgb(11, 92, 223));
  --button-border: var(--elvt-component-button-border-subtle-color-selected-default, rgba(255, 255, 255, 0));
  --button-fill--hover: var(--elvt-component-button-fill-subtle-selected-hover, rgb(95, 172, 255));
  --button-text--hover: var(--elvt-component-button-label-subtle-selected-hover, rgb(35, 66, 117));
  --button-border--hover: var(--elvt-component-button-border-subtle-color-selected-hover, rgba(255, 255, 255, 0));
  --button-fill--active: var(--elvt-component-button-fill-subtle-selected-active, rgb(42, 144, 255));
  --button-text--active: var(--elvt-component-button-label-subtle-selected-active, rgb(0, 114, 255));
  --button-border--active: var(--elvt-component-button-border-subtle-color-selected-active, rgba(255, 255, 255, 0));
  --button-group-separator-color: var(--elvt-component-buttonGroup-separator-subtle-selected-default, rgba(255, 255, 255, 0));
}

/* Scale depending on size attribute */
:host([size=large]) {
  --button-height: var(--elvt-component-button-height-l, 3rem);
  --button-gap: var(--elvt-component-button-gap-l, 0.75rem);
  --button-padding-column: var(--elvt-component-button-padding-column-l, 1.25rem);
  --button-border-radius: var(--elvt-component-button-border-radius-s, 0.25rem);
}
:host([size=large]) .button {
  font-family: var(--elvt-type-alias-emphasized-label-l-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-l-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-l-font-size, 1.25rem);
  line-height: 1.6;
}

:host([size=small]) {
  --button-height: var(--elvt-component-button-height-s, 2rem);
  --button-gap: var(--elvt-component-button-gap-s, 0.25rem);
  --button-padding-column: var(--elvt-component-button-padding-column-s, 0.75rem);
  --button-border-radius: var(--elvt-component-button-border-radius-s, 0.25rem);
}
:host([size=small]) .button {
  font-family: var(--elvt-type-alias-emphasized-label-s-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-s-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-s-font-size, 0.875rem);
  line-height: 1.429;
}

/*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */
:host(.button-group-first:not(.button-group-last)) .button {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-inline-end: none;
}

:host(.button-group-last:not(.button-group-first)) .button {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start: var(--elvt-component-buttonGroup-border-width-s, 0.0625rem) solid var(--button-group-separator-color);
}

:host(.button-group-inner) .button {
  border-radius: 0;
  border-inline-end: none;
  border-inline-start: var(--elvt-component-buttonGroup-border-width-s, 0.0625rem) solid var(--button-group-separator-color);
}`;

// src/components/buttons/button/button.component.ts
import { EventSubscription, Subscriptions, webComponent } from "@inform-elevate/elevate-cdk";
import { classMap } from "lit/directives/class-map.js";
var ButtonType = {
  Button: "button",
  Reset: "reset",
  Submit: "submit"
};
var ButtonTone = __spreadProps(__spreadValues({}, Tone), {
  Emphasized: TONE_EMPHASIZED,
  Subtle: TONE_SUBTLE
});
var ButtonComponent = class extends LitElement {
  constructor() {
    super();
    this.disabled = false;
    this.selected = false;
    this.size = Size.Medium;
    this.tone = ButtonTone.Neutral;
    this.type = ButtonType.Button;
    this._filledSlots = {
      prefix: false,
      suffix: false
    };
    this._subscriptions = new Subscriptions();
    this._internals = this.attachInternals();
  }
  get padding() {
    return this._padding;
  }
  set padding(value) {
    this._padding = Padding.create(value, this._padding);
  }
  /**
   * Declare the component a form associated control
   */
  static get formAssociated() {
    return true;
  }
  connectedCallback() {
    super.connectedCallback();
    this._subscriptions.add(
      new EventSubscription(this, "click", () => {
        if (this._internals.form) {
          const controller = new FormController(this._internals.form);
          if (this.type === "submit") {
            controller.submit(this);
          }
          if (this.type === "reset") {
            controller.reset(this);
          }
        }
      })
    );
  }
  disconnectedCallback() {
    this._subscriptions.unsubscribe();
  }
  render() {
    var _a;
    (_a = this._padding) == null ? void 0 : _a.applyTo(this);
    const isLink = this.isLink() && !this.disabled;
    const rel = this.rel || "noreferrer noopener";
    const content = html`
            <slot part="prefix" name="prefix" ?data-filled=${this._filledSlots.prefix} @slotchange=${() => this.handleSlotChange("prefix")}></slot>
            <slot part="label"></slot>
            <slot part="suffix" name="suffix" ?data-filled=${this._filledSlots.suffix} @slotchange=${() => this.handleSlotChange("suffix")}></slot>
        `;
    const classes = classMap({
      button: true,
      disabled: this.disabled
    });
    return isLink ? html`
                  <a
                      class=${classes}
                      type=${this.type}
                      href=${ifDefined(isLink && !this.disabled ? this.href : void 0)}
                      target=${ifDefined(isLink ? this.target : void 0)}
                      rel=${ifDefined(isLink && this.target ? rel : void 0)}
                      download=${ifDefined(isLink ? this.download : void 0)}>
                      ${content}
                  </a>
              ` : html` <button class=${classes} type=${this.type} rel=${ifDefined(isLink && this.target ? rel : void 0)}>${content}</button> `;
  }
  focus(options) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.focus(options);
  }
  /**
   * Store the 'filled' state of a slot. This allows to
   * hide the empty slots.
   */
  handleSlotChange(name) {
    var _a;
    const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`slot[name=${name}]`);
    if (slot) {
      const isFilled = slot.assignedNodes().length > 0;
      const slotKey = name;
      if (this._filledSlots[slotKey] !== isFilled) {
        this._filledSlots[slotKey] = isFilled;
        this.requestUpdate();
      }
    }
  }
  isLink() {
    return !!(this.href && this.href !== "");
  }
};
ButtonComponent.styles = [unsafeCSS(distance_styles_default), unsafeCSS(button_styles_default)];
__decorateClass([
  property({ type: Boolean, reflect: true })
], ButtonComponent.prototype, "disabled", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonComponent.prototype, "download", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonComponent.prototype, "href", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonComponent.prototype, "name", 2);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: Padding.converter
  })
], ButtonComponent.prototype, "padding", 1);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonComponent.prototype, "rel", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], ButtonComponent.prototype, "selected", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonComponent.prototype, "size", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonComponent.prototype, "target", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonComponent.prototype, "tone", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonComponent.prototype, "type", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonComponent.prototype, "value", 2);
__decorateClass([
  query("button, a")
], ButtonComponent.prototype, "_element", 2);
__decorateClass([
  state()
], ButtonComponent.prototype, "_filledSlots", 2);
ButtonComponent = __decorateClass([
  webComponent({ name: "elvt-button", dependencies: ["sl-button"] })
], ButtonComponent);

export {
  ButtonType,
  ButtonTone,
  ButtonComponent
};
