import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/tooltip/tooltip.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

// src/components/tooltip/tooltip.styles.scss?inline
var tooltip_styles_default = `:host {
  position: relative;
  display: contents;
}
:host .anchor {
  display: inline-block;
}`;

// src/components/tooltip/tooltip.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var TooltipComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.content = "";
    this.hoist = "";
  }
  render() {
    return html`<sl-tooltip ?hoist="${this.hoist}">
            <slot name="content" slot="content">${this.content}</slot>
            <div class="anchor"><slot></slot></div>
        </sl-tooltip>`;
  }
};
TooltipComponent.styles = unsafeCSS(tooltip_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], TooltipComponent.prototype, "content", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TooltipComponent.prototype, "hoist", 2);
TooltipComponent = __decorateClass([
  webComponent({ name: "elvt-tooltip", dependencies: ["sl-tooltip"] })
], TooltipComponent);

export {
  TooltipComponent
};
