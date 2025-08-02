import {
  Tone
} from "./chunk.GFUPY45O.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/indicator/indicator.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

// src/components/indicator/indicator.styles.scss?inline
var indicator_styles_default = `:host {
  --indicator-offset-column-value: var(--indicator-offset-column, 8px);
  --indicator-offset-row-value: var(--indicator-offset-row, 12px);
  display: inline-block;
  position: relative;
}
:host .anchor {
  position: absolute;
  display: block;
  right: var(--indicator-offset-column-value);
  top: var(--indicator-offset-row-value);
  width: 1px;
  height: 1px;
  overflow: visible;
  line-height: 1;
}
:host .anchor[data-position=top-start] {
  left: calc(0px - var(--indicator-offset-column-value));
  right: auto;
}
:host .anchor[data-position=bottom-start] {
  left: calc(0px - var(--indicator-offset-column-value));
  right: auto;
  bottom: calc(0px - var(--indicator-offset-row-value));
  top: auto;
}
:host .anchor[data-position=bottom-end] {
  bottom: calc(0px - var(--indicator-offset-row-value));
  top: auto;
}
:host slot[name=indicator] {
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
}
:host .anchor:dir(rtl) {
  left: var(--indicator-offset-column-value);
  right: auto;
}
:host .anchor:dir(rtl) slot[name=indicator] {
  left: auto;
  right: 0;
}`;

// src/components/indicator/indicator.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var IndicatorPosition = {
  BottomEnd: "bottom-end",
  BottomStart: "bottom-start",
  TopEnd: "top-end",
  TopStart: "top-start"
};
var IndicatorComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.position = IndicatorPosition.TopEnd;
    this.tone = Tone.Primary;
  }
  render() {
    return html`
            <slot></slot>
            <div class="anchor" data-position=${this.position}>
                <slot name="indicator">
                    <elvt-badge tone=${this.tone} size="small"></elvt-badge>
                </slot>
            </div>
        `;
  }
};
IndicatorComponent.styles = unsafeCSS(indicator_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], IndicatorComponent.prototype, "position", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IndicatorComponent.prototype, "tone", 2);
IndicatorComponent = __decorateClass([
  webComponent({ name: "elvt-indicator", dependencies: ["elvt-badge"] })
], IndicatorComponent);

export {
  IndicatorPosition,
  IndicatorComponent
};
