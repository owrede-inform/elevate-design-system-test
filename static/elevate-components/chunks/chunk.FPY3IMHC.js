import {
  Shape
} from "./chunk.AL52STRK.js";
import {
  Tone
} from "./chunk.GFUPY45O.js";
import {
  mdiWindowClose
} from "./chunk.HMLPYKN2.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/chip/chip.component.ts
import { property } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/chip/chip.styles.scss?inline
var chip_styles_default = `:host([tone=neutral]) .chip {
  border-color: var(--elvt-component-chip-border-color-neutral, rgb(77, 83, 102));
  background: var(--elvt-component-chip-fill-neutral, rgb(243, 244, 247));
  color: var(--elvt-component-chip-text-color-neutral, rgb(61, 66, 83));
}
:host([tone=neutral]) .chip .remove-icon-button {
  border-inline-start-color: var(--elvt-component-chip-border-color-neutral, rgb(77, 83, 102));
}
:host([tone=neutral]) .chip .remove-icon-button:hover,
:host([tone=neutral]) .chip button.chip-content:hover {
  background: var(--elvt-component-chip-control-fill-neutral-hover, rgb(213, 217, 225));
}
:host([tone=neutral]) .chip .remove-icon-button:active,
:host([tone=neutral]) .chip button.chip-content:active {
  background: var(--elvt-component-chip-control-fill-neutral-active, rgb(163, 170, 180));
}

:host([tone=danger]) .chip {
  border-color: var(--elvt-component-chip-border-color-critical, rgb(245, 1, 1));
  background: var(--elvt-component-chip-fill-critical, rgb(255, 240, 240));
  color: var(--elvt-component-chip-text-color-critical, rgb(206, 1, 1));
}
:host([tone=danger]) .chip .remove-icon-button {
  border-inline-start-color: var(--elvt-component-chip-border-color-critical, rgb(245, 1, 1));
}
:host([tone=danger]) .chip .remove-icon-button:hover,
:host([tone=danger]) .chip button.chip-content:hover {
  background: var(--elvt-component-chip-control-fill-critical-hover, rgb(255, 204, 204));
}
:host([tone=danger]) .chip .remove-icon-button:active,
:host([tone=danger]) .chip button.chip-content:active {
  background: var(--elvt-component-chip-control-fill-critical-active, rgb(255, 132, 132));
}

:host([tone=success]) .chip {
  border-color: var(--elvt-component-chip-border-color-success, rgb(18, 140, 70));
  background: var(--elvt-component-chip-fill-success, rgb(230, 248, 236));
  color: var(--elvt-component-chip-text-color-success, rgb(5, 118, 61));
}
:host([tone=success]) .chip .remove-icon-button {
  border-inline-start-color: var(--elvt-component-chip-border-color-success, rgb(18, 140, 70));
}
:host([tone=success]) .chip .remove-icon-button:hover,
:host([tone=success]) .chip button.chip-content:hover {
  background: var(--elvt-component-chip-control-fill-success-hover, rgb(170, 230, 188));
}
:host([tone=success]) .chip .remove-icon-button:active,
:host([tone=success]) .chip button.chip-content:active {
  background: var(--elvt-component-chip-control-fill-success-active, rgb(57, 192, 98));
}

:host([tone=warning]) .chip {
  border-color: var(--elvt-component-chip-border-color-warning, rgb(248, 143, 0));
  background: var(--elvt-component-chip-fill-warning, rgb(255, 243, 211));
  color: var(--elvt-component-chip-text-color-warning, rgb(164, 77, 0));
}
:host([tone=warning]) .chip .remove-icon-button {
  border-inline-start-color: var(--elvt-component-chip-border-color-warning, rgb(248, 143, 0));
}
:host([tone=warning]) .chip .remove-icon-button:hover,
:host([tone=warning]) .chip button.chip-content:hover {
  background: var(--elvt-component-chip-control-fill-warning-hover, rgb(255, 211, 121));
}
:host([tone=warning]) .chip .remove-icon-button:active,
:host([tone=warning]) .chip button.chip-content:active {
  background: var(--elvt-component-chip-control-fill-warning-active, rgb(248, 143, 0));
}

:host([tone=primary]) .chip {
  border-color: var(--elvt-component-chip-border-color-primary, rgb(0, 114, 255));
  background: var(--elvt-component-chip-fill-primary, rgb(234, 244, 255));
  color: var(--elvt-component-chip-text-color-primary, rgb(11, 92, 223));
}
:host([tone=primary]) .chip .remove-icon-button {
  border-inline-start-color: var(--elvt-component-chip-border-color-primary, rgb(0, 114, 255));
}
:host([tone=primary]) .chip .remove-icon-button:hover,
:host([tone=primary]) .chip button.chip-content:hover {
  background: var(--elvt-component-chip-control-fill-primary-hover, rgb(185, 219, 255));
}
:host([tone=primary]) .chip .remove-icon-button:active,
:host([tone=primary]) .chip button.chip-content:active {
  background: var(--elvt-component-chip-control-fill-primary-active, rgb(95, 172, 255));
}

:host([tone=neutral]) .remove-icon-button {
  color: var(--elvt-component-chip-control-icon-fill-neutral-default, rgb(61, 66, 83));
}
:host([tone=neutral]) .remove-icon-button:hover {
  color: var(--elvt-component-chip-control-icon-fill-neutral-hover, rgb(17, 18, 23));
}
:host([tone=neutral]) .remove-icon-button:active {
  color: var(--elvt-component-chip-control-icon-fill-neutral-active, rgb(17, 18, 23));
}

:host([tone=danger]) .remove-icon-button {
  color: var(--elvt-component-chip-control-icon-fill-critical-default, rgb(245, 1, 1));
}
:host([tone=danger]) .remove-icon-button:hover {
  color: var(--elvt-component-chip-control-icon-fill-critical-hover, rgb(206, 1, 1));
}
:host([tone=danger]) .remove-icon-button:active {
  color: var(--elvt-component-chip-control-icon-fill-critical-active, rgb(171, 1, 1));
}

:host([tone=success]) .remove-icon-button {
  color: var(--elvt-component-chip-control-icon-fill-success-default, rgb(18, 140, 70));
}
:host([tone=success]) .remove-icon-button:hover {
  color: var(--elvt-component-chip-control-icon-fill-success-hover, rgb(5, 118, 61));
}
:host([tone=success]) .remove-icon-button:active {
  color: var(--elvt-component-chip-control-icon-fill-success-active, rgb(5, 96, 54));
}

:host([tone=warning]) .remove-icon-button {
  color: var(--elvt-component-chip-control-icon-fill-warning-default, rgb(187, 99, 0));
}
:host([tone=warning]) .remove-icon-button:hover {
  color: var(--elvt-component-chip-control-icon-fill-warning-hover, rgb(164, 77, 0));
}
:host([tone=warning]) .remove-icon-button:active {
  color: var(--elvt-component-chip-control-icon-fill-warning-active, rgb(142, 58, 0));
}

:host([tone=primary]) .remove-icon-button {
  color: var(--elvt-component-chip-control-icon-fill-primary-default, rgb(0, 114, 255));
}
:host([tone=primary]) .remove-icon-button:hover {
  color: var(--elvt-component-chip-control-icon-fill-primary-hover, rgb(11, 92, 223));
}
:host([tone=primary]) .remove-icon-button:active {
  color: var(--elvt-component-chip-control-icon-fill-primary-active, rgb(27, 80, 166));
}

:host([size=small]) .chip {
  border-radius: var(--elvt-component-chip-border-radius-small, 0.125rem);
  border-width: var(--elvt-component-chip-border-width-small, 0.0625rem);
  height: var(--elvt-component-chip-height-small, 1.75rem);
}
:host([size=small]) .chip .chip-content {
  padding-inline-start: var(--elvt-component-chip-padding-width-left-small, 0.5rem);
  padding-inline-end: var(--elvt-component-chip-padding-width-right-small, 0.5rem);
}
:host([size=small]) .chip-content,
:host([size=small]) .remove-icon-button {
  height: var(--elvt-component-chip-height-small, 1.75rem);
}
:host([size=small]) .remove-icon-button {
  border-inline-start: var(--elvt-component-chip-border-width-small, 0.0625rem) solid;
  width: var(--elvt-component-chip-control-width-small, 1.75rem);
}

:host([size=medium]) .chip {
  border-radius: var(--elvt-component-chip-border-radius-medium, 0.25rem);
  border-width: var(--elvt-component-chip-border-width-medium, 0.0625rem);
  height: var(--elvt-component-chip-height-medium, 2.5rem);
}
:host([size=medium]) .chip .chip-content {
  padding-inline-start: var(--elvt-component-chip-padding-width-left-medium, 0.75rem);
  padding-inline-end: var(--elvt-component-chip-padding-width-right-medium, 0.75rem);
}
:host([size=medium]) .chip-content,
:host([size=medium]) .remove-icon-button {
  height: var(--elvt-component-chip-height-medium, 2.5rem);
}
:host([size=medium]) .remove-icon-button {
  border-inline-start: var(--elvt-component-chip-border-width-medium, 0.0625rem) solid;
  width: var(--elvt-component-chip-control-width-medium, 2.5rem);
}

:host([size=large]) .chip {
  border-radius: var(--elvt-component-chip-border-radius-large, 0.5rem);
  border-width: var(--elvt-component-chip-border-width-large, 0.125rem);
  height: var(--elvt-component-chip-height-large, 3rem);
}
:host([size=large]) .chip .chip-content {
  padding-inline-start: var(--elvt-component-chip-padding-width-left-large, 1rem);
  padding-inline-end: var(--elvt-component-chip-padding-width-right-large, 1rem);
}
:host([size=large]) .chip-content,
:host([size=large]) .remove-icon-button {
  height: var(--elvt-component-chip-height-large, 3rem);
}
:host([size=large]) .remove-icon-button {
  border-inline-start: var(--elvt-component-chip-border-width-large, 0.125rem) solid;
  width: var(--elvt-component-chip-control-width-large, 3rem);
}

:host {
  display: inline-block;
}

:host([size=small]) {
  font-family: var(--elvt-type-alias-emphasized-label-s-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-s-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-s-font-size, 0.875rem);
  line-height: 1.429;
}

:host([size=medium]) {
  font-family: var(--elvt-type-alias-emphasized-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-m-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-m-font-size, 1rem);
  line-height: 1.5;
}

:host([size=large]) {
  font-family: var(--elvt-type-alias-emphasized-label-l-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-l-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-l-font-size, 1.25rem);
  line-height: 1.6;
}

:host([size=small]) elvt-icon {
  --icon-scale: 1.2;
}

:host([size=medium]) elvt-icon {
  --icon-scale: 1.5;
}

:host([size=large]) elvt-icon {
  --icon-scale: 1.7;
}

:host([shape=pill]) .chip {
  border-radius: 4000px;
}

:host([editable]) .chip-content {
  cursor: pointer;
}

.chip {
  overflow: hidden;
  display: inline-flex;
  border-style: solid;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  cursor: inherit;
}

button {
  all: unset;
}

.chip-content,
.remove-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.remove-icon-button {
  cursor: pointer;
}`;

// src/components/chip/chip.component.ts
import { DependencyContainer, Subject, Subscriptions, webComponent } from "@inform-elevate/elevate-cdk";
var ChipIntl = class {
  constructor() {
    this.changes = new Subject();
  }
};
var DefaultChipIntl = class extends ChipIntl {
  constructor() {
    super(...arguments);
    this.removeLabel = "Remove";
  }
};
var ChipComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this._subscriptions = new Subscriptions();
    this.tone = Tone.Neutral;
    this.size = Size.Medium;
    this.shape = Shape.Box;
    this.removable = false;
    this.editable = false;
    this.removeLabel = "";
    this._messages = new DefaultChipIntl();
  }
  handleRemoveClick() {
    if (this.removable) {
      this.dispatchEvent(new CustomEvent("request-remove"));
    }
  }
  handleEditClick() {
    if (this.editable) {
      this.dispatchEvent(new CustomEvent("request-edit"));
    }
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this._messages = ((_a = DependencyContainer.findOnAncestorOf(this)) == null ? void 0 : _a.provide(ChipIntl)) || this._messages;
    this._subscriptions.add(this._messages.changes.subscribe(() => this.requestUpdate()));
  }
  disconnectedCallback() {
    this._subscriptions.unsubscribe();
  }
  render() {
    return html`
            <div class="chip">
                ${this.editable ? html` <button class="chip-content" @click=${this.handleEditClick}><slot part="content"></slot></button> ` : html` <span class="chip-content"><slot part="content"></slot></span> `}
                ${this.removable ? html`
                        <elvt-tooltip content=${this.removeLabel !== "" ? this.removeLabel : this._messages.removeLabel}>
                            <button class="remove-icon-button" tabindex="-1" @click=${this.handleRemoveClick}>
                                <slot name="remove-icon">
                                    <elvt-icon icon=${mdiWindowClose}></elvt-icon>
                                </slot>
                                <elvt-visually-hidden>${this.removeLabel !== "" ? this.removeLabel : this._messages.removeLabel}</elvt-visually-hidden>
                            </button>
                        </elv-tooltip>
                    ` : null}
            </div>
        `;
  }
};
ChipComponent.styles = unsafeCSS(chip_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], ChipComponent.prototype, "tone", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ChipComponent.prototype, "size", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ChipComponent.prototype, "shape", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], ChipComponent.prototype, "removable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], ChipComponent.prototype, "editable", 2);
__decorateClass([
  property({ type: String, reflect: true, attribute: "remove-label" })
], ChipComponent.prototype, "removeLabel", 2);
ChipComponent = __decorateClass([
  webComponent({ name: "elvt-chip", dependencies: ["elvt-icon", "elvt-tooltip", "elvt-visually-hidden"] })
], ChipComponent);

export {
  ChipIntl,
  ChipComponent
};
