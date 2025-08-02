import {
  mdiChevronLeft,
  mdiChevronRight
} from "./chunk.HMLPYKN2.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/expansion-panels/expansion-panel/expansion-panel.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property, query } from "lit/decorators.js";

// src/components/expansion-panels/expansion-panel/expansion-panel.styles.scss?inline
var expansion_panel_styles_default = `:host([layer=default]) {
  --details-default-background: var(--elvt-component-expansionPanel-fill-default-default, rgb(255, 255, 255));
  --details-hover-background: var(--elvt-component-expansionPanel-fill-default-hover, rgb(255, 255, 255));
  --details-active-background: var(--elvt-component-expansionPanel-fill-default-active, rgb(255, 255, 255));
  --details-disabled-background: var(--elvt-component-expansionPanel-fill-default-disabled-default, rgb(255, 255, 255));
}

:host([layer=elevated]) {
  --details-default-background: var(--elvt-component-expansionPanel-fill-elevated-default, rgb(243, 244, 247));
  --details-hover-background: var(--elvt-component-expansionPanel-fill-elevated-hover, rgb(243, 244, 247));
  --details-active-background: var(--elvt-component-expansionPanel-fill-elevated-active, rgb(243, 244, 247));
  --details-disabled-background: var(--elvt-component-expansionPanel-fill-elevated-disabled-default, rgb(243, 244, 247));
}

:host([size=small]) {
  --details-border-radius: var(--elvt-component-expansionPanel-border-radius-s, 0.25rem);
  --details-border-width: var(--elvt-component-expansionPanel-border-width-s, 0.0625rem);
  --details-padding-column: var(--elvt-component-expansionPanel-padding-column-s, 0.75rem);
  --details-header-height: var(--elvt-component-expansionPanel-height-s, 2rem);
  --details-body-padding-row-top: var(--elvt-component-expansionPanel-padding-body-row-top-s, 0.5rem);
  --details-body-padding-row-bottom: var(--elvt-component-expansionPanel-padding-body-row-bottom-s, 1rem);
  --details-header-icon-height: var(--elvt-component-expansionPanel-chevron-height-s, 1rem);
}

:host([size=medium]) {
  --details-border-radius: var(--elvt-component-expansionPanel-border-radius-m, 0.25rem);
  --details-border-width: var(--elvt-component-expansionPanel-border-width-m, 0.0625rem);
  --details-padding-column: var(--elvt-component-expansionPanel-padding-column-m, 0.75rem);
  --details-header-height: var(--elvt-component-expansionPanel-height-m, 2.5rem);
  --details-body-padding-row-top: var(--elvt-component-expansionPanel-padding-body-row-top-m, 0.5rem);
  --details-body-padding-row-bottom: var(--elvt-component-expansionPanel-padding-body-row-bottom-m, 1.25rem);
  --details-header-icon-height: var(--elvt-component-expansionPanel-chevron-height-m, 1.25rem);
}

:host([size=large]) {
  --details-border-radius: var(--elvt-component-expansionPanel-border-radius-l, 0.25rem);
  --details-border-width: var(--elvt-component-expansionPanel-border-width-l, 0.0625rem);
  --details-padding-column: var(--elvt-component-expansionPanel-padding-column-l, 1rem);
  --details-header-height: var(--elvt-component-expansionPanel-height-l, 3rem);
  --details-body-padding-row-top: var(--elvt-component-expansionPanel-padding-body-row-top-l, 1rem);
  --details-body-padding-row-bottom: var(--elvt-component-expansionPanel-padding-body-row-bottom-l, 1.5rem);
  --details-header-icon-height: var(--elvt-component-expansionPanel-chevron-height-l, 1.5rem);
}

:host([size=small]) .details-header {
  font-family: var(--elvt-type-alias-emphasized-label-s-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-s-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-s-font-size, 0.875rem);
  line-height: 1.429;
}

:host([size=medium]) .details-header {
  font-family: var(--elvt-type-alias-emphasized-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-m-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-m-font-size, 1rem);
  line-height: 1.5;
}

:host([size=large]) .details-header {
  font-family: var(--elvt-type-alias-emphasized-label-l-font-family, "Inter");
  font-weight: var(--elvt-type-alias-emphasized-label-l-font-weight, "medium");
  font-size: var(--elvt-type-alias-emphasized-label-l-font-size, 1.25rem);
  line-height: 1.6;
}

:host([size=small]) .details-content {
  font-family: var(--elvt-type-alias-default-label-s-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-s-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-s-font-size, 0.875rem);
  line-height: 1.429;
}

:host([size=medium]) .details-content {
  font-family: var(--elvt-type-alias-default-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-m-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-m-font-size, 1rem);
  line-height: 1.5;
}

:host([size=large]) .details-content {
  font-family: var(--elvt-type-alias-default-label-l-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-l-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-l-font-size, 1.25rem);
  line-height: 1.6;
}

:host {
  --details-default-border-color: var(--elvt-component-expansionPanel-border-color-default, rgb(213, 217, 225));
  --details-hover-border-color: var(--elvt-component-expansionPanel-border-color-hover, rgb(112, 122, 143));
  --details-active-border-color: var(--elvt-component-expansionPanel-border-color-active, rgb(93, 102, 121));
  --details-disabled-border-color: var(--elvt-component-expansionPanel-border-color-disabled, rgb(190, 195, 205));
  --details-header-default-color: var(--elvt-component-expansionPanel-text-header-color-default, rgb(47, 50, 64));
  --details-header-hover-color: var(--elvt-component-expansionPanel-text-header-color-hover, rgb(47, 50, 64));
  --details-header-active-color: var(--elvt-component-expansionPanel-text-header-color-active, rgb(47, 50, 64));
  --details-header-disabled-color: var(--elvt-component-expansionPanel-text-header-color-disabled, rgb(163, 170, 180));
  --details-body-default-color: var(--elvt-component-expansionPanel-text-body-color-default, rgb(47, 50, 64));
  --details-body-hover-color: var(--elvt-component-expansionPanel-text-body-color-hover, rgb(47, 50, 64));
  --details-body-active-color: var(--elvt-component-expansionPanel-text-body-color-active, rgb(47, 50, 64));
  --details-body-disabled-color: var(--elvt-component-expansionPanel-text-body-color-disabled, rgb(163, 170, 180));
  display: block;
}

:host([disabled]) .details {
  border-color: var(--details-disabled-border-color);
  background: var(--details-disabled-background);
}
:host([disabled]) .details-header {
  color: var(--details-header-disabled-color);
  cursor: not-allowed;
}
:host([disabled]) .details-header:focus-visible {
  outline: none;
}
:host([disabled]) .details-content {
  color: var(--details-body-disabled-color);
}

.details {
  border-radius: var(--details-border-radius);
  border-width: var(--details-border-width);
  border-style: solid;
  border-color: var(--details-default-border-color);
  background: var(--details-default-background);
  overflow-anchor: none;
}
.details:hover {
  border-color: var(--details-hover-border-color);
  background: var(--details-hover-background);
}
.details:hover .details-content {
  color: var(--details-body-hover-color);
}
.details:active {
  border-color: var(--details-active-border-color);
  background: var(--details-active-background);
}
.details:active .details-content {
  color: var(--details-body-active-color);
}
.details.details-open slot[name=expand-icon], .details:not(.details-open) slot[name=collapse-icon] {
  display: none;
}
.details.details-open .details-summary-icon:not(.custom-icon) {
  rotate: 90deg;
}
.details.details-open.details-rtl .details-summary-icon:not(.custom-icon) {
  rotate: -90deg;
}

.details-header,
.details-body {
  padding-left: var(--details-padding-column);
  padding-right: var(--details-padding-column);
}

.details-header {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  align-items: center;
  height: var(--details-header-height);
  min-width: 0;
  color: var(--details-header-default-color);
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
}
.details-header:hover {
  color: var(--details-header-hover-color);
}
.details-header:active {
  color: var(--details-header-active-color);
}
.details-header:focus {
  outline: none;
}
.details-header:focus-visible {
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: var(--elvt-alias-action-focus-border-width-m, 0.125rem);
  border-radius: var(--details-border-radius);
}
.details-header::-webkit-details-marker {
  display: none;
}

.details-summary {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.details-summary-icon {
  display: flex;
  align-items: center;
  transition: 250ms rotate ease;
}

elvt-icon {
  --icon-size: var(--details-header-icon-height);
}

.details-body {
  overflow: hidden;
  height: auto;
}

.details-content {
  display: block;
  padding-top: var(--details-body-padding-row-top);
  padding-bottom: var(--details-body-padding-row-bottom);
  color: var(--details-body-default-color);
}`;

// src/components/expansion-panels/expansion-panel/expansion-panel.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
import { classMap } from "lit/directives/class-map.js";
var ExpansionPanelLayer = {
  Default: "default",
  Elevated: "elevated"
};
var ExpansionPanelComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.size = Size.Medium;
    this.summary = "";
    this.disabled = false;
    this.layer = ExpansionPanelLayer.Default;
    this._open = false;
  }
  get open() {
    return this._open;
  }
  set open(value) {
    this._open = value;
    this.handleOpenChange(value);
  }
  firstUpdated() {
    if (this.open) {
      this.details.open = true;
      this.show();
    }
  }
  render() {
    const hasCustomIcon = this.querySelector(`:scope > [slot="expand-icon"]`) !== null;
    return html`<details
            part="base"
            class=${classMap({
      "details": true,
      "details-open": this.open,
      "details-rtl": this.isRtl()
    })}>
            <summary
                id="header"
                part="header"
                class="details-header"
                role="button"
                aria-controls="content"
                aria-disabled=${this.disabled ? "true" : "false"}
                tabindex=${this.disabled ? "-1" : "0"}
                @click=${this.handleSummaryClick}
                @keydown=${this.handleSummaryKeyDown}>
                <slot name="summary" part="summary" class="details-summary">${this.summary}</slot>
                <span
                    part="summary-icon"
                    class=${classMap({
      "details-summary-icon": true,
      "custom-icon": hasCustomIcon
    })}>
                    <slot name="expand-icon">
                        <elvt-icon icon=${this.isRtl() ? mdiChevronLeft : mdiChevronRight} class="default-icon"></elvt-icon>
                    </slot>
                    <slot name="collapse-icon">
                        <elvt-icon icon=${this.isRtl() ? mdiChevronLeft : mdiChevronRight} class="default-icon"></elvt-icon>
                    </slot>
                </span>
            </summary>

            <div class="details-body" role="region" aria-labelledby="header">
                <slot id="content" part="content" class="details-content"></slot>
            </div>
        </details>`;
  }
  isRtl() {
    var _a;
    return ((_a = getComputedStyle(this)) == null ? void 0 : _a.direction) === "rtl";
  }
  show() {
    if (this.open || this.disabled) {
      return void 0;
    }
    this.open = true;
  }
  /** Hides the details */
  hide() {
    if (!this.open || this.disabled) {
      return;
    }
    this.open = false;
  }
  handleOpenChange(open) {
    if (this.details) {
      this.details.open = open;
    }
    this.handleShow();
  }
  handleShow() {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { open: this._open },
        bubbles: true,
        cancelable: true
      })
    );
  }
  handleSummaryClick(event) {
    event.preventDefault();
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
  handleSummaryKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const showKey = this.isRtl() ? "ArrowLeft" : "ArrowRight";
      if (event.key === showKey) {
        this.show();
      } else {
        this.hide();
      }
    }
    if (event.key === "ArrowUp") {
      this.hide();
    }
    if (event.key === "ArrowDown") {
      this.show();
    }
  }
};
ExpansionPanelComponent.styles = unsafeCSS(expansion_panel_styles_default);
__decorateClass([
  query(".details")
], ExpansionPanelComponent.prototype, "details", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ExpansionPanelComponent.prototype, "size", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ExpansionPanelComponent.prototype, "summary", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], ExpansionPanelComponent.prototype, "disabled", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ExpansionPanelComponent.prototype, "layer", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], ExpansionPanelComponent.prototype, "open", 1);
ExpansionPanelComponent = __decorateClass([
  webComponent({ name: "elvt-expansion-panel", dependencies: ["elvt-icon"] })
], ExpansionPanelComponent);

export {
  ExpansionPanelLayer,
  ExpansionPanelComponent
};
