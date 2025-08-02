import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/tabs/tab-panel/tab-panel.component.ts
import { property } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/tabs/tab-panel/tab-panel.styles.scss?inline
var tab_panel_styles_default = `:host {
  display: none;
}

:host([selected]) {
  display: block;
  color: var(--elvt-component-tabGroup-tabPanel-text-color, rgb(47, 50, 64));
  padding: var(--elvt-component-tabGroup-tabPanel-padding-row, 1rem) 0;
}`;

// src/components/tabs/tab-panel/tab-panel.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var TabPanelComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this._selected = false;
    this.name = "";
  }
  set selected(value) {
    if (this._selected !== value) {
      this._selected = value;
      this.setAttribute("aria-hidden", this.selected ? "false" : "true");
      this.setAttribute("class", this.selected ? "selected" : "");
    }
  }
  get selected() {
    return this._selected;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tabpanel");
  }
  render() {
    return html`<slot></slot>`;
  }
};
TabPanelComponent.styles = unsafeCSS(tab_panel_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], TabPanelComponent.prototype, "name", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TabPanelComponent.prototype, "selected", 1);
TabPanelComponent = __decorateClass([
  webComponent({ name: "elvt-tab-panel" })
], TabPanelComponent);

export {
  TabPanelComponent
};
