import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/mutation-observer/mutation-observer.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

// src/components/mutation-observer/mutation-observer.styles.scss?inline
var mutation_observer_styles_default = `:host {
  display: contents;
}`;

// src/components/mutation-observer/mutation-observer.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var MutationObserverComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.attributeOldValue = false;
    this.characterData = false;
    this.characterDataOldValue = false;
    this.childList = false;
    this.disabled = false;
    this.subtree = false;
    this._mutationObserver = new MutationObserver((mutations) => {
      if (!this.disabled) {
        this.dispatchEvent(new CustomEvent("mutation", { detail: { mutations } }));
      }
    });
    this._observerOptions = {};
  }
  get attributeFilter() {
    return this._attributeFilter;
  }
  set attributeFilter(value) {
    if (value === "*") {
      this._attributeFilter = value;
    } else if (typeof value === "string") {
      this._attributeFilter = value.split(" ").map((attribute) => attribute.trim()).filter((attribute) => attribute !== "");
    } else {
      this._attributeFilter = value.map((attribute) => attribute.trim()).filter((attribute) => attribute !== "");
    }
  }
  disconnectedCallback() {
    this._mutationObserver.disconnect();
    super.disconnectedCallback();
  }
  render() {
    this.observe();
    return html` <slot></slot>`;
  }
  observe() {
    if (this.disabled || !this.parentElement) {
      this._observerOptions = {};
      this._mutationObserver.disconnect();
      return;
    }
    const options = {
      childList: this.childList,
      subtree: this.subtree,
      attributeOldValue: this.attributeOldValue,
      characterData: this.characterData,
      characterDataOldValue: this.characterDataOldValue
    };
    if (this._attributeFilter) {
      options.attributes = true;
      if (this._attributeFilter instanceof Array) {
        options.attributeFilter = this._attributeFilter;
      }
    }
    if (JSON.stringify(options) !== JSON.stringify(this._observerOptions)) {
      this._mutationObserver.disconnect();
      this._observerOptions = options;
      if (options.attributes || options.characterData || options.childList) {
        this._mutationObserver.observe(this, options);
      }
    }
  }
};
MutationObserverComponent.styles = unsafeCSS(mutation_observer_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "attribute-old-value" })
], MutationObserverComponent.prototype, "attributeOldValue", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "character-data" })
], MutationObserverComponent.prototype, "characterData", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "character-data-old-value" })
], MutationObserverComponent.prototype, "characterDataOldValue", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "child-list" })
], MutationObserverComponent.prototype, "childList", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MutationObserverComponent.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MutationObserverComponent.prototype, "subtree", 2);
__decorateClass([
  property({
    type: String,
    reflect: true,
    attribute: "attribute-filter",
    converter: {
      toAttribute(value) {
        return value instanceof Array ? value.join(" ") : value;
      }
    }
  })
], MutationObserverComponent.prototype, "attributeFilter", 1);
MutationObserverComponent = __decorateClass([
  webComponent({ name: "elvt-mutation-observer" })
], MutationObserverComponent);

export {
  MutationObserverComponent
};
