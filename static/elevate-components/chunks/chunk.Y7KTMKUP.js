import {
  mdiCheck,
  mdiMinus
} from "./chunk.HMLPYKN2.js";
import {
  CustomFormControl
} from "./chunk.I6NEI6WN.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/checkbox/checkbox.component.ts
import { property, query, state } from "lit/decorators.js";
import { html, unsafeCSS } from "lit";

// src/components/checkbox/checkbox.styles.scss?inline
var checkbox_styles_default = `:host {
  display: inline-block;
  break-inside: avoid;
}

:host([size=small]) {
  font-family: var(--elvt-type-alias-emphasized-label-s-font-family, "Inter");
}
:host([size=small]) .checkbox {
  font-weight: var(--elvt-type-alias-emphasized-label-s-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-s-font-size, 0.875rem);
  line-height: 1.429;
}

:host([size=medium]) {
  font-family: var(--elvt-type-alias-emphasized-label-m-font-family, "Inter");
}
:host([size=medium]) .checkbox {
  font-weight: var(--elvt-type-alias-emphasized-label-m-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-m-font-size, 1rem);
  line-height: 1.5;
}

:host([size=large]) {
  font-family: var(--elvt-type-alias-emphasized-label-l-font-family, "Inter");
}
:host([size=large]) .checkbox {
  font-weight: var(--elvt-type-alias-emphasized-label-l-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-l-font-size, 1.25rem);
  line-height: 1.6;
}

:host([size=small]) .checkbox-control {
  border-radius: var(--elvt-component-checkbox-control-radius-s, 0.125rem);
  border-width: var(--elvt-component-checkbox-control-border-width-s, 0.0625rem);
  height: var(--elvt-component-checkbox-control-height-s, 1rem);
  width: var(--elvt-component-checkbox-control-width-s, 1rem);
}
:host([size=small]) .checkbox-label {
  height: var(--elvt-component-checkbox-control-height-s, 1rem);
}
:host([size=small]) .checkbox-label:not(.hidden-label) {
  margin-inline-start: var(--elvt-component-checkbox-gap-s, 0.5rem);
}
:host([size=small]) elvt-icon {
  --icon-size: var(--elvt-component-checkbox-control-height-s, 1rem);
}

:host([size=medium]) .checkbox-control {
  border-radius: var(--elvt-component-checkbox-control-radius-m, 0.25rem);
  border-width: var(--elvt-component-checkbox-control-border-width-m, 0.0625rem);
  height: var(--elvt-component-checkbox-control-height-m, 1.25rem);
  width: var(--elvt-component-checkbox-control-width-m, 1.25rem);
}
:host([size=medium]) .checkbox-label {
  height: var(--elvt-component-checkbox-control-height-m, 1.25rem);
}
:host([size=medium]) .checkbox-label:not(.hidden-label) {
  margin-inline-start: var(--elvt-component-checkbox-gap-m, 0.5rem);
}
:host([size=medium]) elvt-icon {
  --icon-size: var(--elvt-component-checkbox-control-height-m, 1.25rem);
}

:host([size=large]) .checkbox-control {
  border-radius: var(--elvt-component-checkbox-control-radius-l, 0.25rem);
  border-width: var(--elvt-component-checkbox-control-border-width-l, 0.0625rem);
  height: var(--elvt-component-checkbox-control-height-l, 1.5rem);
  width: var(--elvt-component-checkbox-control-width-l, 1.5rem);
}
:host([size=large]) .checkbox-label {
  height: var(--elvt-component-checkbox-control-height-l, 1.5rem);
}
:host([size=large]) .checkbox-label:not(.hidden-label) {
  margin-inline-start: var(--elvt-component-checkbox-gap-l, 0.75rem);
}
:host([size=large]) elvt-icon {
  --icon-size: var(--elvt-component-checkbox-control-height-l, 1.5rem);
}

.checkbox-control.control-checked {
  border-color: var(--elvt-component-checkbox-control-border-color-checked-default, rgb(0, 114, 255));
  background: var(--elvt-component-checkbox-control-fill-checked-default, rgb(11, 92, 223));
  color: var(--elvt-component-checkbox-label-default, rgb(61, 66, 83));
}
.checkbox-control.control-checked:not(.control-disabled):hover {
  border-color: var(--elvt-component-checkbox-control-border-color-checked-hover, rgb(11, 92, 223));
}
.checkbox-control.control-checked:not(.control-disabled):hover {
  background: var(--elvt-component-checkbox-control-fill-checked-hover, rgb(27, 80, 166));
}
.checkbox-control.control-checked:not(.control-disabled):hover {
  color: var(--elvt-component-checkbox-label-hover, rgb(61, 66, 83));
}
.checkbox-control.control-checked:not(.control-disabled):active {
  border-color: var(--elvt-component-checkbox-control-border-color-checked-active, rgb(35, 66, 117));
}
.checkbox-control.control-checked:not(.control-disabled):active {
  background: var(--elvt-component-checkbox-control-fill-checked-active, rgb(35, 51, 75));
}
.checkbox-control.control-checked:not(.control-disabled):active {
  color: var(--elvt-component-checkbox-label-active, rgb(61, 66, 83));
}
.checkbox-control.control-checked.control-disabled {
  border-color: var(--elvt-component-checkbox-control-border-color-checked-disabled, rgb(190, 195, 205));
  background: var(--elvt-component-checkbox-control-fill-checked-disabled, rgb(243, 244, 247));
  color: var(--elvt-component-checkbox-label-disabled, rgb(163, 170, 180));
}
.checkbox-control.control-indeterminate {
  border-color: var(--elvt-component-checkbox-control-border-color-indeterminate-default, rgb(0, 114, 255));
  background: var(--elvt-component-checkbox-control-fill-indeterminate-default, rgb(11, 92, 223));
  color: var(--elvt-component-checkbox-label-default, rgb(61, 66, 83));
}
.checkbox-control.control-indeterminate:not(.control-disabled):hover {
  border-color: var(--elvt-component-checkbox-control-border-color-indeterminate-hover, rgb(11, 92, 223));
}
.checkbox-control.control-indeterminate:not(.control-disabled):hover {
  background: var(--elvt-component-checkbox-control-fill-indeterminate-hover, rgb(27, 80, 166));
}
.checkbox-control.control-indeterminate:not(.control-disabled):hover {
  color: var(--elvt-component-checkbox-label-hover, rgb(61, 66, 83));
}
.checkbox-control.control-indeterminate:not(.control-disabled):active {
  border-color: var(--elvt-component-checkbox-control-border-color-indeterminate-active, rgb(35, 66, 117));
}
.checkbox-control.control-indeterminate:not(.control-disabled):active {
  background: var(--elvt-component-checkbox-control-fill-indeterminate-active, rgb(35, 51, 75));
}
.checkbox-control.control-indeterminate:not(.control-disabled):active {
  color: var(--elvt-component-checkbox-label-active, rgb(61, 66, 83));
}
.checkbox-control.control-indeterminate.control-disabled {
  border-color: var(--elvt-component-checkbox-control-border-color-indeterminate-disabled, rgb(190, 195, 205));
  background: var(--elvt-component-checkbox-control-fill-indeterminate-disabled, rgb(243, 244, 247));
  color: var(--elvt-component-checkbox-label-disabled, rgb(163, 170, 180));
}
.checkbox-control.control-unchecked {
  border-color: var(--elvt-component-checkbox-control-border-color-unchecked-default, rgb(112, 122, 143));
  background: var(--elvt-component-checkbox-control-fill-unchecked-default, rgb(255, 255, 255));
  color: var(--elvt-component-checkbox-label-default, rgb(61, 66, 83));
}
.checkbox-control.control-unchecked:not(.control-disabled):hover {
  border-color: var(--elvt-component-checkbox-control-border-color-unchecked-hover, rgb(93, 102, 121));
}
.checkbox-control.control-unchecked:not(.control-disabled):hover {
  background: var(--elvt-component-checkbox-control-fill-unchecked-hover, rgb(255, 255, 255));
}
.checkbox-control.control-unchecked:not(.control-disabled):hover {
  color: var(--elvt-component-checkbox-label-hover, rgb(61, 66, 83));
}
.checkbox-control.control-unchecked:not(.control-disabled):active {
  border-color: var(--elvt-component-checkbox-control-border-color-unchecked-active, rgb(61, 66, 83));
}
.checkbox-control.control-unchecked:not(.control-disabled):active {
  background: var(--elvt-component-checkbox-control-fill-unchecked-active, rgb(255, 255, 255));
}
.checkbox-control.control-unchecked:not(.control-disabled):active {
  color: var(--elvt-component-checkbox-label-active, rgb(61, 66, 83));
}
.checkbox-control.control-unchecked.control-disabled {
  border-color: var(--elvt-component-checkbox-control-border-color-unchecked-disabled, rgb(190, 195, 205));
  background: var(--elvt-component-checkbox-control-fill-unchecked-disabled, rgb(243, 244, 247));
  color: var(--elvt-component-checkbox-label-disabled, rgb(163, 170, 180));
}

:host([disabled]) .checkbox {
  cursor: not-allowed;
}
:host([disabled]) .checkbox-label {
  color: var(--elvt-component-checkbox-label-disabled, rgb(163, 170, 180));
}

:host(:not([disabled])) .checkbox:hover .checkbox-label {
  color: var(--elvt-component-checkbox-label-hover, rgb(61, 66, 83));
}
:host(:not([disabled])) .checkbox:active .checkbox-label {
  color: var(--elvt-component-checkbox-label-active, rgb(61, 66, 83));
}

.form-control {
  line-height: 1;
}

.checkbox {
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  vertical-align: middle;
  width: 100%;
  cursor: pointer;
}

input {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
  height: 100%;
  pointer-events: none;
}
input:focus-visible + .checkbox-control {
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: var(--elvt-alias-action-focus-border-width-m, 0.125rem);
}

.checkbox-control {
  flex: 0 0 auto;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-style: solid;
}
.checkbox-control:hover elvt-icon {
  color: var(--elvt-component-checkbox-icon-color-hover, rgb(255, 255, 255));
}
.checkbox-control:active elvt-icon {
  color: var(--elvt-component-checkbox-icon-color-active, rgb(255, 255, 255));
}
.checkbox-control.control-disabled elvt-icon {
  color: var(--elvt-component-checkbox-icon-color-disabled, rgb(163, 170, 180));
}

.checkbox-label {
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  color: var(--elvt-component-checkbox-label-default, rgb(61, 66, 83));
  user-select: none;
  -webkit-user-select: none;
}
.checkbox-label slot {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

elvt-icon {
  color: var(--elvt-component-checkbox-icon-color-default, rgb(255, 255, 255));
}

slot[name=help-text] {
  font-size: var(--elvt-type-alias-default-label-s-font-size, 0.875rem);
}

.form-control-help-text:not([aria-hidden=true]) {
  margin-top: var(--elvt-measures-distance-2xs, 0.5rem);
}

:host([touched]:invalid) .checkbox-control {
  border-width: 0;
  outline: 1px solid var(--elvt-component-requiredIndicator-color, rgb(206, 1, 1));
  outline-offset: -1px;
}`;

// src/components/checkbox/checkbox.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
import { classMap } from "lit/directives/class-map.js";
var CheckboxComponent = class extends CustomFormControl {
  constructor() {
    super(...arguments);
    this.helpText = "";
    this.indeterminate = false;
    this.size = Size.Medium;
    this.hasFocus = false;
    this._checked = false;
    this._checkedValue = true;
    this.hideLabel = false;
  }
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this.updateFormValue();
  }
  get checkedValue() {
    return this._checkedValue;
  }
  focus() {
    var _a;
    (_a = this._control) == null ? void 0 : _a.focus();
  }
  set checkedValue(value) {
    this._checkedValue = value;
    this.updateFormValue();
  }
  get value() {
    if (this.indeterminate) {
      return void 0;
    }
    return this._checked ? this._checkedValue : void 0;
  }
  set value(value) {
    if (value === this._checkedValue) {
      this._checked = true;
    }
    this.updateFormValue();
  }
  render() {
    const hasHelpTextSlot = this.hasNamedSlot("help-text");
    return html`
            <div class=${classMap({ "form-control": true, "has-help-text": this.helpText !== "" })}>
                <label class=${classMap({ checkbox: true, focused: this.hasFocus })}>
                    <input
                        type="checkbox"
                        title=""
                        value=${this._checkedValue}
                        .checked=${this._checked}
                        .disabled=${this.disabled}
                        .required=${this.required}
                        aria-checked=${this._checked ? "true" : "false"}
                        aria-describedby="checkbox-help-text"
                        @input=${this.handleInput}
                        @change=${this.handleChange}
                        @blur=${this.handleBlur}
                        @focus=${this.handleFocus} />
                    <span
                        class=${classMap({
      "checkbox-control": true,
      "control-disabled": this.disabled,
      "control-checked": this._checked,
      "control-unchecked": !this._checked && !this.indeterminate,
      "control-indeterminate": this.indeterminate
    })}>
                        ${this._checked ? html` <elvt-icon icon=${mdiCheck} class="checked-icon"></elvt-icon>` : ""}
                        ${!this._checked && this.indeterminate ? html` <elvt-icon icon=${mdiMinus} class="indeterminate-icon"></elvt-icon> ` : ""}
                    </span>
                    <div
                        class=${classMap({
      "checkbox-label": true,
      "hidden-label": this.hideLabel
    })}>
                        ${this.hideLabel ? html` <elvt-visually-hidden><slot></slot></elvt-visually-hidden>` : html`<slot></slot>`}
                    </div>
                </label>
                <div id="checkbox-help-text" class="form-control-help-text" aria-hidden=${this.helpText || hasHelpTextSlot ? "false" : "true"}>
                    <slot name="help-text">${this.helpText}</slot>
                </div>
            </div>
        `;
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
    if (this.indeterminate || this._checked !== checked) {
      this._checked = checked;
      this.indeterminate = false;
      this.updateFormValue();
      return true;
    }
    return false;
  }
  handleFocus() {
    this.hasFocus = true;
  }
};
CheckboxComponent.styles = unsafeCSS(checkbox_styles_default);
__decorateClass([
  property({ attribute: "help-text", type: String, reflect: true })
], CheckboxComponent.prototype, "helpText", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], CheckboxComponent.prototype, "indeterminate", 2);
__decorateClass([
  property({ type: String, reflect: true })
], CheckboxComponent.prototype, "size", 2);
__decorateClass([
  query('input[type="checkbox"]')
], CheckboxComponent.prototype, "_control", 2);
__decorateClass([
  state()
], CheckboxComponent.prototype, "hasFocus", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], CheckboxComponent.prototype, "checked", 1);
__decorateClass([
  property({ type: String, reflect: true, attribute: "checked-value" })
], CheckboxComponent.prototype, "checkedValue", 1);
__decorateClass([
  property({ type: String, reflect: true })
], CheckboxComponent.prototype, "value", 1);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "hide-label" })
], CheckboxComponent.prototype, "hideLabel", 2);
CheckboxComponent = __decorateClass([
  webComponent({ name: "elvt-checkbox", dependencies: ["elvt-visually-hidden"] })
], CheckboxComponent);

export {
  CheckboxComponent
};
