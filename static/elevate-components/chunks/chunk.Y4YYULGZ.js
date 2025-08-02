import {
  distance_styles_default
} from "./chunk.N5ECHOWP.js";
import {
  Gap
} from "./chunk.HDRIWQEP.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/expansion-panels/expansion-panel-group/expansion-panel-group.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property, query } from "lit/decorators.js";

// src/components/expansion-panels/expansion-panel-group/expansion-panel-group.styles.scss?inline
var expansion_panel_group_styles_default = `:host slot {
  display: grid;
  row-gap: var(--gap-row);
}`;

// src/components/expansion-panels/expansion-panel-group/expansion-panel-group.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var ExpansionPanelGroupComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.allowMultipleExpanded = false;
    this.label = "";
    this._gap = new Gap("s");
  }
  get gap() {
    return this._gap;
  }
  set gap(value) {
    this._gap = Gap.create(value, this._gap);
  }
  handlePanelClick(event) {
    const target = event.target.closest("elvt-expansion-panel");
    if (!target || (target == null ? void 0 : target.disabled)) {
      return;
    }
    if (!this.allowMultipleExpanded) {
      const expansionPanels = this.getExpansionPanelElements();
      expansionPanels.forEach((panel) => panel.open = panel === target);
    }
  }
  getExpansionPanelElements() {
    return [...this.querySelectorAll("elvt-expansion-panel")];
  }
  render() {
    this._gap.applyTo(this);
    return html`<div class="panel-group" role="group" aria-label=${this.label}>
            <slot @click=${this.handlePanelClick}></slot>
        </div>`;
  }
};
ExpansionPanelGroupComponent.styles = [unsafeCSS(distance_styles_default), unsafeCSS(expansion_panel_group_styles_default)];
__decorateClass([
  query("slot")
], ExpansionPanelGroupComponent.prototype, "defaultSlot", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "allow-multiple-expanded" })
], ExpansionPanelGroupComponent.prototype, "allowMultipleExpanded", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ExpansionPanelGroupComponent.prototype, "label", 2);
__decorateClass([
  property({ type: String, reflect: true, converter: Gap.converter })
], ExpansionPanelGroupComponent.prototype, "gap", 1);
ExpansionPanelGroupComponent = __decorateClass([
  webComponent({ name: "elvt-expansion-panel-group", dependencies: ["elvt-expansion-panel"] })
], ExpansionPanelGroupComponent);

export {
  ExpansionPanelGroupComponent
};
