import {
  LinkTarget
} from "./chunk.Z46V37GE.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/breadcrumbs/breadcrumb-item/breadcrumb-item.component.ts
import { property } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/breadcrumbs/breadcrumb-item/breadcrumb-item.styles.scss?inline
var breadcrumb_item_styles_default = `:host {
  display: inline-flex;
}

.breadcrumb-item {
  display: inline-flex;
  align-items: center;
  font-family: var(--elvt-type-alias-default-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-m-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-m-font-size, 1rem);
  line-height: 1.5;
  height: var(--elvt-component-breadcrumbItem-height, 1.5rem);
  white-space: nowrap;
  --icon-size: var(--elvt-component-breadcrumbItem-height, 1.5rem);
}

.breadcrumb-item--selected .breadcrumb-item__label.breadcrumb-item__label--link, .breadcrumb-item--selected .breadcrumb-item__label.breadcrumb-item__label--button {
  text-decoration: underline;
  color: var(--elvt-component-breadcrumbItem-link-text-selected-default, rgb(35, 66, 117));
}
.breadcrumb-item--selected .breadcrumb-item__label.breadcrumb-item__label--link:hover, .breadcrumb-item--selected .breadcrumb-item__label.breadcrumb-item__label--button:hover {
  color: var(--elvt-component-breadcrumbItem-link-text-selected-hover, rgb(35, 51, 75));
}
.breadcrumb-item--selected .breadcrumb-item__label.breadcrumb-item__label--link:active, .breadcrumb-item--selected .breadcrumb-item__label.breadcrumb-item__label--button:active {
  color: var(--elvt-component-breadcrumbItem-link-text-selected-active, rgb(0, 114, 255));
}

.breadcrumb-item__label--button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.breadcrumb-item__label {
  display: inline-flex;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  align-items: baseline;
  align-content: center;
  text-decoration: none;
  color: var(--elvt-component-breadcrumbItem-text-default, rgb(61, 66, 83));
}
.breadcrumb-item__label.breadcrumb-item__label--link, .breadcrumb-item__label.breadcrumb-item__label--button {
  color: var(--elvt-component-breadcrumbItem-link-text-default, rgb(11, 92, 223));
}
.breadcrumb-item__label.breadcrumb-item__label--link:hover, .breadcrumb-item__label.breadcrumb-item__label--button:hover {
  text-decoration: underline;
  color: var(--elvt-component-breadcrumbItem-link-text-hover, rgb(35, 66, 117));
}
.breadcrumb-item__label.breadcrumb-item__label--link:active, .breadcrumb-item__label.breadcrumb-item__label--button:active {
  text-decoration: underline;
  color: var(--elvt-component-breadcrumbItem-link-text-active, rgb(0, 114, 255));
}

.breadcrumb-item__label:focus {
  outline: none;
}

.breadcrumb-item__label:focus-visible {
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: var(--elvt-alias-action-focus-border-width-m, 0.125rem);
  border-radius: var(--elvt-component-breadcrumbItem-radius, 0.25rem);
}

:host(:last-of-type) .breadcrumb-item__separator {
  display: none;
}

.breadcrumb-item__separator {
  display: inline-flex;
  align-items: center;
  margin: 0 var(--elvt-component-breadcrumb-gap-gap, 0.75rem);
  user-select: none;
  -webkit-user-select: none;
  color: var(--elvt-component-breadcrumbItem-separator, rgb(61, 66, 83));
}`;

// src/components/breadcrumbs/breadcrumb-item/breadcrumb-item.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var BreadcrumbItemComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.clickable = false;
    this.selected = false;
  }
  render() {
    var _a;
    return html` <div part="base" class="breadcrumb-item ${this.selected ? "breadcrumb-item--selected" : ""}">
            ${this.href ? html`
                      <a
                          part="label"
                          class="breadcrumb-item__label breadcrumb-item__label--link"
                          href="${this.href}"
                          target="${(_a = this.target) != null ? _a : LinkTarget.Self}"
                          rel="noreferrer noopener">
                          <slot></slot>
                      </a>
                  ` : ""}
            ${this.clickable ? html`
                      <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                          <slot></slot>
                      </button>
                  ` : ""}
            ${!this.clickable && !this.href ? html`
                      <label part="label" class="breadcrumb-item__label breadcrumb-item__label--label">
                          <slot></slot>
                      </label>
                  ` : ""}

            <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
                <slot name="separator"></slot>
            </span>
        </div>`;
  }
};
BreadcrumbItemComponent.styles = unsafeCSS(breadcrumb_item_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], BreadcrumbItemComponent.prototype, "href", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], BreadcrumbItemComponent.prototype, "clickable", 2);
__decorateClass([
  property({ type: String, reflect: true })
], BreadcrumbItemComponent.prototype, "target", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], BreadcrumbItemComponent.prototype, "selected", 2);
BreadcrumbItemComponent = __decorateClass([
  webComponent({ name: "elvt-breadcrumb-item" })
], BreadcrumbItemComponent);

export {
  BreadcrumbItemComponent
};
