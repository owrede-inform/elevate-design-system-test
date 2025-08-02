import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/lightbox/lightbox.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { EventSubscription, Subscriptions, webComponent } from "@inform-elevate/elevate-cdk";

// src/components/lightbox/lightbox.styles.scss?inline
var lightbox_styles_default = `:host {
  --lightbox-border-radius: var(--elvt-measures-radius-2xl, 1.5rem);
  --lightbox-min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  min-height: var(--lightbox-min-height);
}

.backdrop {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.ground {
  font-family: var(--elvt-type-alias-default-content-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-content-m-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-content-m-font-size, 1rem);
  line-height: 1.5;
  color: var(--elvt-component-application-text, rgb(61, 66, 83));
  display: flex;
  align-items: center;
  justify-content: stretch;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  min-height: var(--lightbox-min-height);
  pointer-events: none;
}

.prefix,
.suffix,
.content {
  pointer-events: all;
}

.content {
  flex-grow: 0;
  border-radius: var(--lightbox-border-radius);
}

.prefix,
.suffix {
  flex-grow: 5;
  display: grid;
  grid-template-columns: 1fr/1fr;
}`;

// src/components/lightbox/lightbox.component.ts
var LightboxComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this._subscriptions = new Subscriptions();
  }
  handleBackdropClick() {
    this.dispatchEvent(new CustomEvent("backdrop-click", { bubbles: true, cancelable: true }));
  }
  handleEscapePress() {
    this.dispatchEvent(new CustomEvent("escape-keypress", { bubbles: true, cancelable: true }));
  }
  connectedCallback() {
    super.connectedCallback();
    this._subscriptions.add(
      new EventSubscription(document, "keydown", (event) => {
        if (event.key === "Escape") {
          this.handleEscapePress();
        }
      })
    );
  }
  disconnectedCallback() {
    this._subscriptions.unsubscribe();
    super.disconnectedCallback();
  }
  render() {
    return html` <div class="backdrop" @click=${this.handleBackdropClick}></div>
            <div class="ground">
                <div class="prefix"><slot name="prefix"></slot></div>
                <div class="content">
                    <slot></slot>
                </div>
                <div class="suffix"><slot name="suffix"></slot></div>
            </div>`;
  }
};
LightboxComponent.styles = unsafeCSS(lightbox_styles_default);
LightboxComponent = __decorateClass([
  webComponent({
    name: "elvt-lightbox"
  })
], LightboxComponent);

export {
  LightboxComponent
};
