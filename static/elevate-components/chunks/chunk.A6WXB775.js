import {
  MenuItemSelectEvent
} from "./chunk.DLGRRAP3.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/menus/menu/menu.component.ts
import { property, query } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/menus/menu/menu.styles.scss?inline
var menu_styles_default = `:host([shape=inline]) {
  position: relative;
  display: grid;
  grid-template: 1fr/1fr;
  align-self: stretch;
}
:host([shape=inline]) sl-menu {
  border: none;
}`;

// src/components/menus/menu/menu.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var MenuShape = {
  Box: "box",
  Inline: "inline"
};
var MenuComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.shape = MenuShape.Box;
  }
  handleItemSelect(event) {
    var _a;
    const detailItem = (_a = event.detail) == null ? void 0 : _a.item;
    const selectedItem = this.items.find((item) => {
      var _a2;
      return (_a2 = item == null ? void 0 : item.shadowRoot) == null ? void 0 : _a2.contains(detailItem);
    });
    if (selectedItem) {
      this.dispatchEvent(
        new MenuItemSelectEvent("elvt-item-select", {
          detail: { item: selectedItem },
          bubbles: true
        })
      );
    }
  }
  /**
   * Return all menu items (identified by the 'role' attribute)
   */
  get items() {
    return this._slot.assignedElements().filter((item) => {
      const role = item.getAttribute("role");
      return "isMenuItem" in item && item.isMenuItem || role === "menuitem" || role === "menuitemcheckbox";
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "menu");
  }
  setCurrentItem(item) {
    this.items.forEach((i) => {
      i.setFocusable(i === item);
    });
    item == null ? void 0 : item.focus();
  }
  render() {
    return html` <sl-menu @sl-select=${this.handleItemSelect}>
            <slot @slotchange=${this.handleSlotChange}></slot>
        </sl-menu>`;
  }
  handleSlotChange() {
    const items = this.items;
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }
};
MenuComponent.styles = unsafeCSS(menu_styles_default);
__decorateClass([
  query("slot:not([name])")
], MenuComponent.prototype, "_slot", 2);
__decorateClass([
  property({ type: String, reflect: true })
], MenuComponent.prototype, "shape", 2);
MenuComponent = __decorateClass([
  webComponent({ name: "elvt-menu", dependencies: ["sl-menu"] })
], MenuComponent);

export {
  MenuShape,
  MenuComponent
};
