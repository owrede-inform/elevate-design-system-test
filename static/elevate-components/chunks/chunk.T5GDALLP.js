import {
  elvtChevronRightThin
} from "./chunk.REDNIUQG.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/breadcrumbs/breadcrumb/breadcrumb.component.ts
import { query } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/breadcrumbs/breadcrumb/breadcrumb.styles.scss?inline
var breadcrumb_styles_default = `.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}`;

// src/components/breadcrumbs/breadcrumb/breadcrumb.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var BreadcrumbComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.Separator = elvtChevronRightThin;
  }
  // Generates a clone of the separator element to use for each breadcrumb item
  getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0];
    const clone = separator.cloneNode(true);
    [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
    clone.setAttribute("data-default", "");
    clone.slot = "separator";
    return clone;
  }
  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      (item) => item.tagName.toLowerCase() === "elvt-breadcrumb-item"
    );
    items.forEach((item, index) => {
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      } else if (separator.hasAttribute("data-default")) {
        separator.replaceWith(this.getSeparator());
      } else {
      }
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }
  render() {
    return html` <nav part="base" class="breadcrumb">
                <slot @slotchange=${this.handleSlotChange}></slot>
            </nav>

            <span hidden aria-hidden="true">
                <slot name="separator">
                    <elvt-icon icon=${this.Separator}></elvt-icon>
                </slot>
            </span>`;
  }
};
BreadcrumbComponent.styles = unsafeCSS(breadcrumb_styles_default);
__decorateClass([
  query("slot")
], BreadcrumbComponent.prototype, "defaultSlot", 2);
__decorateClass([
  query('slot[name="separator"]')
], BreadcrumbComponent.prototype, "separatorSlot", 2);
BreadcrumbComponent = __decorateClass([
  webComponent({ name: "elvt-breadcrumb", dependencies: ["elvt-breadcrumb-item", "elvt-icon"] })
], BreadcrumbComponent);

export {
  BreadcrumbComponent
};
