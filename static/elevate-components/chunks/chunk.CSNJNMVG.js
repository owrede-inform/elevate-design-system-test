import {
  Icon
} from "./chunk.QR7NMAP2.js";
import {
  mdiAlert,
  mdiAsterisk
} from "./chunk.HMLPYKN2.js";
import {
  CustomFormControl
} from "./chunk.I6NEI6WN.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/fields/custom-form-field.ts
import { property, state } from "lit/decorators.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
var CustomFormField = class extends CustomFormControl {
  constructor() {
    super(...arguments);
    this._filledLabelSlot = false;
    this._filledHelpTextSlot = false;
  }
  renderLabelSlot(passTo) {
    const hasLabel = this._filledLabelSlot || this.label && this.label !== "";
    const targetSlot = passTo || void 0;
    const label = html`
            <slot name="label" slot=${ifDefined(hasLabel && !this.required ? targetSlot : void 0)} @slotchange=${() => this.updateFieldSlotStatus("label")}>${this.label}</slot>
        `;
    if (this.required) {
      return html`<elvt-indicator slot=${ifDefined(hasLabel ? targetSlot : void 0)}>
                <elvt-icon class="required-indicator" slot="indicator" icon=${mdiAsterisk}></elvt-icon>
                ${label}</elvt-indicator
            > `;
    }
    return label;
  }
  renderHelpTextSlot(passTo) {
    const hasHelpText = this._filledHelpTextSlot || this.helpText && this.helpText !== "";
    const errorMessage = this.validationMessage;
    const targetSlot = passTo || void 0;
    if (this.touched && !this.validity.valid && errorMessage !== "") {
      const styles = {
        "--error-image": `url(${new Icon(mdiAlert)})`
      };
      return html`<span slot="help-text" class="error-message" style=${styleMap(styles)}>${errorMessage}</span>`;
    }
    return html`
            <slot name="help-text" slot=${ifDefined(hasHelpText ? targetSlot : void 0)} @slotchange=${() => this.updateFieldSlotStatus("help-text")}>${this.helpText} </slot>
        `;
  }
  updateFieldSlotStatus(name) {
    var _a, _b;
    const nodeLength = ((_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`slot[name=${name}]`)) == null ? void 0 : _b.assignedNodes().length) || 0;
    switch (name) {
      case "label":
        this._filledLabelSlot = nodeLength > 0;
        break;
      case "help-text":
        this._filledHelpTextSlot = nodeLength > 0;
        break;
    }
  }
};
__decorateClass([
  state()
], CustomFormField.prototype, "_filledLabelSlot", 2);
__decorateClass([
  state()
], CustomFormField.prototype, "_filledHelpTextSlot", 2);
__decorateClass([
  property({ type: String, reflect: true })
], CustomFormField.prototype, "label", 2);
__decorateClass([
  property({ type: String, reflect: true, attribute: "help-text" })
], CustomFormField.prototype, "helpText", 2);

export {
  CustomFormField
};
