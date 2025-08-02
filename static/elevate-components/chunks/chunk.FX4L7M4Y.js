import {
  distance_styles_default
} from "./chunk.N5ECHOWP.js";
import {
  Padding
} from "./chunk.E3TEPSWS.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/card/card.component.ts
import { property } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/card/card.styles.scss?inline
var card_styles_default = `:host {
  --border-radius: var(--elvt-measures-radius-xs, 0.25rem);
  --border-width: var(--elvt-measures-borderWidth-s, 0.0625rem);
  --border-color: var(--elvt-alias-layout-border-default, rgb(213, 217, 225));
  --fill: var(--elvt-alias-layout-layer-default, rgb(255, 255, 255));
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 10fr min-content;
  grid-template-areas: "header" "content" "footer";
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--fill);
}
:host slot {
  display: block;
  padding: var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left);
}
:host slot[name=header] {
  grid-area: header;
  border-bottom: var(--border-width) solid var(--border-color);
}
:host slot:not([name]) {
  grid-area: content;
}
:host slot[name=footer] {
  grid-area: footer;
  border-top: var(--border-width) solid var(--border-color);
}

:host(:not([data-has-header=true])) slot[name=header] {
  display: none;
}

:host(:not([data-has-footer=true])) slot[name=footer] {
  display: none;
}

:host([border=none]) {
  border: none;
  border-radius: 0;
}

:host([border=rounded]) {
  border-radius: var(--elvt-measures-radius-m, 0.75rem);
}

:host([layer=elevated]) {
  --fill: var(--elvt-alias-layout-layer-elevated, rgb(243, 244, 247));
  --border-color: var(--elvt-alias-layout-border-default, rgb(213, 217, 225));
}

:host([layer=sunken]) {
  --fill: var(--elvt-alias-layout-layer-sunken, rgb(213, 217, 225));
  --border-color: var(--elvt-alias-layout-border-prominent, rgb(190, 195, 205));
}

:host([layer=overlay]) {
  --fill: var(--elvt-alias-layout-layer-overlay, rgb(255, 255, 255));
  --border-color: var(--elvt-alias-layout-border-default, rgb(213, 217, 225));
}`;

// src/components/card/card.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var CardBorder = {
  All: "all",
  Rounded: "rounded",
  None: "none"
};
var CardLayer = {
  Default: "default",
  Elevated: "elevated",
  Overlay: "overlay",
  Sunken: "sunken"
};
var CardComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.border = CardBorder.All;
    this.layer = CardLayer.Default;
    this._padding = new Padding("0");
  }
  get padding() {
    return this._padding;
  }
  set padding(value) {
    this._padding = Padding.create(value, this._padding);
  }
  render() {
    this._padding.applyTo(this);
    return html`
            <slot name="header" slot="header" @slotchange=${this.updateHeaderSlot}></slot>
            <slot></slot>
            <slot name="footer" slot="footer" @slotchange=${this.updateFooterSlot}></slot>
        `;
  }
  isSlotFilled(name) {
    var _a;
    const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`slot[name=${name}]`);
    return slot ? slot.assignedNodes().length > 0 : false;
  }
  updateFooterSlot() {
    this.dataset.hasFooter = this.isSlotFilled("footer") ? "true" : "false";
  }
  updateHeaderSlot() {
    this.dataset.hasHeader = this.isSlotFilled("header") ? "true" : "false";
  }
};
CardComponent.styles = [unsafeCSS(distance_styles_default), unsafeCSS(card_styles_default)];
__decorateClass([
  property({
    type: String,
    reflect: true
  })
], CardComponent.prototype, "border", 2);
__decorateClass([
  property({
    type: String,
    reflect: true
  })
], CardComponent.prototype, "layer", 2);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: Padding.converter
  })
], CardComponent.prototype, "padding", 1);
CardComponent = __decorateClass([
  webComponent({ name: "elvt-card" })
], CardComponent);

export {
  CardBorder,
  CardLayer,
  CardComponent
};
