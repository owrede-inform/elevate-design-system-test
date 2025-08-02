import {
  __decorateClass,
  __spreadProps,
  __spreadValues
} from "./chunk.S3NI7NKU.js";

// src/components/fields/custom-form-control.ts
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { DependencyContainer, EventSubscription, Subject, Subscriptions } from "@inform-elevate/elevate-cdk";
var FormControlIntl = class {
  constructor() {
    this.changes = new Subject();
  }
};
var DefaultFormControlIntl = class extends FormControlIntl {
  constructor() {
    super(...arguments);
    this.messageBadInput = "Invalid input.";
    this.messageValueMissing = "Missing required";
    this.messagePatternMismatch = (pattern) => `Does not match pattern: ${pattern}.`;
    this.messageRangeOverflow = (maximum) => `Input above maximum: ${maximum}.`;
    this.messageRangeUnderflow = (minimum) => `Input below minimum: ${minimum}.`;
    this.messageStepMismatch = (stepSize) => `Input does not match step size: ${stepSize}.`;
    this.messageTooLong = (maximum) => `Input is to long, maximum characters: ${maximum}.`;
    this.messageTooShort = (minimum) => `Input is to short, minimum characters: ${minimum}.`;
    this.messageTypeMismatch = (actual, expected) => `Input does not match expected type (${expected}), got ${actual}.`;
  }
};
var CustomFormControl = class extends LitElement {
  constructor() {
    super();
    this.disabled = false;
    this.required = false;
    this.validators = [];
    this.intl = new DefaultFormControlIntl();
    this._subscriptions = new Subscriptions();
    this._touched = false;
    this._internals = this.attachInternals();
  }
  /**
   * Declare the component a form associated control
   */
  static get formAssociated() {
    return true;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (this._name !== value) {
      this._name = value;
      if (value) {
        this.setAttribute("name", value);
      } else {
        this.removeAttribute("name");
      }
    }
  }
  get touched() {
    return this._touched;
  }
  set touched(value) {
    this._touched = value;
  }
  /**
   * Associated form if available. This is the nearest form on the same (Shadow) DOM
   */
  get form() {
    return this._internals.form || void 0;
  }
  get validationMessage() {
    return this._internals.validationMessage;
  }
  /**
   * Return the current validity state
   *
   * @url https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/validity
   */
  get validity() {
    return this._internals.validity;
  }
  get willValidate() {
    return this._internals.willValidate;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this.intl = ((_a = DependencyContainer.findOnAncestorOf(this)) == null ? void 0 : _a.provide(FormControlIntl)) || this.intl;
    this._subscriptions.add(
      new EventSubscription(this, "focusout", () => this.touched = true),
      this.intl.changes.subscribe(() => this.requestUpdate())
    );
  }
  disconnectedCallback() {
    this._subscriptions.unsubscribe();
    super.disconnectedCallback();
  }
  firstUpdated(changed) {
    super.firstUpdated(changed);
    this._initialValue = this.value;
    this.updateFormValue();
  }
  formDisabledCallback(disabled) {
    this.disabled = disabled;
  }
  formResetCallback() {
    this.value = this._initialValue;
  }
  updateFormValue() {
    const value = this.value;
    if (void 0 === value) {
      this._internals.setFormValue(null);
    } else {
      this._internals.setFormValue(value instanceof File || value instanceof FormData ? value : `${value}`);
    }
    let validity = this.validateFormValue(value);
    validity = this.validators.reduce((carry, validator) => {
      Object.entries(validator(value, this)).filter(([, value2]) => value2 === true || typeof value2 === "string").forEach(([name, value2]) => {
        carry[name] = value2;
      });
      return carry;
    }, validity);
    const validationResult = this.getFormValidityAndMessage(validity);
    const currentMessage = this.validationMessage;
    const currentValidity = __spreadValues({}, this.validity);
    this._internals.setValidity(validationResult.flags, validationResult.message);
    if (JSON.stringify(currentValidity) !== JSON.stringify(this._internals.validity) || currentMessage !== this.validationMessage) {
      this.requestUpdate();
    }
  }
  validateFormValue(value) {
    if (!this.disabled) {
      if (this.required && (void 0 === value || value === "")) {
        return {
          valueMissing: this.intl.messageValueMissing || true
        };
      }
    }
    return {};
  }
  getFormValidityAndMessage(state) {
    const errorsByPriority = [
      "badInput",
      "valueMissing",
      "typeMismatch",
      "stepMismatch",
      "rangeUnderflow",
      "rangeOverflow",
      "patternMismatch",
      "tooShort",
      "tooLong",
      "customError"
    ];
    return Object.entries(state).reduce(
      (carry, [identifier, message]) => {
        if (message === void 0 || message === false) {
          return carry;
        }
        const priority = errorsByPriority.indexOf(identifier);
        if (priority >= 0) {
          carry.flags = __spreadProps(__spreadValues({}, carry.flags), { [identifier]: true });
        } else {
          carry.flags.customError = true;
        }
        if (typeof message === "string" && message !== "") {
          if (carry.priority === void 0 || carry.message === void 0 || priority >= 0 && priority >= carry.priority) {
            carry.message = message;
            carry.priority = priority >= 0 ? priority : errorsByPriority.indexOf("customError");
          }
        }
        return carry;
      },
      {
        flags: {}
      }
    );
  }
};
__decorateClass([
  property({ type: Boolean, reflect: true })
], CustomFormControl.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], CustomFormControl.prototype, "required", 2);
__decorateClass([
  property({ type: Object, attribute: false })
], CustomFormControl.prototype, "validators", 2);
__decorateClass([
  property({ type: String, reflect: true })
], CustomFormControl.prototype, "name", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], CustomFormControl.prototype, "touched", 1);

export {
  FormControlIntl,
  DefaultFormControlIntl,
  CustomFormControl
};
