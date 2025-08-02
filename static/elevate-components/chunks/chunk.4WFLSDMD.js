import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/visually-hidden/visually-hidden.component.ts
import { html, LitElement, unsafeCSS } from "lit";

// src/components/visually-hidden/visually-hidden.styles.scss?inline
var visually_hidden_styles_default = `:host(:not(:focus-within)) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: none !important;
  overflow: hidden !important;
  white-space: nowrap !important;
  padding: 0 !important;
}`;

// src/components/visually-hidden/visually-hidden.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var VisuallyHiddenComponent = class extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
};
VisuallyHiddenComponent.styles = unsafeCSS(visually_hidden_styles_default);
VisuallyHiddenComponent = __decorateClass([
  webComponent({ name: "elvt-visually-hidden" })
], VisuallyHiddenComponent);

export {
  VisuallyHiddenComponent
};
