import {
  mdiOpenInNew
} from "./chunk.HMLPYKN2.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/link/link.component.ts
import { property } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/link/link.styles.scss?inline
var link_styles_default = `:host a {
  display: inline-flex;
  text-decoration: none;
  color: var(--link-color, var(--elvt-component-link-linkText-color-default, rgb(11, 92, 223)));
  align-items: baseline;
  align-content: center;
}
:host a:visited {
  --link-color: var(--elvt-component-link-linkText-color-visited, rgb(35, 66, 117));
}
:host a:link {
  --link-color: var(--elvt-component-link-linkText-color-default, rgb(11, 92, 223));
}
:host a:hover {
  --link-color: var(--elvt-component-link-linkText-color-hover, rgb(35, 66, 117));
}
:host a:active {
  --link-color: var(--elvt-component-link-linkText-color-active, rgb(0, 114, 255));
}
:host a slot {
  display: inline-block;
  text-decoration: underline;
}
:host a .icon {
  display: inline-flex;
  align-items: center;
  align-self: center;
}`;

// src/components/link/link.component.ts
import { webComponent } from "@inform-elevate/elevate-cdk";
var LinkUsage = {
  Internal: "internal",
  External: "external"
};
var usageIcons = {
  external: mdiOpenInNew
};
var LinkComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.usage = LinkUsage.Internal;
  }
  usageIcon() {
    const icon = usageIcons[this.usage];
    if (!icon) return html``;
    return html`<elvt-icon icon=${icon}></elvt-icon>`;
  }
  usageClass() {
    const usage = Object.values(LinkUsage).includes(this.usage) ? this.usage : LinkUsage.Internal;
    return `elvt-link-${usage}`;
  }
  render() {
    const isExternalLink = this.usage === LinkUsage.External;
    const usageIcon = this.usageIcon();
    return html`
            <a href=${this.href} class=${this.usageClass()} target=${this.target} rel=${isExternalLink ? "noopener noreferrer" : void 0}>
                ${usageIcon ? html`<span class="icon">${this.usageIcon()}</span>` : ""}
                <slot></slot>
            </a>
        `;
  }
};
LinkComponent.styles = unsafeCSS(link_styles_default);
__decorateClass([
  property({ type: LinkUsage, reflect: true })
], LinkComponent.prototype, "usage", 2);
__decorateClass([
  property({ type: String, reflect: true })
], LinkComponent.prototype, "href", 2);
__decorateClass([
  property({ type: String, reflect: true })
], LinkComponent.prototype, "target", 2);
LinkComponent = __decorateClass([
  webComponent({ name: "elvt-link" })
], LinkComponent);

export {
  LinkUsage,
  LinkComponent
};
