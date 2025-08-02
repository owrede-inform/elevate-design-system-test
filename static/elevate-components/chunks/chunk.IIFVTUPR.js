import {
  CustomFormField
} from "./chunk.CSNJNMVG.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/select/select.component.ts
import { html, unsafeCSS } from "lit";
import { property, query } from "lit/decorators.js";

// src/components/select/select.styles.scss?inline
var select_styles_default = `:host {
  display: contents;
}
:host .group-label {
  font-weight: bold;
  padding: var(--elvt-measures-distance-xs, 0.75rem) var(--elvt-measures-distance-xs, 0.75rem);
}
:host .group {
  display: block;
}
:host .group:not(:last-child) {
  border-bottom: 1px solid var(--sl-panel-border-color);
}

sl-select::part(combobox) {
  width: var(--form-control-width);
  text-align: var(--form-control-text-align);
}`;

// src/components/select/select.component.ts
import "@shoelace-style/shoelace";
import { webComponent } from "@inform-elevate/elevate-cdk";
var SelectComponent = class extends CustomFormField {
  constructor() {
    super(...arguments);
    this.clearable = false;
    this.required = false;
    this.size = Size.Medium;
    this._options = [];
  }
  get options() {
    return this._options;
  }
  set options(value) {
    this._options = value;
  }
  get value() {
    const value = this._wrappedSelect ? this._wrappedSelect.value : this._value;
    if (value === void 0) {
      return value;
    }
    if (this.multiple) {
      return value instanceof Array ? value : [value];
    } else if (Array.isArray(value)) {
      const [firstValue] = value;
      return firstValue;
    }
    return value;
  }
  set value(value) {
    let normalizedValue = value;
    if (typeof value === "string" && this.multiple) {
      normalizedValue = value.split(" ").map((s) => s.trim()).filter((s) => s !== "");
    }
    this._value = normalizedValue;
    if (this._wrappedSelect) {
      this._wrappedSelect.value = normalizedValue || "";
    }
    this.updateFormValue();
  }
  render() {
    return html` <sl-select
            name=${this.name}
            ?clearable=${this.clearable}
            ?disabled=${this.disabled}
            ?multiple=${this.multiple}
            ?required=${this.required}
            placeholder=${this.placeholder}
            size=${this.size}
            value=${this._value}
            @sl-input=${this.handleInput}
            @sl-change=${this.handleChange}>
            ${this.options.map((optionOrGroup) => this.renderOption(optionOrGroup))} ${this.renderLabelSlot("label")} ${this.renderHelpTextSlot("help-text")}
            <slot name="prefix" slot="prefix"></slot>
            <slot name="suffix" slot="suffix"></slot>
        </sl-select>`;
  }
  handleInput() {
    this.dispatchEvent(new Event("input", { bubbles: true }));
  }
  handleChange() {
    this.updateFormValue();
    this.dispatchEvent(new Event("change", { bubbles: true }));
  }
  renderOption(optionOrGroup) {
    const optionType = typeof optionOrGroup;
    if (optionType === "string" || optionType === "number") {
      const option2 = optionOrGroup;
      return html` <sl-option value=${option2} class="label">${option2}</sl-option>`;
    }
    if (optionType === "object" && (optionOrGroup == null ? void 0 : optionOrGroup.items) instanceof Array) {
      const group = optionOrGroup;
      const label2 = group.label instanceof Function ? group.label(group) : group.label;
      return html` <span class="group">
                <span class="group-label">${label2}</span>
                <span class="group-items">${group.items.map((item) => this.renderOption(item))}</span>
            </span>`;
    }
    const option = optionOrGroup;
    const label = option.label instanceof Function ? option.label(option) : option.label;
    return html` <sl-option value=${option.value} class="label">${label}</sl-option>`;
  }
};
SelectComponent.styles = unsafeCSS(select_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SelectComponent.prototype, "clearable", 2);
__decorateClass([
  property({ type: String, reflect: true })
], SelectComponent.prototype, "placeholder", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SelectComponent.prototype, "required", 2);
__decorateClass([
  property({ type: String, reflect: true })
], SelectComponent.prototype, "size", 2);
__decorateClass([
  query("sl-select")
], SelectComponent.prototype, "_wrappedSelect", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SelectComponent.prototype, "multiple", 2);
__decorateClass([
  property({ type: Object, attribute: false })
], SelectComponent.prototype, "_options", 2);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: {
      toAttribute(value) {
        if (value instanceof Array) {
          return value.join(" ");
        }
        return value;
      }
    }
  })
], SelectComponent.prototype, "value", 1);
SelectComponent = __decorateClass([
  webComponent({ name: "elvt-select", dependencies: ["sl-select", "sl-option"] })
], SelectComponent);

export {
  SelectComponent
};
