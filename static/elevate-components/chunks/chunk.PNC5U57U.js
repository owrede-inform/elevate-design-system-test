import {
  distance_styles_default
} from "./chunk.N5ECHOWP.js";
import {
  Padding
} from "./chunk.E3TEPSWS.js";
import {
  Direction
} from "./chunk.JZGDHJ2L.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/divider/divider.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";

// src/components/divider/divider.styles.scss?inline
var divider_styles_default = `:host {
  display: grid;
  grid-template: 1fr/1fr;
  align-self: stretch;
  box-sizing: border-box;
}

.ground {
  --_text-color: var(--divider-color, var(--elvt-component-divider-stroke-color-default, rgb(213, 217, 225)));
  --_stroke-color: var(--divider-stroke-color, var(--divider-color, var(--elvt-component-divider-stroke-color-default, rgb(213, 217, 225))));
  --_divider-end-length: var(--divider-end-length, var(--elvt-measures-distance-xs, 0.75rem));
  --_stroke-size: 1px;
  --_spacing: 0px;
  flex-direction: row;
  display: flex;
  align-items: stretch;
  justify-content: center;
  box-sizing: border-box;
  padding: var(--padding-top) calc(var(--padding-right) + var(--_spacing)) var(--padding-bottom) calc(var(--padding-left) + var(--_spacing));
}
.ground[data-size=small] {
  --_spacing: var(--elvt-component-divider-spacing-s, 0.5rem);
}
.ground[data-size=medium] {
  --_spacing: var(--elvt-component-divider-spacing-m, 1rem);
}
.ground[data-size=large] {
  --_spacing: var(--elvt-component-divider-spacing-l, 1.5rem);
}
.ground .divider {
  display: flex;
  justify-content: stretch;
  align-items: center;
  box-sizing: border-box;
  flex-grow: 1;
  color: var(--_stroke-color);
}
.ground .divider slot {
  color: var(--_text-color);
  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-direction: inherit;
}
.ground .divider slot:not([name]) {
  flex-grow: 1;
}
.ground .divider slot:not([name]):before, .ground .divider slot:not([name]):after {
  display: inline-block;
  background: var(--_stroke-color);
  content: " ";
  flex-grow: 1;
  min-height: var(--_stroke-size);
  min-width: var(--_stroke-size);
  height: var(--_divider-height);
  width: var(--_divider-width);
}
.ground .divider slot[name=prefix].filled:before,
.ground .divider slot[name=suffix].filled:after {
  display: inline-block;
  background: var(--_stroke-color);
  content: " ";
  flex-grow: 1;
  min-height: var(--_divider-minimum-height);
  min-width: var(--_divider-minimum-width);
  height: var(--_divider-height);
  width: var(--_divider-width);
}
.ground.row {
  --_divider-height: auto;
  --_divider-minimum-height: var(--_divider-end-length);
  --_divider-minimum-width: var(--_stroke-size);
  --_divider-width: var(--_stroke-size);
}
.ground.row .divider {
  flex-direction: column;
}
.ground.row .divider.labeled {
  gap: var(--elvt-measures-distance-3xs, 0.25rem);
}
.ground.row .divider.labeled .filled {
  gap: var(--elvt-measures-distance-3xs, 0.25rem);
}
.ground.column {
  --_divider-height: var(--_stroke-size);
  --_divider-minimum-height: var(--_stroke-size);
  --_divider-minimum-width: var(--divider-end-length, var(--elvt-measures-distance-xs, 0.75rem));
  --_divider-width: auto;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: calc(var(--padding-top) + var(--_spacing)) var(--padding-right) calc(var(--padding-bottom) + var(--_spacing)) var(--padding-left);
}
.ground.column .divider {
  flex-direction: row;
}
.ground.column .divider.labeled {
  gap: var(--elvt-measures-distance-2xs, 0.5rem);
}
.ground.column .divider.labeled slot {
  gap: var(--elvt-measures-distance-2xs, 0.5rem);
}`;

// src/components/divider/divider.component.ts
import { classMap } from "lit/directives/class-map.js";
import { webComponent } from "@inform-elevate/elevate-cdk";
var DividerComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.direction = Direction.Column;
    this._padding = new Padding("0");
    this._filledSlotDefault = false;
    this._filledSlotPrefix = false;
    this._filledSlotSuffix = false;
  }
  /**
   * Define padding around the divider line. The padding will be a part of the divider.
   */
  get padding() {
    return this._padding;
  }
  set padding(value) {
    this._padding = Padding.create(value, this._padding);
  }
  render() {
    this._padding.applyTo(this);
    const classes = classMap({
      ground: true,
      column: this.direction === Direction.Column,
      row: this.direction === Direction.Row
    });
    return html`<div part="ground" class=${classes} role="separator" data-size=${this.size}>
            <div part="divider" class=${classMap({ divider: true, labeled: this._filledSlotDefault })}>
                <slot name="prefix" class=${classMap({ filled: this._filledSlotPrefix })} @slotchange=${() => this.updateSlotStatus("prefix")}></slot>
                <slot class=${classMap({ filled: this._filledSlotDefault })} @slotchange=${() => this.updateSlotStatus()}></slot>
                <slot name="suffix" class=${classMap({ filled: this._filledSlotSuffix })} @slotchange=${() => this.updateSlotStatus("suffix")}></slot>
            </div>
        </div>`;
  }
  updateSlotStatus(name) {
    var _a, _b;
    const nodeLength = ((_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(name ? `slot[name=${name}]` : "slot:not([name])")) == null ? void 0 : _b.assignedNodes().length) || 0;
    switch (name) {
      case "prefix":
        this._filledSlotPrefix = nodeLength > 0;
        break;
      case "suffix":
        this._filledSlotSuffix = nodeLength > 0;
        break;
      default:
        this._filledSlotDefault = nodeLength > 0;
        break;
    }
  }
};
DividerComponent.styles = [unsafeCSS(distance_styles_default), unsafeCSS(divider_styles_default)];
__decorateClass([
  property({ type: String, reflect: true })
], DividerComponent.prototype, "direction", 2);
__decorateClass([
  property({ type: String, reflect: true })
], DividerComponent.prototype, "size", 2);
__decorateClass([
  state()
], DividerComponent.prototype, "_filledSlotDefault", 2);
__decorateClass([
  state()
], DividerComponent.prototype, "_filledSlotPrefix", 2);
__decorateClass([
  state()
], DividerComponent.prototype, "_filledSlotSuffix", 2);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: Padding.converter
  })
], DividerComponent.prototype, "padding", 1);
DividerComponent = __decorateClass([
  webComponent({ name: "elvt-divider" })
], DividerComponent);

export {
  DividerComponent
};
