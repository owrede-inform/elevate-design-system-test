import {
  CustomFormField
} from "./chunk.CSNJNMVG.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/input/input.component.ts
import { property, query } from "lit/decorators.js";
import { html, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

// src/components/input/input.styles.scss?inline
var input_styles_default = `:host {
  display: grid;
  grid-template: 1fr/1fr;
  --indicator-offset-column: calc(var(--elvt-measures-distance-2xs, 0.5rem) * -1);
  --indicator-offset-row: calc(1em + (100% - 1em) * 0.5);
}
:host .required-indicator {
  color: var(--elvt-component-requiredIndicator-color, rgb(206, 1, 1));
}

:host([touched]:invalid) sl-input::part(base) {
  outline: 1px solid red;
  outline-offset: -1;
}
:host([touched]:invalid) .error-message {
  display: inline-flex;
  align-items: center;
  gap: var(--elvt-measures-distance-3xs, 0.25rem);
  color: var(--elvt-component-field-helpText-color-danger, rgb(206, 1, 1));
}
:host([touched]:invalid) .error-message:before {
  display: inline-block;
  content: " ";
  mask-image: var(--error-image);
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: currentColor;
  width: 1.2em;
  height: 1.2em;
  font-size: inherit;
  text-align: center;
  line-height: 1;
}

sl-input::part(input) {
  width: var(--form-control-width);
  text-align: var(--form-control-text-align);
}`;

// src/components/input/input.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
import "@shoelace-style/shoelace";
var InputType = {
  Date: "date",
  DateTimeLocal: "datetime-local",
  Email: "email",
  Number: "number",
  Password: "password",
  Search: "search",
  Tel: "tel",
  Text: "text",
  Time: "time",
  Url: "url"
};
var InputComponent = class extends CustomFormField {
  constructor() {
    super(...arguments);
    this.clearable = false;
    this.size = Size.Medium;
    this.type = InputType.Text;
    this.readonly = false;
    this.required = false;
  }
  handleInput() {
    this.updateFormValue();
  }
  get value() {
    if (this._wrappedElement) {
      this._value = this._wrappedElement.value;
    }
    return this._value;
  }
  set value(value) {
    this._value = value;
    if (this._wrappedElement) {
      this._wrappedElement.value = value || "";
    }
    this.updateFormValue();
  }
  get autocapitalize() {
    return this._autocapitalize;
  }
  set autocapitalize(value) {
    if (this._autocapitalize !== value) {
      this._autocapitalize = value;
      super.autocapitalize = value;
      this.requestUpdate();
    }
  }
  get enterKeyHint() {
    return this._enterKeyHint;
  }
  set enterKeyHint(value) {
    if (this._enterKeyHint !== value) {
      this._enterKeyHint = value;
      super.enterKeyHint = value;
      this.requestUpdate();
    }
  }
  get inputMode() {
    return this._inputMode;
  }
  set inputMode(value) {
    if (this._inputMode !== value) {
      this._inputMode = value;
      super.inputMode = value;
      this.requestUpdate();
    }
  }
  get spellcheck() {
    return super.spellcheck;
  }
  set spellcheck(value) {
    super.spellcheck = value;
    this.requestUpdate();
  }
  get autofocus() {
    return super.autofocus;
  }
  set autofocus(value) {
    super.autofocus = value;
    this.requestUpdate();
  }
  render() {
    return html`<sl-input
            ?autofocus=${super.autofocus}
            ?clearable=${this.clearable}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            spellcheck=${this.spellcheck ? "true" : "false"}
            autocapitalize=${ifDefined(this._autocapitalize)}
            autocomplete=${ifDefined(this.autocomplete)}
            enterkeyhint=${ifDefined(this._enterKeyHint)}
            inputmode=${ifDefined(this._inputMode)}
            max=${ifDefined(this.max)}
            maxlength=${ifDefined(this.maxlength)}
            min=${ifDefined(this.min)}
            minlength=${ifDefined(this.minlength)}
            pattern=${ifDefined(this.pattern)}
            placeholder=${ifDefined(this.placeholder)}
            size=${this.size}
            step=${ifDefined(this.step)}
            type=${this.type}
            value=${ifDefined(this._value)}
            @input=${this.handleInput}>
            ${this.renderLabelSlot("label")} ${this.renderHelpTextSlot("help-text")}
            <slot name="prefix" slot="prefix"></slot>
            <slot name="suffix" slot="suffix"></slot>
        </sl-input>`;
  }
};
InputComponent.styles = unsafeCSS(input_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], InputComponent.prototype, "autocomplete", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], InputComponent.prototype, "clearable", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], InputComponent.prototype, "max", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], InputComponent.prototype, "maxlength", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], InputComponent.prototype, "min", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], InputComponent.prototype, "minlength", 2);
__decorateClass([
  property({ type: String, reflect: true })
], InputComponent.prototype, "pattern", 2);
__decorateClass([
  property({ type: String, reflect: true })
], InputComponent.prototype, "placeholder", 2);
__decorateClass([
  property({ type: String, reflect: true })
], InputComponent.prototype, "size", 2);
__decorateClass([
  property({ type: String, reflect: true })
], InputComponent.prototype, "step", 2);
__decorateClass([
  property({ type: String, reflect: true })
], InputComponent.prototype, "type", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], InputComponent.prototype, "readonly", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], InputComponent.prototype, "required", 2);
__decorateClass([
  query("sl-input")
], InputComponent.prototype, "_wrappedElement", 2);
__decorateClass([
  property({ type: String, reflect: true })
], InputComponent.prototype, "value", 1);
__decorateClass([
  property({ type: String, reflect: true, attribute: "autocapitalize" })
], InputComponent.prototype, "autocapitalize", 1);
__decorateClass([
  property({ type: String, reflect: true, attribute: "enterkeyhint" })
], InputComponent.prototype, "enterKeyHint", 1);
__decorateClass([
  property({ type: String, reflect: true, attribute: "inputmode" })
], InputComponent.prototype, "inputMode", 1);
__decorateClass([
  property({
    type: Boolean,
    reflect: true,
    converter: {
      fromAttribute: (value) => {
        return value && value !== "false";
      },
      toAttribute: (value) => {
        return value ? "true" : "false";
      }
    }
  })
], InputComponent.prototype, "spellcheck", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], InputComponent.prototype, "autofocus", 1);
InputComponent = __decorateClass([
  webComponent({ name: "elvt-input", dependencies: ["sl-input"] })
], InputComponent);

export {
  InputType,
  InputComponent
};
