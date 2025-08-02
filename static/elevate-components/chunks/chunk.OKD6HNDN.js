import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/icon-button/icon-button.component.ts
import { LitElement, unsafeCSS } from "lit";
import { html, literal } from "lit/static-html.js";
import { property, query, state } from "lit/decorators.js";

// src/components/icon-button/icon-button.styles.scss?inline
var icon_button_styles_default = `:host {
  --border-radius: var(--sl-border-radius-medium);
  --padding: var(--elvt-measures-distance-3xs, 0.25rem);
  --transition-duration: var(--sl-transition-x-fast);
  --focus-ring: var(--sl-focus-ring);
  --focus-ring-offset: var(--sl-focus-ring-offset);
  --ground-fill: transparent;
  --color: var(--sl-color-neutral-600);
  --color--hover: var(--sl-color-primary-600);
  --color--active: var(--sl-color-primary-700);
  --selected-ground-fill: var(--sl-color-neutral-600);
  --selected-color: var(--sl-color-neutral-0);
  --selected-ground-fill--hover: var(--sl-color-primary-600);
  --selected-ground-fill--active: var(--sl-color-primary-700);
  --icon-font-size: inherit;
  display: inline-block;
}

.icon-button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background: var(--ground-fill);
  border: none;
  border-radius: var(--border-radius);
  font-size: var(--icon-font-size);
  color: var(--color);
  padding: var(--padding);
  cursor: pointer;
  transition: var(--transition-duration) color;
  -webkit-appearance: none;
  appearance: none;
  line-height: 1;
}
.icon-button[size=small] {
  --icon-font-size: calc(24px - var(--padding) - var(--padding));
}
.icon-button[size=medium] {
  --icon-font-size: calc(32px - var(--padding) - var(--padding));
}
.icon-button[size=large] {
  --icon-font-size: calc(48px - var(--padding) - var(--padding));
}
.icon-button[data-selected] {
  --ground-fill: var(--selected-ground-fill);
  --color: var(--selected-color);
}
.icon-button[data-selected]:hover:not(.icon-button--disabled), .icon-button[data-selected]:focus-visible:not(.icon-button--disabled) {
  --ground-fill: var(--selected-ground-fill--hover);
  --color: var(--selected-color);
}
.icon-button[data-selected] .icon-button:active:not(.icon-button--disabled) {
  --ground-fill: var(--selected-ground-fill--hover);
  --color: var(--selected-color);
}
.icon-button[shape=circle] {
  border-radius: 400px;
}
.icon-button:hover:not(.icon-button--disabled), .icon-button:focus-visible:not(.icon-button--disabled) {
  --color: var(--color--hover);
}
.icon-button .icon-button:active:not(.icon-button--disabled) {
  --color: var(--color--active);
}
.icon-button .icon-button:focus {
  outline: none;
}
.icon-button .icon-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.icon-button .icon-button:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}
.icon-button .icon-button__content {
  pointer-events: none;
}`;

// src/components/icon-button/icon-button.component.ts
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { webComponent } from "@inform-elevate/elevate-cdk";
var IconButtonShape = {
  Circle: "circle",
  Rectangle: "rectangle"
};
var IconButtonComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.label = "";
    this.selected = false;
    this.shape = IconButtonShape.Rectangle;
    this._hasFocus = false;
  }
  /**
   * Removes focus from the icon button.
   */
  blur() {
    this._button.blur();
  }
  /**
   * Simulates a click on the icon button.
   */
  click() {
    this._button.click();
  }
  /**
   * Sets focus on the icon button.
   */
  focus(options) {
    this._button.focus(options);
  }
  render() {
    const isLink = !!this.href;
    const tag = isLink ? literal`a` : literal`button`;
    return html`<${tag}
            part="ground"
            class=${classMap({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this._hasFocus
    })}
            ?data-selected=${this.selected}
            ?disabled=${ifDefined(isLink ? void 0 : this.disabled)}
            type=${ifDefined(isLink ? void 0 : "button")}
            href=${ifDefined(isLink ? this.href : void 0)}
            target=${ifDefined(isLink ? this.target : void 0)}
            download=${ifDefined(isLink ? this.download : void 0)}
            shape=${ifDefined(this.shape)}
            size=${ifDefined(this.size)}
            rel=${ifDefined(isLink && this.target ? "noreferrer noopener" : void 0)}
            role=${ifDefined(isLink ? void 0 : "button")}
            aria-disabled=${this.disabled ? "true" : "false"}
            aria-label="${this.label}"
            tabindex=${this.disabled ? "-1" : "0"}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @click=${this.handleClick}>
            <slot name="icon" class="icon-button__content">
                <elvt-icon icon=${this.icon} aria-hidden="true"></elvt-icon>
            </slot>
          </${tag}>
    `;
  }
  handleBlur() {
    this._hasFocus = false;
  }
  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  handleFocus() {
    this._hasFocus = true;
  }
};
IconButtonComponent.styles = unsafeCSS(icon_button_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true })
], IconButtonComponent.prototype, "disabled", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IconButtonComponent.prototype, "download", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IconButtonComponent.prototype, "icon", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IconButtonComponent.prototype, "href", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IconButtonComponent.prototype, "label", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], IconButtonComponent.prototype, "selected", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IconButtonComponent.prototype, "shape", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IconButtonComponent.prototype, "size", 2);
__decorateClass([
  property()
], IconButtonComponent.prototype, "target", 2);
__decorateClass([
  query(".icon-button")
], IconButtonComponent.prototype, "_button", 2);
__decorateClass([
  state()
], IconButtonComponent.prototype, "_hasFocus", 2);
IconButtonComponent = __decorateClass([
  webComponent({ name: "elvt-icon-button", dependencies: ["elvt-icon"] })
], IconButtonComponent);

export {
  IconButtonShape,
  IconButtonComponent
};
