import {
  distance_styles_default
} from "./chunk.N5ECHOWP.js";
import {
  Gap
} from "./chunk.HDRIWQEP.js";
import {
  Padding
} from "./chunk.E3TEPSWS.js";
import {
  Direction
} from "./chunk.JZGDHJ2L.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/toolbar/toolbar.component.ts
import { property } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/toolbar/toolbar.styles.scss?inline
var toolbar_styles_default = `:host {
  --border-width: 1px;
  --border-color: var(--elvt-alias-layout-border-default, rgb(213, 217, 225));
  --fill: var(--elvt-alias-layout-layer-default, rgb(255, 255, 255));
  display: grid;
  grid-template: 1fr/1fr;
  box-sizing: border-box;
  position: relative;
}
:host .ground {
  display: grid;
  grid-template-columns: auto 10fr auto;
  grid-template-rows: auto;
  grid-template-areas: "start main end";
  background-color: var(--fill);
  padding: var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left);
  gap: var(--gap-column) var(--gap-row);
  position: relative;
  box-sizing: border-box;
}
:host .ground slot {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
:host .ground slot:not([name]) {
  grid-area: main;
  flex-grow: 1;
}
:host .ground slot[name=start] {
  grid-area: start;
  min-width: 30px;
  position: relative;
}
:host .ground slot[name=end] {
  grid-area: end;
  justify-content: flex-end;
}
:host .ground[data-direction=row][data-border=end], :host .ground[data-direction=row][data-border=both] {
  border-bottom: var(--border-width) solid var(--border-color);
}
:host .ground[data-direction=row][data-border=start], :host .ground[data-direction=row][data-border=both] {
  border-top: var(--border-width) solid var(--border-color);
}
:host .ground[data-direction=column] {
  grid-template-columns: 1fr;
  grid-template-rows: auto 10fr auto;
  grid-template-areas: "start" "main" "end";
}
:host .ground[data-direction=column] slot {
  flex-direction: column;
}
:host .ground[data-direction=column][data-border=end]:dir(ltr), :host .ground[data-direction=column][data-border=end]:dir(rtl), :host .ground[data-direction=column][data-border=both] {
  border-right: var(--border-width) solid var(--border-color);
}
:host .ground[data-direction=column][data-border=start]:dir(ltr), :host .ground[data-direction=column][data-border=end]:dir(rtl), :host .ground[data-direction=column][data-border=both] {
  border-left: var(--border-width) solid var(--border-color);
}
:host .ground[data-border=all] {
  border: var(--border-width) solid var(--border-color);
}

:host(:not([data-has-header=true])) slot[name=header] {
  display: none;
}

:host(:not([data-has-footer=true])) slot[name=footer] {
  display: none;
}

:host([layer=elevated]) {
  --fill: var(--elvt-alias-layout-layer-elevated, rgb(243, 244, 247));
}

:host([layer=sunken]) {
  --fill: var(--elvt-alias-layout-layer-sunken, rgb(213, 217, 225));
}

:host([layer=overlay]) {
  --fill: var(--elvt-alias-layout-layer-overlay, rgb(255, 255, 255));
}`;

// src/components/toolbar/toolbar.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var ToolbarBorder = {
  All: "all",
  Both: "both",
  Start: "start",
  None: "none",
  End: "end"
};
var ToolbarLayer = {
  Default: "default",
  Elevated: "elevated",
  Overlay: "overlay",
  Sunken: "sunken"
};
var ToolbarComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.border = ToolbarBorder.Start;
    this.layer = ToolbarLayer.Default;
    this.direction = Direction.Row;
    this._gap = new Gap("2xs");
    this._padding = new Padding("2xs");
  }
  get gap() {
    return this._gap;
  }
  set gap(value) {
    this._gap = Gap.create(value, this._gap);
  }
  get padding() {
    return this._padding;
  }
  set padding(value) {
    this._padding = Padding.create(value, this._padding);
  }
  render() {
    this._gap.applyTo(this);
    this._padding.applyTo(this);
    return html`
            <div class="ground" data-border=${this.border} data-direction=${this.direction}>
                <slot name="start" slot="start" @slotchange=${this.updateStartSlot}></slot>
                <slot></slot>
                <slot name="end" slot="end" @slotchange=${this.updateEndSlot}></slot>
            </div>
        `;
  }
  isSlotFilled(name) {
    var _a;
    const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`slot[name=${name}]`);
    return slot ? slot.assignedNodes().length > 0 : false;
  }
  updateEndSlot() {
    this.dataset.hasEnd = this.isSlotFilled("end") ? "true" : "false";
  }
  updateStartSlot() {
    this.dataset.hasStart = this.isSlotFilled("start") ? "true" : "false";
  }
};
ToolbarComponent.styles = [unsafeCSS(distance_styles_default), unsafeCSS(toolbar_styles_default)];
__decorateClass([
  property({
    type: String,
    reflect: true
  })
], ToolbarComponent.prototype, "border", 2);
__decorateClass([
  property({
    type: String,
    reflect: true
  })
], ToolbarComponent.prototype, "layer", 2);
__decorateClass([
  property({
    type: String,
    reflect: true
  })
], ToolbarComponent.prototype, "direction", 2);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: Gap.converter
  })
], ToolbarComponent.prototype, "gap", 1);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: Padding.converter
  })
], ToolbarComponent.prototype, "padding", 1);
ToolbarComponent = __decorateClass([
  webComponent({ name: "elvt-toolbar" })
], ToolbarComponent);

export {
  ToolbarBorder,
  ToolbarLayer,
  ToolbarComponent
};
