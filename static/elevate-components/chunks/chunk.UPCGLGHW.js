import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/resize-observer/resize-observer.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

// src/components/resize-observer/resize-observer.styles.scss?inline
var resize_observer_styles_default = `:host {
  display: inline-block;
  position: relative;
}`;

// src/components/resize-observer/resize-observer.component.ts
import { delay, webComponent } from "@inform-elevate/elevate-cdk";
var ResizeObserverComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.delay = 0;
    this.disabled = false;
    this._resizeObserver = new ResizeObserver(async (entries) => {
      if (this.disabled) {
        return;
      }
      if (this.delay > 0) {
        if (this._pending) {
          this._pending();
        }
        this._pending = this.triggerDelayed(entries);
      } else {
        this.dispatchEvent(new CustomEvent("resize", { detail: { entries } }));
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this._resizeObserver.observe(this);
  }
  disconnectedCallback() {
    this._resizeObserver.disconnect();
    super.disconnectedCallback();
  }
  render() {
    return html`<slot></slot>`;
  }
  triggerDelayed(entries) {
    let pending = true;
    (async (entries2) => {
      await delay(this.delay);
      if (pending && !this.disabled) {
        this.dispatchEvent(new CustomEvent("resize", { detail: { entries: entries2 } }));
      }
    })(entries).catch();
    return () => {
      pending = false;
    };
  }
};
ResizeObserverComponent.styles = unsafeCSS(resize_observer_styles_default);
__decorateClass([
  property({ type: Number, reflect: true })
], ResizeObserverComponent.prototype, "delay", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], ResizeObserverComponent.prototype, "disabled", 2);
ResizeObserverComponent = __decorateClass([
  webComponent({ name: "elvt-resize-observer" })
], ResizeObserverComponent);

export {
  ResizeObserverComponent
};
