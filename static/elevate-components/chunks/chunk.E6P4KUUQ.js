import {
  __decorateClass,
  __spreadProps,
  __spreadValues
} from "./chunk.S3NI7NKU.js";

// src/components/tabs/tab-group/tab-group.component.ts
import { html, LitElement, unsafeCSS } from "lit";

// src/components/tabs/tab-group/tab-group.styles.scss?inline
var tab_group_styles_default = `.tab-group--nav {
  display: inline-flex;
  position: relative;
  padding: var(--elvt-component-tabGroup-padding-row, 0rem) var(--elvt-component-tabGroup-padding-column, 0rem);
  gap: var(--elvt-component-tabGroup-gap, 0rem);
  border-bottom: var(--elvt-component-tabGroup-track-width, 0.125rem) solid var(--elvt-component-tabGroup-track-color, rgb(213, 217, 225));
}
.tab-group--nav .tab-group-indicator {
  border-bottom: var(--elvt-component-tabGroup-marker-color, rgb(0, 114, 255)) var(--elvt-component-tabGroup-marker-width, 0.125rem) solid;
  position: absolute;
  bottom: calc(-1 * var(--elvt-component-tabGroup-track-width, 0.125rem));
  transition: 500ms translate ease, 500ms width ease;
}`;

// src/components/tabs/tab-group/tab-group.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
import { property, query } from "lit/decorators.js";
var ActiveTabChangeEvent = class extends CustomEvent {
  constructor(type, detail, options) {
    super(type, __spreadProps(__spreadValues({}, options), { detail }));
  }
};
var TabGroupComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this._activeTab = "";
  }
  set activeTab(value) {
    const allTabs = this.getAllTabs();
    if (!allTabs || allTabs.length === 0) {
      this._activeTab = value;
      return;
    }
    const actualValue = !value || !allTabs.find((tab) => tab.panel === value && !tab.disabled) ? this.getDefaultActiveTab(allTabs) : value;
    if (this._activeTab !== actualValue) {
      this._activeTab = actualValue;
      this.dispatchEvent(new ActiveTabChangeEvent("change", { activeTab: this._activeTab }, { bubbles: true, composed: true }));
      this.syncTabsAndPanels();
    }
  }
  get activeTab() {
    return this._activeTab;
  }
  getAllTabs() {
    var _a, _b;
    return (_b = (_a = this.navSlot) == null ? void 0 : _a.assignedElements({ flatten: true }).filter((item) => item.tagName.toLowerCase() === "elvt-tab")) != null ? _b : [];
  }
  getAllPanels() {
    var _a, _b;
    return (_b = (_a = this.panelsSlot) == null ? void 0 : _a.assignedElements({ flatten: true }).filter((item) => item.tagName.toLowerCase() === "elvt-tab-panel")) != null ? _b : [];
  }
  connectedCallback() {
    super.connectedCallback();
    this.mutationObserver = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.target === this && mutation.type === "attributes" && mutation.attributeName === "dir")) {
        this.positionActiveTabIndicator();
      }
      const needToSync = mutations.filter((mutation) => {
        if (mutation.target === this) {
          return false;
        }
        if (mutation.target.closest("elvt-tab-group") !== this) {
          return false;
        }
        if (mutation.target.tagName.toLowerCase() === "elvt-tab") {
          return mutation.type === "attributes" && mutation.attributeName === "panel" || mutation.type === "attributes" && mutation.attributeName === "selected" || mutation.type === "attributes" && mutation.attributeName === "disabled" && !this.activeTab;
        }
        if (mutation.target.tagName.toLowerCase() === "elvt-tab-panel") {
          return mutation.type === "attributes" && mutation.attributeName === "name";
        }
        return false;
      });
      const selectedChanged = needToSync.find((mutation) => {
        return mutation.type === "attributes" && mutation.attributeName === "selected" && mutation.target.selected && !mutation.target.disabled;
      });
      if (selectedChanged) {
        this.activeTab = selectedChanged.target.panel;
      } else if (needToSync.length > 0) {
        this.handleSlotChange();
      }
    });
    this.mutationObserver.observe(this, {
      attributes: true,
      attributeFilter: ["disabled", "name", "panel", "dir", "selected"],
      childList: true,
      subtree: true
    });
    this.syncTabsAndPanels();
  }
  disconnectedCallback() {
    this.mutationObserver.disconnect();
    super.disconnectedCallback();
  }
  syncTabsAndPanels() {
    this.getAllTabs().forEach((tab) => {
      tab.selected = tab.panel === this.activeTab;
    });
    this.getAllPanels().forEach((panel) => {
      panel.selected = panel.name === this.activeTab;
    });
    this.positionActiveTabIndicator();
  }
  handleSlotChange() {
    var _a;
    const allTabs = this.getAllTabs().filter((item) => !item.disabled);
    if (allTabs.length === 0) {
      this.activeTab = "";
    } else {
      if (!this.activeTab || !allTabs.find((tab) => tab.panel === this.activeTab)) {
        const currentActiveTab = (_a = allTabs.find((tab) => tab.selected)) != null ? _a : "";
        if (currentActiveTab) {
          this.activeTab = currentActiveTab.panel;
        } else {
          this.activeTab = this.getDefaultActiveTab(allTabs);
        }
      } else {
        this.syncTabsAndPanels();
      }
    }
  }
  getDefaultActiveTab(tabs) {
    const allTabs = (tabs != null ? tabs : this.getAllTabs()).filter((tab) => !tab.disabled);
    if (allTabs.length === 0) {
      return "";
    }
    return allTabs[0].panel;
  }
  positionActiveTabIndicator() {
    var _a;
    const activeTab = this.getAllTabs().find((tab) => !!tab.panel && tab.panel === this.activeTab);
    const indicator = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".tab-group-indicator");
    const isRtl = getComputedStyle(this).direction === "rtl";
    if (activeTab && indicator) {
      const width = activeTab.clientWidth;
      const allTabs = this.getAllTabs();
      const precedingTabs = allTabs.slice(0, allTabs.indexOf(activeTab));
      const offset = precedingTabs.reduce(
        (previous, current) => ({
          left: previous.left + current.clientWidth
        }),
        { left: 0 }
      );
      indicator.style.width = `${width}px`;
      indicator.style.translate = isRtl ? `${-1 * offset.left}px` : `${offset.left}px`;
    } else if (indicator) {
      indicator.style.width = "0";
      indicator.style.translate = "0";
    }
  }
  render() {
    return html` <div class="tab-group">
            <div class="tab-group--nav" part="nav" role="tablist">
                <div part="active-tab-indicator" class="tab-group-indicator"></div>
                <elvt-resize-observer @resize=${this.positionActiveTabIndicator}>
                    <slot name="nav" @slotchange=${this.handleSlotChange}></slot>
                </elvt-resize-observer>
            </div>
            <slot class="tab-group--panels" @slotchange=${this.handleSlotChange}></slot>
        </div>`;
  }
};
TabGroupComponent.styles = unsafeCSS(tab_group_styles_default);
__decorateClass([
  query(".tab-group--panels")
], TabGroupComponent.prototype, "panelsSlot", 2);
__decorateClass([
  query('slot[name="nav"]')
], TabGroupComponent.prototype, "navSlot", 2);
__decorateClass([
  property({ type: String, reflect: true, attribute: "active-tab" })
], TabGroupComponent.prototype, "activeTab", 1);
TabGroupComponent = __decorateClass([
  webComponent({ name: "elvt-tab-group", dependencies: ["elvt-tab", "elvt-tab-panel", "elvt-resize-observer"] })
], TabGroupComponent);

export {
  ActiveTabChangeEvent,
  TabGroupComponent
};
