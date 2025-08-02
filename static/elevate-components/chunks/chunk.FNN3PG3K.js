import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/buttons/button-group/button-group.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property, query } from "lit/decorators.js";

// src/components/buttons/button-group/button-group.styles.scss?inline
var button_group_styles_default = `:host {
  display: inline-block;
}

.button-group {
  display: flex;
  flex-wrap: nowrap;
}`;

// src/components/buttons/button-group/button-group.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
import { ifDefined } from "lit/directives/if-defined.js";
var ButtonGroupComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.label = "";
  }
  handleSlotChange() {
    const buttons = this.buttons;
    const lastIndex = buttons.length - 1;
    buttons.forEach((button, index) => {
      button.classList.toggle("button-group-first", index === 0);
      button.classList.toggle("button-group-inner", index > 0 && index < lastIndex);
      button.classList.toggle("button-group-last", index === lastIndex);
    });
  }
  render() {
    return html` <div part="base" class="button-group" role="group" aria-label=${ifDefined(this.label)}>
            <slot @slotchange=${this.handleSlotChange}></slot>
        </div>`;
  }
  get buttons() {
    return [...this.defaultSlot.assignedElements({ flatten: true })].map((element) => {
      var _a;
      const selector = "elvt-button";
      return (_a = element.closest(selector)) != null ? _a : element.querySelector(selector);
    }).filter((element) => !!element);
  }
};
ButtonGroupComponent.styles = unsafeCSS(button_group_styles_default);
__decorateClass([
  query("slot")
], ButtonGroupComponent.prototype, "defaultSlot", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ButtonGroupComponent.prototype, "label", 2);
ButtonGroupComponent = __decorateClass([
  webComponent({ name: "elvt-button-group" })
], ButtonGroupComponent);

export {
  ButtonGroupComponent
};
