import {
  DialogManager,
  ELVT_DIALOG
} from "./chunk.3FRJHBCV.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/application/application.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

// src/components/application/application.styles.scss?inline
var application_styles_default = `:host {
  font-family: var(--elvt-type-alias-default-content-m-font-family, "Inter");
  font-weight: var(--elvt-type-alias-default-content-m-font-weight, "regular");
  font-size: var(--elvt-type-alias-default-content-m-font-size, 1rem);
  line-height: 1.5;
  background-color: var(--elvt-component-application-fill, rgb(243, 244, 247));
  color: var(--elvt-component-application-text, rgb(61, 66, 83));
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 100fr auto;
  grid-template-columns: auto 100fr auto;
  grid-template-areas: "header header header" "left main right" "footer footer footer";
}

slot[name=header] {
  display: grid;
  grid-template: 1fr/auto;
  grid-area: header;
  position: relative;
}

slot[name=footer] {
  display: grid;
  grid-template: 1fr/auto;
  grid-area: footer;
  position: relative;
}

slot[name=side-start] {
  grid-area: left;
  display: grid;
  grid-template: auto/1fr;
  flex-direction: column;
  position: relative;
}
slot[name=side-start] :dir(rtl) {
  grid-area: right;
}

slot[name=side-end] {
  grid-area: right;
  display: grid;
  grid-template: auto/1fr;
  flex-direction: column;
  position: relative;
}
slot[name=side-end] :dir(rtl) {
  grid-area: left;
}

slot:not([name]) {
  grid-area: main;
  display: grid;
  grid-template: auto/1fr;
}`;

// src/components/application/application.component.ts
import { DependencyContainer, webComponent } from "@inform-elevate/elevate-cdk";
var _a, _b;
var ApplicationComponent = class extends (_b = LitElement, _a = DependencyContainer.Symbol, _b) {
  constructor() {
    super(...arguments);
    this[_a] = new DependencyContainer(this, [
      {
        provides: ELVT_DIALOG,
        useClass: DialogManager
      }
    ]);
    this.root = false;
  }
  set providers(providers) {
    this.providers.assign(providers);
  }
  get providers() {
    return this[DependencyContainer.Symbol];
  }
  get theme() {
    const ancestor = this.getAncestor();
    if (ancestor) {
      return ancestor.theme;
    } else {
      return this._theme;
    }
  }
  set theme(value) {
    if (value && !/[a-z][a-z0-9]*/i.test(value)) {
      throw new Error("Invalid theme identifier.");
    }
    this._theme = value;
    this.applyTheme(value);
  }
  /**
   * Fetches the nearest ApplicationComponent instance on the ancestor axis of its descendant.
   */
  static getAsAncestor(descendant) {
    let current = descendant.parentElement;
    while (current && !(current instanceof ApplicationComponent)) {
      current = current.parentElement;
    }
    return current;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this._theme) {
      this.applyTheme(this._theme);
    }
  }
  render() {
    return html` <slot name="header"></slot>
            <slot name="side-start"></slot>
            <slot></slot>
            <slot name="side-end"></slot>
            <slot name="footer"></slot>`;
  }
  applyTheme(theme) {
    if (theme) {
      const ancestor = this.getAncestor();
      if (ancestor && !this.root) {
        ancestor.theme = theme;
      } else {
        const target = this.root ? this : this.ownerDocument.body;
        if (target) {
          const shoelaceTheme = theme.split("-", 2)[0] || "light";
          const themeClasses = [`elvt-theme-${theme}`, `sl-theme-${shoelaceTheme}`];
          const prefixes = ["elvt-theme-", "sl-theme-"];
          [...target.classList].forEach((name) => {
            if (themeClasses.indexOf(name) < 0 && prefixes.reduce((carry, prefix) => carry || name.startsWith(prefix), false)) {
              target.classList.remove(name);
            }
          });
          themeClasses.forEach((themeClass) => {
            if (!target.classList.contains(themeClass)) {
              target.classList.add(themeClass);
            }
          });
        }
      }
    }
  }
  getAncestor() {
    return this.root ? void 0 : ApplicationComponent.getAsAncestor(this);
  }
};
ApplicationComponent.styles = unsafeCSS(application_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true })
], ApplicationComponent.prototype, "root", 2);
__decorateClass([
  property({ type: String, reflect: true })
], ApplicationComponent.prototype, "theme", 1);
ApplicationComponent = __decorateClass([
  webComponent({ name: "elvt-application" })
], ApplicationComponent);

export {
  ApplicationComponent
};
