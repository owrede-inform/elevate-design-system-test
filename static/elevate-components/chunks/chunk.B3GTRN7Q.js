import {
  mdiAsterisk
} from "./chunk.HMLPYKN2.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/fields/field/field.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { webComponent } from "@inform-elevate/elevate-cdk";

// src/components/fields/field/field.styles.scss?inline
var field_styles_default = `:host {
  font-family: var(--elvt-type-alias-default-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-m-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-m-font-size, 1rem);
  line-height: 1.5;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: var(--elvt-measures-distance-2xs, 0.5rem);
  --label-color: var(--elvt-component-field-label-default-color, rgb(61, 66, 83));
}
:host .required-indicator {
  color: var(--elvt-component-requiredIndicator-color, rgb(206, 1, 1));
}
:host [part=main] {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: var(--elvt-measures-distance-2xs, 0.5rem);
  border: none;
  padding: 0;
  margin: 0;
  --indicator-offset-column: calc(var(--elvt-measures-distance-2xs, 0.5rem) * -1);
  --indicator-offset-row: calc(1em + (100% - 1em) * 0.5);
}
:host [part=main] legend {
  font-family: var(--elvt-type-alias-default-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-m-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-m-font-size, 1rem);
  line-height: 1.5;
  padding: 0;
  display: block;
  margin: 0 0 var(--elvt-measures-distance-2xs, 0.5rem);
}
:host [part=label] {
  color: var(--label-color);
}
:host [part=label].hide {
  display: none;
}
:host [part=help-text] {
  color: var(--label-color);
  flex-grow: 10;
  display: block;
}
:host [part=footer] {
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
}
:host [part=status] {
  display: block;
}

:host([size=small]) {
  font-family: var(--elvt-type-alias-default-label-s-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-s-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-s-font-size, 0.875rem);
  line-height: 1.429;
}

:host([size=large]) {
  font-family: var(--elvt-type-alias-default-label-l-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-l-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-l-font-size, 1.25rem);
  line-height: 1.6;
}

:host([invalid]) {
  --label-color: var(--elvt-component-field-label-invalid-color, rgb(206, 1, 1));
}

:host([disabled]) {
  --label-color: var(--elvt-component-field-label-disabled-color, rgb(163, 170, 180));
}`;

// src/components/fields/field/field.component.ts
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
var FieldComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.required = false;
    this.disabled = false;
    this.invalid = false;
    this.group = false;
    this.hideLabel = false;
    this.size = Size.Medium;
  }
  handleLabelClick() {
    var _a, _b;
    if (this.group) {
      const children = ((_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot:not([name])")) == null ? void 0 : _b.assignedElements()) || [];
      this.focusFirstControl(children);
    }
  }
  focusFirstControl(elements) {
    var _a;
    for (const element of elements) {
      if ("focus" in element && "value" in element && element.focus instanceof Function) {
        if (((_a = this.shadowRoot) == null ? void 0 : _a.activeElement) === element) {
          return true;
        }
        element.focus();
        return true;
      } else {
        const result = this.focusFirstControl([...element.children]);
        if (result) {
          return result;
        }
      }
    }
    return false;
  }
  render() {
    const hasHelpText = !!(this._filledHelpText || this.label && this.label !== "");
    const hasStatus = this._filledStatus;
    const label = html` <span class=${classMap({ hide: this.hideLabel })} part="label">
            ${this.required ? html` <elvt-indicator>
                      <elvt-icon class="required-indicator" slot="indicator" icon=${mdiAsterisk}></elvt-icon>
                      <slot name="label"> ${this.label}</slot>
                  </elvt-indicator>` : html` <slot name="label"> ${this.label}</slot>`}
        </span>`;
    const control = html` <div class="control" part="control" aria-describedby=${hasHelpText ? "help-text" : void 0}>
            <slot part="control"></slot>
        </div>`;
    return html`${this.group ? html`<fieldset part="main">
                      <legend @click=${this.handleLabelClick}>${label}</legend>
                      ${control}
                  </fieldset>` : html`<label part="main">${label}${control}</label>`}
            <div part="footer" class=${classMap({ filled: hasHelpText || hasStatus })}>
                <slot name="help-text" id="help-text" part="help-text" onslotchange=${() => this.updateFieldSlotStatus("help-text")}> ${this.helpText}</slot>
                <slot name="status" part="status"></slot>
            </div>`;
  }
  updateFieldSlotStatus(name) {
    var _a, _b;
    const nodeLength = ((_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`slot[name=${name}]`)) == null ? void 0 : _b.assignedNodes().length) || 0;
    switch (name) {
      case "help-text":
        this._filledHelpText = nodeLength > 0;
        break;
      case "status":
        this._filledStatus = nodeLength > 0;
        break;
    }
  }
};
FieldComponent.styles = unsafeCSS(field_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], FieldComponent.prototype, "label", 2);
__decorateClass([
  property({ type: String, reflect: true, attribute: "help-text" })
], FieldComponent.prototype, "helpText", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], FieldComponent.prototype, "required", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], FieldComponent.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], FieldComponent.prototype, "invalid", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], FieldComponent.prototype, "group", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "hide-label" })
], FieldComponent.prototype, "hideLabel", 2);
__decorateClass([
  property({ type: String, reflect: true })
], FieldComponent.prototype, "size", 2);
__decorateClass([
  state()
], FieldComponent.prototype, "_filledHelpText", 2);
__decorateClass([
  state()
], FieldComponent.prototype, "_filledStatus", 2);
FieldComponent = __decorateClass([
  webComponent({
    name: "elvt-field",
    dependencies: ["elvt-\xECndicator", "elvt-icon"]
  })
], FieldComponent);

export {
  FieldComponent
};
