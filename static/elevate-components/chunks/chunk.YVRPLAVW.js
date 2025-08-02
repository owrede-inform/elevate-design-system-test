import {
  SHAPE_ARC,
  SHAPE_BAR,
  SHAPE_RING
} from "./chunk.AL52STRK.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/progress/progress.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

// src/components/progress/progress.styles.scss?inline
var progress_styles_default = `:host {
  display: grid;
  grid-template: 1fr/1fr;
  grid-template-areas: "content";
  --progress-color-value: var(--progress-color, var(--elvt-alias-feedback-strong-fill-primary, rgb(11, 92, 223)));
  --progress-track-color-value: var(--progress-track-color, color-mix(in srgb, var(--elvt-alias-feedback-strong-fill-neutral, rgb(190, 195, 205)), transparent 50%));
  --progress-bar-height: 0.25em;
  --progress-bar-min-width-value: var(--progress-bar-min-width-default, 4em);
  --progress-ring-size: 1em;
  --progress-ring-track-width: 0.15em;
}
:host sl-progress-bar {
  grid-area: content;
  --height: var(--progress-bar-height);
  --indicator-color: var(--progress-color-value);
  --track-color: var(--progress-track-color-value);
}
:host sl-progress-ring {
  grid-area: content;
  font-size: calc(var(--progress-ring-size) * 0.4);
  --size: var(--progress-ring-size);
  --track-width: var(--progress-ring-track-width);
  --track-color: var(--progress-track-color-value);
  --indicator-width: var(--progress-ring-track-width);
  --indicator-color: var(--progress-color-value);
}
:host sl-spinner {
  grid-area: content;
  font-size: var(--progress-ring-size);
  --size: var(--progress-ring-size);
  --track-width: var(--progress-ring-track-width);
  --track-color: var(--progress-track-color-value);
  --indicator-color: var(--progress-color-value);
}
:host .inner {
  font-size: calc(var(--progress-ring-size) * 0.4);
  grid-area: content;
  display: flex;
  align-items: center;
  justify-content: center;
}

:host([shape=bar]) {
  display: block;
  min-width: var(--progress-bar-min-width-value);
}

:host([shape=arc]) {
  --progress-track-color-value: transparent;
}

:host([size=small]) {
  --progress-bar-min-width-default: 2rem;
  --progress-bar-height: 0.25rem;
  --progress-ring-size: 2.5rem;
  --progress-ring-track-width: 0.25rem;
}

:host([size=medium]) {
  --progress-bar-min-width-default: 4rem;
  --progress-bar-height: 0.5rem;
  --progress-ring-size: 3.75rem;
  --progress-ring-track-width: 0.5rem;
}

:host([size=large]) {
  --progress-bar-min-width-default: 6rem;
  --progress-bar-height: 1rem;
  --progress-ring-size: 5rem;
  --progress-ring-track-width: 1rem;
}`;

// src/components/progress/progress.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var ProgressShape = {
  Bar: SHAPE_BAR,
  Ring: SHAPE_RING,
  Arc: SHAPE_ARC
};
var ProgressComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.shape = ProgressShape.Bar;
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  get shoelaceProgressValue() {
    return this.value * 100;
  }
  render() {
    return html`
            ${this.shape === "ring" || this.shape === "arc" ? html` ${this.indeterminate ? html` <sl-spinner></sl-spinner>
                            <div class="inner"><slot></slot></div>` : html` <sl-progress-ring value=${this.shoelaceProgressValue} label=${this.label}><slot></slot></sl-progress-ring>`}` : html` <sl-progress-bar value=${this.shoelaceProgressValue} label=${this.label} ?indeterminate=${this.indeterminate}>
                      ${this.size === Size.Large ? html`<slot></slot>` : null}
                  </sl-progress-bar>`}
        `;
  }
};
ProgressComponent.styles = unsafeCSS(progress_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], ProgressComponent.prototype, "shape", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], ProgressComponent.prototype, "value", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], ProgressComponent.prototype, "indeterminate", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ProgressComponent.prototype, "label", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ProgressComponent.prototype, "size", 2);
ProgressComponent = __decorateClass([
  webComponent({ name: "elvt-progress", dependencies: ["sl-spinner", "sl-progress-bar"] })
], ProgressComponent);

export {
  ProgressShape,
  ProgressComponent
};
