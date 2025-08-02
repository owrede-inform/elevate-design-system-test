import {
  CustomFormControl
} from "./chunk.I6NEI6WN.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/radios/radio/radio.component.ts
import { property, state } from "lit/decorators.js";
import { html, unsafeCSS } from "lit";

// src/components/radios/radio/radio.styles.scss?inline
var radio_styles_default = `:host([size=small]) {
  font-family: var(--elvt-type-alias-emphasized-label-s-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-s-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-s-font-size, 0.875rem);
}

:host([size=medium]) {
  font-family: var(--elvt-type-alias-emphasized-label-s-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-s-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-s-font-size, 0.875rem);
}

:host([size=large]) {
  font-family: var(--elvt-type-alias-emphasized-label-l-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-l-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-l-font-size, 1.25rem);
}

:host([size=small]) {
  --track-width: var(--elvt-component-radio-control-track-width-s, 1rem);
  --track-height: var(--elvt-component-radio-control-track-height-s, 1rem);
  --track-border-width: var(--elvt-component-radio-control-track-border-width-s, 0.0625rem);
  --handle-width: var(--elvt-component-radio-control-handle-width-s, 0.375rem);
  --handle-height: var(--elvt-component-radio-control-handle-height-s, 0.375rem);
  --label-gap: var(--elvt-component-radio-gap-s, 0.5rem);
}

:host([size=medium]) {
  --track-width: var(--elvt-component-radio-control-track-width-m, 1.25rem);
  --track-height: var(--elvt-component-radio-control-track-height-m, 1.25rem);
  --track-border-width: var(--elvt-component-radio-control-track-border-width-m, 0.0625rem);
  --handle-width: var(--elvt-component-radio-control-handle-width-m, 0.5rem);
  --handle-height: var(--elvt-component-radio-control-handle-height-m, 0.5rem);
  --label-gap: var(--elvt-component-radio-gap-m, 0.5rem);
}

:host([size=large]) {
  --track-width: var(--elvt-component-radio-control-track-width-l, 1.5rem);
  --track-height: var(--elvt-component-radio-control-track-height-l, 1.5rem);
  --track-border-width: var(--elvt-component-radio-control-track-border-width-l, 0.0625rem);
  --handle-width: var(--elvt-component-radio-control-handle-width-l, 0.625rem);
  --handle-height: var(--elvt-component-radio-control-handle-height-l, 0.625rem);
  --label-gap: var(--elvt-component-radio-gap-l, 0.75rem);
}

:host {
  display: block;
}

:host([disabled]) .radio {
  cursor: not-allowed;
}
:host([disabled]) .radio-control {
  border-color: var(--elvt-component-radio-control-track-border-color-neutral-unchecked-disabled, rgb(190, 195, 205));
  background-color: var(--elvt-component-radio-control-track-color-neutral-unchecked-disabled, rgb(213, 217, 225));
}
:host([disabled]) .radio-checked .radio-control {
  border-color: var(--elvt-component-radio-control-track-border-color-neutral-checked-disabled, rgb(190, 195, 205));
  background-color: var(--elvt-component-radio-control-track-color-neutral-checked-disabled, rgb(144, 198, 255));
}
:host([disabled]) .radio-checked-circle {
  background: var(--elvt-component-radio-control-handle-color-disabled, rgb(213, 217, 225));
}
:host([disabled]) .radio-label {
  color: var(--elvt-component-radio-value-color-disabled, rgb(163, 170, 180));
}

:host(:not([disabled])) .radio-control:hover {
  border-color: var(--elvt-component-radio-control-track-border-color-neutral-unchecked-hover, rgb(93, 102, 121));
  background-color: var(--elvt-component-radio-control-track-color-neutral-unchecked-hover, rgb(255, 255, 255));
}
:host(:not([disabled])) .radio-control:active {
  border-color: var(--elvt-component-radio-control-track-border-color-neutral-unchecked-clicked, rgb(61, 66, 83));
  background-color: var(--elvt-component-radio-control-track-color-neutral-unchecked-clicked, rgb(255, 255, 255));
}
:host(:not([disabled])) .radio-checked .radio-control:hover {
  border-color: var(--elvt-component-radio-control-track-border-color-neutral-checked-hover, rgb(93, 102, 121));
  background-color: var(--elvt-component-radio-control-track-color-neutral-checked-hover, rgb(27, 80, 166));
}
:host(:not([disabled])) .radio-checked .radio-control:hover .radio-checked-circle {
  background: var(--elvt-component-radio-control-handle-color-hover, rgb(255, 255, 255));
}
:host(:not([disabled])) .radio-checked .radio-control:active {
  border-color: var(--elvt-component-radio-control-track-border-color-neutral-checked-clicked, rgb(61, 66, 83));
  background-color: var(--elvt-component-radio-control-track-color-neutral-checked-active, rgb(35, 51, 75));
}
:host(:not([disabled])) .radio-checked .radio-control:active .radio-checked-circle {
  background: var(--elvt-component-radio-control-handle-color-clicked, rgb(255, 255, 255));
}
:host(:not([disabled])) .radio-label:hover {
  color: var(--elvt-component-radio-value-color-hover, rgb(61, 66, 83));
}
:host(:not([disabled])) .radio-label:active {
  color: var(--elvt-component-radio-value-color-clicked, rgb(61, 66, 83));
}

:host(:focus-visible) {
  outline: 0;
}

:host(:focus-visible:not([disabled])) .radio-control,
:host(:focus:not([disabled])) .radio-control,
.radio-focused:not(.radio-disabled) .radio-control {
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: var(--elvt-alias-action-focus-border-width-m, 0.125rem);
}

.radio {
  display: inline-flex;
  align-items: flex-start;
  vertical-align: middle;
  width: 100%;
  height: var(--track-height);
  cursor: pointer;
}

.radio-control {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: var(--track-width);
  border-width: var(--track-border-width);
  border-style: solid;
  border-color: var(--elvt-component-radio-control-track-border-color-neutral-unchecked-default, rgb(112, 122, 143));
  width: var(--track-width);
  height: var(--track-height);
  background-color: var(--elvt-component-radio-control-track-color-neutral-unchecked-default, rgb(255, 255, 255));
  color: transparent;
  transition: 150ms border-color, 150ms background-color, 150ms color;
}

.radio-checked .radio-control {
  border-color: var(--elvt-component-radio-control-track-border-color-neutral-checked-default, rgb(112, 122, 143));
  background-color: var(--elvt-component-radio-control-track-color-neutral-checked-default, rgb(11, 92, 223));
}

.radio-checked-circle {
  display: inline-flex;
  border-radius: var(--handle-width);
  width: var(--handle-width);
  height: var(--handle-height);
  background: var(--elvt-component-radio-control-handle-color-default, rgb(255, 255, 255));
}

.radio-label {
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  height: var(--track-height);
  color: var(--elvt-component-radio-value-color-default, rgb(61, 66, 83));
  user-select: none;
  -webkit-user-select: none;
}
.radio-label:not(.hidden-label) {
  margin-inline-start: var(--label-gap);
}
.radio-label slot {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

:host([touched]:invalid) .radio-control {
  border-width: 0;
  outline: 1px solid var(--elvt-component-radio-control-track-border-color-invalid-default, rgb(245, 1, 1));
  outline-offset: -1px;
}
:host([touched]:invalid) .radio:not(.radio-checked) .radio-control:hover {
  outline-color: var(--elvt-component-radio-control-track-border-color-invalid-hover, rgb(206, 1, 1));
}
:host([touched]:invalid) .radio:not(.radio-checked) .radio-control:active {
  outline-color: var(--elvt-component-radio-control-track-border-color-invalid-clicked, rgb(139, 1, 1));
}`;

// src/components/radios/radio/radio.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
import { classMap } from "lit/directives/class-map.js";
var RadioComponent = class extends CustomFormControl {
  constructor() {
    super();
    this.hasFocus = false;
    this.size = Size.Medium;
    this._checked = false;
    this.hideLabel = false;
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("focus", this.handleFocus);
  }
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
  }
  handleBlur() {
    this.hasFocus = false;
  }
  handleFocus() {
    this.hasFocus = true;
  }
  handleClick() {
    if (!this.disabled) {
      this._checked = !this._checked;
      this.setAttribute("tabindex", this._checked ? "0" : "-1");
      this.setAttribute("aria-checked", this._checked ? "true" : "false");
    }
    this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio");
    this.setAttribute("tabindex", this._checked ? "0" : "-1");
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  updated(changedProperties) {
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    if (changedProperties.has("checked")) {
      this.setAttribute("tabindex", this._checked ? "0" : "-1");
      this.setAttribute("aria-checked", this._checked ? "true" : "false");
    }
  }
  render() {
    return html`
            <span
                class=${classMap({
      "radio": true,
      "radio-checked": this._checked,
      "radio-disabled": this.disabled,
      "radio-focused": this.hasFocus
    })}>
                <span class="radio-control"> ${this._checked ? html` <span class="radio-checked-circle"></span> ` : ""} </span>
                <div
                    class=${classMap({
      "radio-label": true,
      "hidden-label": this.hideLabel
    })}>
                    ${this.hideLabel ? html` <elvt-visually-hidden><slot></slot></elvt-visually-hidden>` : html`<slot></slot>`}
                </div>
            </span>
        `;
  }
};
RadioComponent.styles = unsafeCSS(radio_styles_default);
__decorateClass([
  state()
], RadioComponent.prototype, "hasFocus", 2);
__decorateClass([
  property({ type: String, reflect: true })
], RadioComponent.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], RadioComponent.prototype, "checked", 1);
__decorateClass([
  property({ type: String, reflect: true })
], RadioComponent.prototype, "value", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "hide-label" })
], RadioComponent.prototype, "hideLabel", 2);
RadioComponent = __decorateClass([
  webComponent({ name: "elvt-radio", dependencies: ["elvt-visually-hidden"] })
], RadioComponent);

export {
  RadioComponent
};
