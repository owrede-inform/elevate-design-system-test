import {
  elvtCancelThin
} from "./chunk.REDNIUQG.js";
import {
  __decorateClass,
  __spreadProps,
  __spreadValues
} from "./chunk.S3NI7NKU.js";

// src/components/tabs/tab/tab.component.ts
import { property } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/tabs/tab/tab.styles.scss?inline
var tab_styles_default = `:host {
  display: inline-flex;
  --icon-size: 1.5em;
}

.tab {
  display: inline-flex;
  align-items: center;
  font-family: var(--elvt-type-alias-default-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-m-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-m-font-size, 1rem);
  line-height: 1.5;
  height: var(--elvt-component-tab-height, 3rem);
  gap: var(--elvt-component-tab-gap-width, 1rem);
  white-space: nowrap;
}
.tab .tab-content {
  padding: var(--elvt-component-tab-padding-top, 0.25rem) var(--elvt-component-tab-padding-column, 1rem) 10px var(--elvt-component-tab-padding-column, 1rem);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  background: none;
  border: none;
  border-radius: var(--elvt-component-tab-radius, 0.25rem);
  color: var(--elvt-component-tab-text-color-default, rgb(47, 50, 64));
  cursor: pointer;
}
.tab .tab-content ::slotted([slot=prefix]) {
  margin-right: 8px;
}
.tab .tab-content ::slotted([slot=suffix]) {
  margin-left: 16px;
}
.tab .tab-content:focus {
  outline: none;
}
.tab .tab-content:focus-visible {
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: var(--elvt-alias-action-focus-border-width-m, 0.125rem);
}
.tab.tab--disabled {
  pointer-events: none;
  cursor: default;
}
.tab.tab--disabled .tab-content {
  color: var(--elvt-component-tab-text-color-disabled, rgb(163, 170, 180));
}
.tab.tab--disabled .close-icon {
  color: var(--elvt-component-tab-closeIcon-color-disabled, rgb(163, 170, 180));
}
.tab:hover .tab-content {
  color: var(--elvt-component-tab-text-color-hover, rgb(35, 66, 117));
}
.tab:active .tab-content {
  color: var(--elvt-component-tab-text-color-active, rgb(0, 114, 255));
}
.tab.tab--selected .tab-content {
  color: var(--elvt-component-tab-text-color-selected, rgb(35, 66, 117));
}
.tab .close-icon-button {
  font-family: var(--elvt-type-alias-default-label-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-label-m-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-label-m-font-size, 1rem);
  line-height: 1.5;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  height: 1.5em;
  border-radius: var(--elvt-component-tab-radius, 0.25rem);
  color: var(--elvt-component-tab-closeIcon-color-default, rgb(47, 50, 64));
}
.tab .close-icon-button:hover {
  color: var(--elvt-component-tab-closeIcon-color-hover, rgb(35, 66, 117));
}
.tab .close-icon-button:active {
  color: var(--elvt-component-tab-closeIcon-color-active, rgb(0, 114, 255));
}
.tab .close-icon-button:focus {
  outline: none;
}
.tab .close-icon-button:focus-visible {
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: var(--elvt-alias-action-focus-border-width-m, 0.125rem);
}`;

// src/components/tabs/tab/tab.component.ts
import { DependencyContainer, Subject, Subscriptions, webComponent } from "@inform-elevate/elevate-cdk";
var TabIntl = class {
  constructor() {
    this.changes = new Subject();
  }
};
var DefaultTabIntl = class extends TabIntl {
  constructor() {
    super(...arguments);
    this.closeLabel = "Close tab";
  }
};
var TabSelectionChangeEvent = class extends CustomEvent {
  constructor(type, detail, options) {
    super(type, __spreadProps(__spreadValues({}, options), { detail }));
  }
};
var TabComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this._disabled = false;
    this._panel = "";
    this.closable = false;
    this._messages = new DefaultTabIntl();
    this._subscriptions = new Subscriptions();
  }
  set panel(value) {
    if (this._panel !== value) {
      this._panel = value != null ? value : "";
      if (this.selected) {
        this.dispatchEvent(new TabSelectionChangeEvent("selection-change", { panel: this.panel, selected: true }, { bubbles: true, composed: true }));
      }
    }
  }
  get panel() {
    return this._panel;
  }
  set disabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this.setAttribute("aria-disabled", String(this.disabled));
      if (this.selected && this._selected !== void 0) {
        this.selected = false;
      }
    }
  }
  get disabled() {
    return this._disabled;
  }
  set selected(value) {
    if (this._selected !== value) {
      this.dispatchEvent(new TabSelectionChangeEvent("selection-change", { panel: this.panel, selected: value }, { bubbles: true, composed: true }));
      this._selected = value;
      this.setAttribute("aria-selected", String(this.selected));
    }
  }
  get selected() {
    var _a;
    return (_a = this._selected) != null ? _a : false;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this._messages = ((_a = DependencyContainer.findOnAncestorOf(this)) == null ? void 0 : _a.provide(TabIntl)) || this._messages;
    this._subscriptions.add(this._messages.changes.subscribe(() => this.requestUpdate()));
    this.setAttribute("role", "tab");
    this.setAttribute("aria-selected", String(this.selected));
    this.setAttribute("aria-disabled", String(this.disabled));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._subscriptions.unsubscribe();
  }
  handleSelectionClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.selected = true;
  }
  handleCloseClick(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.closable && !this.disabled) {
      this.dispatchEvent(new CustomEvent("request-close", { bubbles: true }));
    }
  }
  render() {
    var _a, _b, _c;
    const tabIndex = this.disabled && !this.selected ? -1 : 0;
    return html`
            <div class="tab${this.disabled ? " tab--disabled" : ""}${this.selected && !this.disabled ? " tab--selected" : ""}">
                <button type="button" class="tab-content" tabindex=${tabIndex} @click=${this.handleSelectionClick} part="content">
                    <slot name="prefix"></slot>
                    <slot></slot>
                    <slot name="suffix"></slot>
                </button>
                ${this.closable && !this.disabled ? html`
                          <elvt-tooltip content=${(_a = this.closeLabel) != null ? _a : this._messages.closeLabel}>
                                <button class="close-icon-button" tabindex=${tabIndex} @click=${this.handleCloseClick}>
                                    <slot name="close-icon">
                                        <elvt-icon icon=${elvtCancelThin}></elvt-icon>
                                    </slot>
                                    <elvt-visually-hidden>${(_b = this.closeLabel) != null ? _b : this._messages.closeLabel}</elvt-visually-hidden>
                                </button>
                            </elv-tooltip>
                      ` : ""}
                ${this.closable && this.disabled ? html`
                          <div class="close-icon">
                              <slot name="close-icon">
                                  <elvt-icon icon=${elvtCancelThin}></elvt-icon>
                              </slot>
                              <elvt-visually-hidden>${(_c = this.closeLabel) != null ? _c : this._messages.closeLabel}</elvt-visually-hidden>
                          </div>
                      ` : ""}
            </div>
        `;
  }
};
TabComponent.styles = unsafeCSS(tab_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], TabComponent.prototype, "panel", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TabComponent.prototype, "disabled", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TabComponent.prototype, "closable", 2);
__decorateClass([
  property({ type: String, reflect: true, attribute: "close-label" })
], TabComponent.prototype, "closeLabel", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TabComponent.prototype, "selected", 1);
TabComponent = __decorateClass([
  webComponent({ name: "elvt-tab", dependencies: ["elvt-tooltip", "elvt-icon", "elvt-visually-hidden"] })
], TabComponent);

export {
  TabIntl,
  TabSelectionChangeEvent,
  TabComponent
};
