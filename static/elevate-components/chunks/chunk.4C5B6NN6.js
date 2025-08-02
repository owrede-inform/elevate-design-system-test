import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/dropdown/dropdown.component.ts
import { property, query } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/dropdown/dropdown.styles.scss?inline
var dropdown_styles_default = `:host {
  display: inline-flex;
  align-items: center;
  line-height: unset;
}

slot[name=trigger] {
  display: flex;
  align-items: center;
}

sl-dropdown {
  display: flex;
  align-items: center;
}
sl-dropdown::part(trigger) {
  font-size: unset;
  line-height: normal;
}`;

// src/components/dropdown/dropdown.component.ts
import { ifDefined } from "lit/directives/if-defined.js";
import "@shoelace-style/shoelace";
import { webComponent } from "@inform-elevate/elevate-cdk";
var DropdownPlacement = {
  BottomEnd: "bottom-end",
  BottomStart: "bottom-start",
  Bottom: "bottom",
  LeftEnd: "left-end",
  LeftStart: "left-start",
  Left: "left",
  RightEnd: "right-end",
  RightStart: "right-start",
  Right: "right",
  TopEnd: "top-end",
  TopStart: "top-start",
  Top: "top"
};
var DropdownComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.hoist = false;
    this.placement = DropdownPlacement.BottomStart;
    this.disabled = false;
    this.stayOpenOnSelect = false;
    this._open = false;
  }
  get open() {
    if (this._wrappedElement) {
      return this._wrappedElement.open;
    }
    return this._open;
  }
  set open(value) {
    this._open = value;
    if (this._wrappedElement) {
      this._wrappedElement.open = value;
    }
  }
  /**
   * Show the menu
   */
  async show() {
    return this._wrappedElement.show();
  }
  /**
   * Hide the menu
   */
  async hide() {
    return this._wrappedElement.hide();
  }
  /**
   * Reposition the open menu
   */
  async reposition() {
    return this._wrappedElement.reposition();
  }
  render() {
    return html` <sl-dropdown
            placement=${ifDefined(this.placement)}
            ?hoist=${this.hoist}
            ?disabled=${this.disabled}
            ?open=${this.open}
            ?stay-open-on-select=${this.stayOpenOnSelect}
            @sl-select=${this.handleItemSelect}>
            <slot name="trigger" slot="trigger" @keydown=${this.handleTriggerKeydown}></slot>
            <slot></slot>
        </sl-dropdown>`;
  }
  async handleItemSelect() {
    if (!this.stayOpenOnSelect) {
      await this.hide();
      this._wrappedElement.focusOnTrigger();
    }
  }
  async handleTriggerKeydown(event) {
    const menu = this.getMenu();
    if (menu) {
      const menuItems = menu.items;
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (!this.open) {
          await this.show();
          await this.updateComplete;
        }
        if (menuItems.length > 0) {
          this.updateComplete.then(() => {
            if (event.key === "ArrowDown" || event.key === "Home") {
              menu.setCurrentItem(firstMenuItem);
              firstMenuItem.focus();
            }
            if (event.key === "ArrowUp" || event.key === "End") {
              menu.setCurrentItem(lastMenuItem);
              lastMenuItem.focus();
            }
          });
        }
      }
    }
  }
  getMenu() {
    const menu = this._defaultSlot.assignedElements({ flatten: true }).find((element) => element.getAttribute("role") === "menu");
    if (menu && "items" in menu && menu.items instanceof Array) {
      return menu;
    }
    return void 0;
  }
};
DropdownComponent.styles = unsafeCSS(dropdown_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true })
], DropdownComponent.prototype, "hoist", 2);
__decorateClass([
  property({ type: String, reflect: true })
], DropdownComponent.prototype, "placement", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], DropdownComponent.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "stay-open-on-select" })
], DropdownComponent.prototype, "stayOpenOnSelect", 2);
__decorateClass([
  query("sl-dropdown")
], DropdownComponent.prototype, "_wrappedElement", 2);
__decorateClass([
  query("slot:not([name])")
], DropdownComponent.prototype, "_defaultSlot", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], DropdownComponent.prototype, "open", 1);
DropdownComponent = __decorateClass([
  webComponent({ name: "elvt-dropdown", dependencies: ["sl-dropdown"] })
], DropdownComponent);

export {
  DropdownPlacement,
  DropdownComponent
};
