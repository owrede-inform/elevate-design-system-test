import {
  CustomFormField
} from "./chunk.CSNJNMVG.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/radios/radio-group/radio-group.component.ts
import { property } from "lit/decorators.js";
import { html, unsafeCSS } from "lit";

// src/components/radios/radio-group/radio-group.styles.scss?inline
var radio_group_styles_default = `:host .group {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: "label" "options" "help-text";
  gap: 10px 0;
}
:host .options {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  gap: 4px;
}
:host slot[name=label] {
  display: block;
  grid-area: label;
  color: var(--sl-input-label-color);
}
:host slot[name=help-text] {
  display: block;
  grid-area: help-text;
  color: var(--sl-input-help-text-color);
}
:host .size--small slot[name=label] {
  font-size: var(--sl-input-label-font-size-small);
}
:host .size--small slot[name=help-text] {
  font-size: var(--sl-input-help-text-font-size-small);
}
:host .size--medium slot[name=label] {
  font-size: var(--sl-input-label-font-size-medium);
}
:host .size--medium slot[name=help-text] {
  font-size: var(--sl-input-help-text-font-size-medium);
}
:host .size--large slot[name=label] {
  font-size: var(--sl-input-label-font-size-large);
}
:host .size--large slot[name=help-text] {
  font-size: var(--sl-input-help-text-font-size-large);
}`;

// src/components/radios/radio-group/radio-group.component.ts
import { classMap } from "lit/directives/class-map.js";
import { webComponent } from "@inform-elevate/elevate-cdk";
var RadioGroupComponent = class extends CustomFormField {
  constructor() {
    super(...arguments);
    this.required = false;
    this._size = Size.Medium;
  }
  get size() {
    return this._size;
  }
  set size(value) {
    this._size = value;
    this.getOptionElements().forEach((element) => {
      element.size = value;
    });
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  focus() {
    const element = this.getOptionElements()[0];
    element == null ? void 0 : element.focus();
  }
  render() {
    const hasLabel = this.label ? true : this.hasSlotAssignedNodes("label");
    const classes = classMap({
      "group": true,
      "has-label": hasLabel,
      [`size--${this.size}`]: true
    });
    return html`
            <div @focusout=${this.handleBlur} class=${classes}>
                <label @click=${this.handleLabelClick}>${this.renderLabelSlot()}</label>
                <slot class="options" @click=${this.handleOptionClick} @keydown=${this.handleKeyDown} @slotchange=${this.handleOptionsAssign}></slot>
                ${this.renderHelpTextSlot()}
            </div>
        `;
  }
  emit(type) {
    this.dispatchEvent(new Event(type));
  }
  getOptionElements() {
    return [...this.querySelectorAll("elvt-radio")];
  }
  handleBlur(event) {
    if (!(event.relatedTarget instanceof HTMLElement && this.contains(event.relatedTarget))) {
      this.emit("blur");
    }
  }
  handleKeyDown(event) {
    var _a;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
      return;
    }
    const radios = this.getOptionElements().filter((radio) => !radio.disabled);
    const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
    const increment = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    const oldValue = this._value;
    let index = radios.indexOf(checkedRadio) + increment;
    if (index < 0) {
      index = radios.length - 1;
    }
    if (index > radios.length - 1) {
      index = 0;
    }
    this.getOptionElements().forEach((radio) => {
      radio.checked = false;
      if (radio.hasAttribute("tabindex")) {
        radio.setAttribute("tabindex", "-1");
      }
    });
    this._value = radios[index].value;
    radios[index].checked = true;
    if (radios[index].hasAttribute("tabindex")) {
      radios[index].setAttribute("tabindex", "0");
    }
    radios[index].focus();
    if (this._value !== oldValue) {
      this.emit("change");
      this.emit("input");
    }
    event.preventDefault();
  }
  handleLabelClick() {
    return this.focus();
  }
  handleOptionClick(event) {
    const target = event.target.closest("elvt-radio");
    const radios = this.getOptionElements();
    const oldValue = this._value;
    if (!target || target.disabled) {
      return;
    }
    this._value = target.value;
    radios.forEach((radio) => radio.checked = radio === target);
    if (this._value !== oldValue) {
      this.updateFormValue();
      this.emit("change");
      this.emit("input");
    }
  }
  async handleOptionsAssign() {
    const radios = this.getOptionElements();
    await Promise.all(
      // Sync the checked state and size
      radios.map(async (radio) => {
        await radio.updateComplete;
        radio.checked = radio.value === this._value;
        radio.size = this._size;
      })
    );
    if (radios.length > 0 && !radios.some((radio) => radio.checked)) {
      radios[0].setAttribute("tabindex", "0");
    }
  }
  hasSlotAssignedNodes(name) {
    var _a;
    return (((_a = this.querySelector(`slot[name="${name}"]`)) == null ? void 0 : _a.assignedNodes()) || []).length > 0;
  }
};
RadioGroupComponent.styles = unsafeCSS(radio_group_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true })
], RadioGroupComponent.prototype, "required", 2);
__decorateClass([
  property({ type: String, reflect: true })
], RadioGroupComponent.prototype, "size", 1);
__decorateClass([
  property({ type: String, reflect: true })
], RadioGroupComponent.prototype, "value", 1);
RadioGroupComponent = __decorateClass([
  webComponent({ name: "elvt-radio-group", dependencies: ["elvt-radio"] })
], RadioGroupComponent);

export {
  RadioGroupComponent
};
