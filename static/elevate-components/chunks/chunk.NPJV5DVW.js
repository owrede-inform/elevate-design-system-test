import {
  CustomFormControl
} from "./chunk.I6NEI6WN.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/switch/switch.component.ts
import { property, query, state } from "lit/decorators.js";
import { html, unsafeCSS } from "lit";

// src/components/switch/switch.styles.scss?inline
var switch_styles_default = `:host([tone=success]) {
  --track-checked-default-background: var(--elvt-component-switch-track-fill-checked-success-default, rgb(5, 118, 61));
  --track-checked-hover-background: var(--elvt-component-switch-track-fill-checked-success-hover, rgb(5, 96, 54));
  --track-checked-disabled-background: var(--elvt-component-switch-track-fill-checked-success-disabled, rgb(170, 230, 188));
  --thumb-checked-default-background: var(--elvt-component-switch-handle-fill-checked-success-default, rgb(255, 255, 255));
  --thumb-checked-active-background: var(--elvt-component-switch-handle-fill-checked-success-active, rgb(170, 230, 188));
  --thumb-checked-disabled-background: var(--elvt-component-switch-handle-fill-checked-success-disabled, rgb(230, 248, 236));
}

:host([tone=primary]) {
  --track-checked-default-background: var(--elvt-component-switch-track-fill-checked-primary-enabled, rgb(11, 92, 223));
  --track-checked-hover-background: var(--elvt-component-switch-track-fill-checked-primary-hover, rgb(27, 80, 166));
  --track-checked-disabled-background: var(--elvt-component-switch-track-fill-checked-primary-disabled, rgb(185, 219, 255));
  --thumb-checked-default-background: var(--elvt-component-switch-handle-fill-checked-primary-default, rgb(243, 244, 247));
  --thumb-checked-active-background: var(--elvt-component-switch-handle-fill-checked-primary-active, rgb(185, 219, 255));
  --thumb-checked-disabled-background: var(--elvt-component-switch-handle-fill-checked-primary-disabled, rgb(234, 244, 255));
}

:host([size=small]) {
  font-family: var(--elvt-type-alias-default-label-s-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-s-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-s-font-size, 0.875rem);
  line-height: 1.429;
}

:host([size=medium]) {
  font-family: var(--elvt-type-alias-default-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-m-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-m-font-size, 1rem);
  line-height: 1.5;
}

:host([size=large]) {
  font-family: var(--elvt-type-alias-default-label-l-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-l-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-l-font-size, 1.25rem);
  line-height: 1.6;
}

:host([size=small]) {
  --track-padding: var(--elvt-component-switch-track-padding-s, 0.125rem);
  --track-width: var(--elvt-component-switch-track-width-s, 2.5rem);
  --track-height: var(--elvt-component-switch-track-height-s, 1.25rem);
  --thumb-diameter: var(--elvt-component-switch-handle-diameter-s, 1rem);
  --label-gap: var(--elvt-component-switch-gap-s, 0.5rem);
}

:host([size=medium]) {
  --track-padding: var(--elvt-component-switch-track-padding-m, 0.125rem);
  --track-width: var(--elvt-component-switch-track-width-m, 3rem);
  --track-height: var(--elvt-component-switch-track-height-m, 1.5rem);
  --thumb-diameter: var(--elvt-component-switch-handle-diameter-m, 1.25rem);
  --label-gap: var(--elvt-component-switch-gap-m, 0.5rem);
}

:host([size=large]) {
  --track-padding: var(--elvt-component-switch-track-padding-l, 0.125rem);
  --track-width: var(--elvt-component-switch-track-width-l, 3.5rem);
  --track-height: var(--elvt-component-switch-track-height-l, 1.75rem);
  --thumb-diameter: var(--elvt-component-switch-handle-diameter-l, 1.5rem);
  --label-gap: var(--elvt-component-switch-gap-l, 0.75rem);
}

:host {
  display: inline-block;
}

:host([disabled]) .switch {
  color: var(--elvt-component-switch-label-disabled, rgb(163, 170, 180));
  cursor: not-allowed;
}
:host([disabled]) .switch-checked .switch-control {
  background-color: var(--track-checked-disabled-background);
}
:host([disabled]) .switch-checked .switch-thumb {
  background-color: var(--thumb-checked-disabled-background);
}
:host([disabled]) .switch-control {
  background-color: var(--elvt-component-switch-track-fill-unchecked-disabled, rgb(213, 217, 225));
}
:host([disabled]) .switch-thumb {
  background-color: var(--elvt-component-switch-handle-fill-unchecked-disabled, rgb(243, 244, 247));
}

.switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: var(--elvt-component-switch-label-default, rgb(61, 66, 83));
  vertical-align: middle;
  cursor: pointer;
}
.switch .switch-control {
  transition: background-color 500ms ease-in;
}
.switch:not(.switch-checked):not(.switch-disabled) .switch-control:hover {
  background-color: var(--elvt-component-switch-track-fill-unchecked-hover, rgb(136, 145, 160));
}

/* Checked */
.switch-checked .switch-control {
  background-color: var(--track-checked-default-background);
}
.switch-checked .switch-thumb {
  translate: calc((var(--track-width) - var(--track-height)) / 2);
}
.switch-checked:not(.switch-disabled) .switch-control:hover {
  background-color: var(--track-checked-hover-background);
}
.switch-checked:not(.switch-disabled) .switch-control:active .switch-thumb {
  background-color: var(--thumb-checked-active-background);
}

.switch-control {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: var(--track-height);
  padding: var(--track-padding);
  width: var(--track-width);
  height: var(--track-height);
  background-color: var(--elvt-component-switch-track-fill-unchecked-default, rgb(163, 170, 180));
  transition: 150ms background-color;
}

.switch-thumb {
  border-radius: 50%;
  box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.25);
  width: var(--thumb-diameter);
  height: var(--thumb-diameter);
  background-color: var(--thumb-checked-default-background);
  translate: calc((var(--track-width) - var(--track-height)) / -2);
  transition: 150ms translate ease, 150ms background-color, 150ms box-shadow;
}

input[role=switch] {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
  pointer-events: none;
}
input[role=switch]:focus-visible ~ .switch-control .switch-thumb {
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: var(--elvt-alias-action-focus-border-width-m, 0.125rem);
}

.switch-label {
  display: inline-block;
  user-select: none;
  -webkit-user-select: none;
}
.switch-label:not(.hidden-label) {
  margin-inline-start: var(--label-gap);
}

.form-control {
  line-height: 1;
}

.form-control-help-text:not([aria-hidden=true]) {
  margin-top: var(--elvt-measures-distance-2xs, 0.5rem);
}

slot[name=help-text] {
  font-size: var(--elvt-type-alias-default-label-s-font-size, 0.875rem);
}

:host([required]) .switch-label::after {
  content: "*";
  color: var(--elvt-component-requiredIndicator-color, rgb(206, 1, 1));
}

:host(:dir(rtl)) .switch-checked .switch-thumb {
  translate: calc((var(--track-width) - var(--track-height)) / -2);
}
:host(:dir(rtl)) .switch-thumb {
  translate: calc((var(--track-width) - var(--track-height)) / 2);
}

@media (forced-colors: active) {
  .switch-checked:not(.switch-disabled) .switch-control:hover .switch-thumb,
  .switch-checked .switch-thumb {
    background-color: ButtonText;
  }
}`;

// src/components/switch/switch.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
import { classMap } from "lit/directives/class-map.js";
var SwitchTone = {
  Primary: "primary",
  Success: "success"
};
var SwitchComponent = class extends CustomFormControl {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this._checkedValue = true;
    this._checked = false;
    this.helpText = "";
    this.size = Size.Medium;
    this.hideLabel = false;
    this.tone = SwitchTone.Primary;
  }
  set checkedValue(value) {
    this._checkedValue = value;
    this.updateFormValue();
  }
  get checkedValue() {
    return this._checkedValue;
  }
  set checked(value) {
    this._checked = value;
    this.updateFormValue();
  }
  get checked() {
    return this._checked;
  }
  set value(value) {
    this.checked = value === this._checkedValue;
  }
  get value() {
    return this.checked ? this._checkedValue : void 0;
  }
  render() {
    const hasHelpTextSlot = this.hasNamedSlot("help-text");
    return html` <div class=${classMap({ "form-control": true, "has-help-text": this.helpText ? true : hasHelpTextSlot })}>
            <label
                class=${classMap({
      "switch": true,
      "switch-checked": this.checked,
      "switch-disabled": this.disabled,
      "switch-focused": this.hasFocus
    })}>
                <input
                    role="switch"
                    type="checkbox"
                    title=""
                    name=${this.name}
                    value=${this._checkedValue}
                    .checked=${this._checked}
                    .disabled=${this.disabled}
                    .required=${this.required}
                    aria-checked=${this._checked ? "true" : "false"}
                    aria-describedby="switch-help-text"
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    @blur=${this.handleBlur}
                    @focus=${this.handleFocus}
                    @keydown=${this.handleKeyDown} />

                <span class="switch-control">
                    <span class="switch-thumb"></span>
                </span>

                <div
                    class=${classMap({
      "switch-label": true,
      "hidden-label": this.hideLabel
    })}>
                    ${this.hideLabel ? html` <elvt-visually-hidden><slot></slot></elvt-visually-hidden>` : html`<slot></slot>`}
                </div>
            </label>

            <div id="switch-help-text" class="form-control-help-text" aria-hidden=${this.helpText || hasHelpTextSlot ? "false" : "true"}>
                <slot name="help-text">${this.helpText}</slot>
            </div>
        </div>`;
  }
  hasNamedSlot(name) {
    return this.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
  handleBlur() {
    this.hasFocus = false;
  }
  handleChange(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.updateCheckedStatus()) {
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: { checked: this._checked },
          bubbles: true,
          cancelable: true
        })
      );
      this.requestUpdate();
    }
  }
  handleInput(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.updateCheckedStatus()) {
      this.dispatchEvent(
        new CustomEvent("input", {
          bubbles: true,
          cancelable: true
        })
      );
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: { checked: this._checked },
          bubbles: true,
          cancelable: true
        })
      );
      this.requestUpdate();
    }
  }
  updateCheckedStatus() {
    const checked = this._control ? this._control.checked : this._checked;
    if (this._checked !== checked) {
      this._checked = checked;
      this.updateFormValue();
      return true;
    }
    return false;
  }
  handleFocus() {
    this.hasFocus = true;
  }
  handleKeyDown(event) {
    var _a;
    const direction = (_a = getComputedStyle(this)) == null ? void 0 : _a.direction;
    event == null ? void 0 : event.preventDefault();
    if (event.key === "ArrowLeft") {
      if (direction === "rtl" && !this._checked || direction !== "rtl" && this._checked) {
        this._control.checked = direction === "rtl";
      }
    }
    if (event.key === "ArrowRight") {
      if (direction === "rtl" && this._checked || direction !== "rtl" && !this._checked) {
        this._control.checked = direction !== "rtl";
      }
    }
    if (this.updateCheckedStatus()) {
      this.dispatchEvent(
        new CustomEvent("input", {
          bubbles: true,
          cancelable: true
        })
      );
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: { checked: this._checked },
          bubbles: true,
          cancelable: true
        })
      );
      this.requestUpdate();
    }
  }
};
SwitchComponent.styles = unsafeCSS(switch_styles_default);
__decorateClass([
  state()
], SwitchComponent.prototype, "hasFocus", 2);
__decorateClass([
  query('input[type="checkbox"]')
], SwitchComponent.prototype, "_control", 2);
__decorateClass([
  property({ attribute: "help-text", type: String, reflect: true })
], SwitchComponent.prototype, "helpText", 2);
__decorateClass([
  property({ type: String, reflect: true, attribute: "checked-value" })
], SwitchComponent.prototype, "checkedValue", 1);
__decorateClass([
  property({ type: String, reflect: true })
], SwitchComponent.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SwitchComponent.prototype, "checked", 1);
__decorateClass([
  property({ type: Boolean, reflect: false, attribute: false })
], SwitchComponent.prototype, "value", 1);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "hide-label" })
], SwitchComponent.prototype, "hideLabel", 2);
__decorateClass([
  property({ type: String, reflect: true })
], SwitchComponent.prototype, "tone", 2);
SwitchComponent = __decorateClass([
  webComponent({ name: "elvt-switch", dependencies: ["elvt-visually-hidden"] })
], SwitchComponent);

export {
  SwitchTone,
  SwitchComponent
};
