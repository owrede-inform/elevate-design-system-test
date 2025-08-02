import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/menus/menu-item/menu-item.component.ts
import { property, query, state } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/menus/menu-item/menu-item.styles.scss?inline
var menu_item_styles_default = `:host slot:not([name]) {
  display: inline-flex;
  align-items: center;
}
:host sl-menu-item.selected::part(base) {
  background-color: var(--sl-color-neutral-200);
  color: var(--sl-color-neutral-1000);
}
:host sl-menu-item.hasSuffix::part(suffix) {
  display: inline-flex;
  padding-inline-start: var(--elvt-measures-distance-2xs, 0.5rem);
}`;

// src/components/menus/menu-item/menu-item.component.ts
import "@shoelace-style/shoelace";
import { classMap } from "lit/directives/class-map.js";
import { webComponent } from "@inform-elevate/elevate-cdk";
var MenuItemType = {
  Checkbox: "checkbox",
  Normal: "normal"
};
var MenuItemComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.selected = false;
    this.type = MenuItemType.Normal;
    this._hasSubmenu = false;
    this._hasPrefix = false;
    this._hasSuffix = false;
    this._checked = false;
  }
  handleClick(event) {
    if (this.href && this.href !== "") {
      event.preventDefault();
      window.open(this.href, this.target);
    }
  }
  get checked() {
    return this._wrappedItem ? this._wrappedItem.checked : this._checked;
  }
  set checked(value) {
    this._checked = value;
    if (this._wrappedItem) {
      this._wrappedItem.checked = value;
    }
  }
  connectedCallback() {
    super.connectedCallback();
  }
  focus() {
    return this._wrappedElement.focus();
  }
  isSubmenu() {
    return this._hasSubmenu;
  }
  render() {
    const classes = classMap({
      hasPrefix: this._hasPrefix,
      hasSuffix: this._hasSuffix,
      selected: this.selected
    });
    return html` <sl-menu-item class=${classes} ?checked=${this.checked} ?disabled=${this.disabled} type=${this.type} value=${this.value} @click=${this.handleClick}>
            <slot></slot>
            <slot name="prefix" slot="prefix" @slotchange=${() => this._hasPrefix = this.isSlotFilled("prefix")}></slot>
            <slot name="suffix" slot="suffix" @slotchange=${() => this._hasSuffix = this.isSlotFilled("suffix")}></slot>
            <slot name="submenu" @slotchange=${this.handleSubmenuSlotChange} slot=${this.isSubmenu() ? "submenu" : "_"}></slot>
        </sl-menu-item>`;
  }
  setFocusable(value) {
    this._wrappedElement.tabIndex = value ? 0 : -1;
  }
  isSlotFilled(name) {
    var _a;
    const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`slot[name=${name}]`);
    return slot ? slot.assignedNodes().length > 0 : false;
  }
  handleSubmenuSlotChange() {
    this._hasSubmenu = this._submenuSlot.assignedNodes().length > 0;
  }
};
MenuItemComponent.styles = unsafeCSS(menu_item_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MenuItemComponent.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MenuItemComponent.prototype, "selected", 2);
__decorateClass([
  property({ type: String, reflect: true })
], MenuItemComponent.prototype, "type", 2);
__decorateClass([
  property({ type: String, reflect: true })
], MenuItemComponent.prototype, "value", 2);
__decorateClass([
  state()
], MenuItemComponent.prototype, "_hasSubmenu", 2);
__decorateClass([
  query("slot[name=submenu]")
], MenuItemComponent.prototype, "_submenuSlot", 2);
__decorateClass([
  query("sl-menu-item")
], MenuItemComponent.prototype, "_wrappedElement", 2);
__decorateClass([
  query("sl-menu-item")
], MenuItemComponent.prototype, "_wrappedItem", 2);
__decorateClass([
  state()
], MenuItemComponent.prototype, "_hasPrefix", 2);
__decorateClass([
  state()
], MenuItemComponent.prototype, "_hasSuffix", 2);
__decorateClass([
  property({ type: String, reflect: true })
], MenuItemComponent.prototype, "href", 2);
__decorateClass([
  property({ type: String, reflect: true })
], MenuItemComponent.prototype, "target", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MenuItemComponent.prototype, "checked", 1);
MenuItemComponent = __decorateClass([
  webComponent({ name: "elvt-menu-item", dependencies: ["sl-menu-item"] })
], MenuItemComponent);

export {
  MenuItemType,
  MenuItemComponent
};
