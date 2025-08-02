import {
  Shape
} from "./chunk.AL52STRK.js";
import {
  Tone
} from "./chunk.GFUPY45O.js";
import {
  distance_styles_default
} from "./chunk.N5ECHOWP.js";
import {
  Padding
} from "./chunk.E3TEPSWS.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/badge/badge.component.ts
import { property } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/badge/badge.styles.scss?inline
var badge_styles_default = `:host {
  display: inline-flex;
  align-items: center;
  justify-content: stretch;
}

:host([tone=danger]) .badge {
  --pulse-color: var(--elvt-component-badge-fill-danger, rgb(206, 1, 1));
  background: var(--elvt-component-badge-fill-danger, rgb(206, 1, 1));
  color: var(--elvt-component-badge-text-color-danger, rgb(255, 255, 255));
}

:host([tone=success]) .badge {
  --pulse-color: var(--elvt-component-badge-fill-success, rgb(5, 118, 61));
  background: var(--elvt-component-badge-fill-success, rgb(5, 118, 61));
  color: var(--elvt-component-badge-text-color-success, rgb(255, 255, 255));
}

:host([tone=warning]) .badge {
  --pulse-color: var(--elvt-component-badge-fill-warning, rgb(255, 179, 54));
  background: var(--elvt-component-badge-fill-warning, rgb(255, 179, 54));
  color: var(--elvt-component-badge-text-color-warning, rgb(0, 0, 0));
}

:host([tone=neutral]) .badge {
  --pulse-color: var(--elvt-component-badge-fill-neutral, rgb(77, 83, 102));
  background: var(--elvt-component-badge-fill-neutral, rgb(77, 83, 102));
  color: var(--elvt-component-badge-text-color-neutral, rgb(255, 255, 255));
}

:host([tone=primary]) .badge {
  --pulse-color: var(--elvt-component-badge-fill-primary, rgb(11, 92, 223));
  background: var(--elvt-component-badge-fill-primary, rgb(11, 92, 223));
  color: var(--elvt-component-badge-text-color-primary, rgb(255, 255, 255));
}

.badge {
  font-family: var(--elvt-type-alias-emphasized-label-s-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-s-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-s-font-size, 0.875rem);
  line-height: 1.429;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--elvt-component-badge-border-radius-box, 0.25rem);
  border: none;
  padding: var(--elvt-component-badge-padding-row, 0rem) var(--elvt-component-badge-padding-column, 0.5rem);
  height: var(--elvt-component-badge-height, 1.5rem);
  min-width: var(--elvt-component-badge-height, 1.5rem);
  box-sizing: border-box;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  cursor: inherit;
}

:host([shape=pill]) .badge {
  border-radius: 4000px;
}

:host([padding]) .badge {
  padding: var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left);
}

:host([pulse]) .badge {
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 1em 1px color-mix(in srgb, var(--pulse-color), transparent 70%);
  }
  50% {
    box-shadow: 0 0 0.5em 1px color-mix(in srgb, var(--pulse-color), transparent 1%);
  }
  100% {
    box-shadow: 0 0 1em 1px color-mix(in srgb, var(--pulse-color), transparent 70%);
  }
}`;

// src/components/badge/badge.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var BadgeComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.pulse = false;
    this.shape = Shape.Pill;
    this.tone = Tone.Neutral;
  }
  get padding() {
    return this._padding;
  }
  set padding(value) {
    this._padding = Padding.create(value, this._padding);
  }
  render() {
    var _a;
    (_a = this._padding) == null ? void 0 : _a.applyTo(this);
    return html`<span class="badge"><slot></slot></span>`;
  }
};
BadgeComponent.styles = unsafeCSS([unsafeCSS(distance_styles_default), badge_styles_default]);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: Padding.converter
  })
], BadgeComponent.prototype, "padding", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], BadgeComponent.prototype, "pulse", 2);
__decorateClass([
  property({ type: String, reflect: true })
], BadgeComponent.prototype, "shape", 2);
__decorateClass([
  property({ type: String, reflect: true })
], BadgeComponent.prototype, "tone", 2);
BadgeComponent = __decorateClass([
  webComponent({ name: "elvt-badge" })
], BadgeComponent);

export {
  BadgeComponent
};
