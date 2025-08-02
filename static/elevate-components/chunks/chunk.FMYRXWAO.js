import {
  CustomFormField
} from "./chunk.CSNJNMVG.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/textarea/textarea.component.ts
import { property, query } from "lit/decorators.js";
import { html, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

// src/components/textarea/textarea.styles.scss?inline
var textarea_styles_default = `:host {
  display: grid;
  grid-template: 1fr/1fr;
  break-inside: avoid;
  --indicator-offset-column: calc(var(--elvt-measures-distance-2xs, 0.5rem) * -1);
  --indicator-offset-row: calc(1em + (100% - 1em) * 0.5);
}
:host .required-indicator {
  color: var(--elvt-component-requiredIndicator-color, rgb(206, 1, 1));
}

:host([touched]:invalid) sl-textarea::part(base) {
  outline: 1px solid red;
  outline-offset: -1;
}
:host([touched]:invalid) .error-message {
  display: inline-flex;
  align-items: center;
  gap: var(--elvt-measures-distance-3xs, 0.25rem);
  color: red;
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

:host(:not([resize=auto])) sl-textarea {
  display: grid;
  grid-template: 1fr/1fr;
}
:host(:not([resize=auto])) sl-textarea::part(form-control) {
  display: grid;
  grid-template: min-content 100fr min-content/1fr;
  grid-template-areas: "label" "field" "help";
}
:host(:not([resize=auto])) sl-textarea::part(form-control-label) {
  grid-area: label;
}
:host(:not([resize=auto])) sl-textarea::part(form-control-input) {
  display: grid;
  grid-template: 1fr/1fr;
  grid-area: field;
}
:host(:not([resize=auto])) sl-textarea::part(base) {
  position: relative;
}
:host(:not([resize=auto])) sl-textarea::part(textarea) {
  min-height: 100%;
}
:host(:not([resize=auto])) sl-textarea::part(form-control-help-text) {
  grid-area: help;
}

:host([resize=auto]) sl-textarea {
  display: grid;
  grid-template: 1fr/1fr;
  min-height: inherit;
}
:host([resize=auto]) sl-textarea::part(form-control) {
  display: grid;
  grid-template: min-content 100fr min-content/1fr;
  grid-template-areas: "label" "field" "help";
  min-height: inherit;
}
:host([resize=auto]) sl-textarea::part(form-control-label) {
  grid-area: label;
}
:host([resize=auto]) sl-textarea::part(form-control-input) {
  display: grid;
  grid-template: 1fr/1fr;
  grid-area: field;
  min-height: inherit;
}
:host([resize=auto]) sl-textarea::part(base) {
  position: relative;
  min-height: inherit;
}
:host([resize=auto]) sl-textarea::part(textarea) {
  min-height: inherit;
}
:host([resize=auto]) sl-textarea::part(form-control-help-text) {
  grid-area: help;
}`;

// src/components/textarea/textarea.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var TextareaResize = {
  Auto: "auto",
  Both: "both",
  None: "none",
  Vertical: "vertical"
};
var TextareaComponent = class extends CustomFormField {
  constructor() {
    super(...arguments);
    this.readonly = false;
    this.required = false;
    this.resize = TextareaResize.None;
    this.size = Size.Medium;
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
      this._wrappedElement.value = value;
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
  handleInput() {
    this.updateFormValue();
  }
  blur() {
    var _a;
    (_a = this._wrappedElement) == null ? void 0 : _a.blur();
  }
  focus(options) {
    var _a;
    (_a = this._wrappedElement) == null ? void 0 : _a.focus(options);
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
    return html` <sl-textarea
            ?autofocus=${super.autofocus}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            spellcheck=${this.spellcheck ? "true" : "false"}
            autocapitalize=${ifDefined(this._autocapitalize)}
            enterkeyhint=${ifDefined(this._enterKeyHint)}
            inputmode=${ifDefined(this._inputMode)}
            placeholder=${ifDefined(this.placeholder)}
            resize=${ifDefined(this.resize)}
            size=${this.size}
            value=${ifDefined(this._value)}
            @input=${this.handleInput}>
            ${this.renderLabelSlot("label")} ${this.renderHelpTextSlot("help-text")}
        </sl-textarea>`;
  }
};
TextareaComponent.styles = unsafeCSS(textarea_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TextareaComponent.prototype, "readonly", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TextareaComponent.prototype, "required", 2);
__decorateClass([
  property({ type: String, reflect: true })
], TextareaComponent.prototype, "resize", 2);
__decorateClass([
  property({ type: String, reflect: true })
], TextareaComponent.prototype, "placeholder", 2);
__decorateClass([
  property({ type: String, reflect: true })
], TextareaComponent.prototype, "size", 2);
__decorateClass([
  query("sl-textarea")
], TextareaComponent.prototype, "_wrappedElement", 2);
__decorateClass([
  property({ type: String, reflect: true })
], TextareaComponent.prototype, "value", 1);
__decorateClass([
  property({ type: String, reflect: true, attribute: "autocapitalize" })
], TextareaComponent.prototype, "autocapitalize", 1);
__decorateClass([
  property({ type: String, reflect: true, attribute: "enterkeyhint" })
], TextareaComponent.prototype, "enterKeyHint", 1);
__decorateClass([
  property({ type: String, reflect: true, attribute: "inputmode" })
], TextareaComponent.prototype, "inputMode", 1);
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
], TextareaComponent.prototype, "spellcheck", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TextareaComponent.prototype, "autofocus", 1);
TextareaComponent = __decorateClass([
  webComponent({ name: "elvt-textarea", dependencies: ["sl-textarea"] })
], TextareaComponent);

export {
  TextareaResize,
  TextareaComponent
};
