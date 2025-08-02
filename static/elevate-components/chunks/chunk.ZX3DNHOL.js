import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/skeleton/skeleton.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

// src/components/skeleton/skeleton.styles.scss?inline
var skeleton_styles_default = `:host {
  --min-width: var(--skeleton-min-width, 100px);
  display: block;
  min-width: var(--min-width);
}`;

// src/components/skeleton/skeleton.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var SkeletonEffect = {
  None: "none",
  Pulse: "pulse",
  Sheen: "sheen"
};
var SkeletonComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.effect = SkeletonEffect.None;
    this.width = 100;
  }
  render() {
    return html`<sl-skeleton effect=${this.effect} style=${styleMap({ width: `${this.width}%` })}></sl-skeleton>`;
  }
};
SkeletonComponent.styles = unsafeCSS(skeleton_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], SkeletonComponent.prototype, "effect", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], SkeletonComponent.prototype, "width", 2);
SkeletonComponent = __decorateClass([
  webComponent({ name: "elvt-skeleton", dependencies: ["sl-skeleton"] })
], SkeletonComponent);

export {
  SkeletonEffect,
  SkeletonComponent
};
