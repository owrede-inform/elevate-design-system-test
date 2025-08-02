import {
  icon_registry_default
} from "./chunk.GOMC6CV6.js";
import {
  Icon
} from "./chunk.QR7NMAP2.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/icon/icon.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { property, state } from "lit/decorators.js";

// src/components/icon/icon.styles.scss?inline
var icon_styles_default = `:host {
  --emblem-cutout-padding: var(--emblem-padding, 1px);
  --element-size: var(--icon-size, 1em);
  --symbol-size: var(--icon-size, 1em);
  --symbol-scale: var(--icon-scale, 1);
  --symbol-padding: 0px;
  --emblem-size: calc(var(--element-size) * 0.6);
  --emblem-cutout-offset: calc((var(--emblem-size) * 0.3));
  --emblem-cutout-inner-radius: calc((var(--emblem-size) * 0.5) + var(--emblem-cutout-padding));
  --emblem-cutout-outer-radius: calc(var(--emblem-cutout-inner-radius) + 1px);
  --emblem-center-x: calc(100% - var(--emblem-cutout-inner-radius) + var(--emblem-cutout-offset));
  --emblem-center-y: calc(100% - var(--emblem-cutout-inner-radius) + var(--emblem-cutout-offset));
  --emblem-position-x: calc((var(--emblem-center-x) - var(--emblem-cutout-inner-radius) + var(--emblem-cutout-padding)));
  --emblem-position-y: calc((var(--emblem-center-y) - var(--emblem-cutout-inner-radius) + var(--emblem-cutout-padding)));
  display: inline-flex;
  align-items: center;
  min-height: var(--element-size);
  min-width: var(--element-size);
  position: relative;
  vertical-align: var(--icon-alignment, baseline);
  line-height: 1;
}
:host .icon,
:host .image {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: var(--icon-aspect-ratio, 1/1);
  border-radius: var(--icon-border-radius, 4px);
  min-height: var(--element-size);
  min-width: var(--element-size);
  box-sizing: border-box;
  position: relative;
  line-height: 1;
  padding: var(--symbol-padding, 0px);
  transform: scale(var(--icon-scale));
}
:host .icon.with-emblem,
:host .image.with-emblem {
  mask-image: radial-gradient(circle at var(--emblem-center-x) var(--emblem-center-y), transparent 0%, transparent var(--emblem-cutout-inner-radius), silver var(--emblem-cutout-outer-radius), silver 100%);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-origin: border-box;
  mask-clip: border-box;
}
:host .icon.with-dark-fill,
:host .image.with-dark-fill {
  --symbol-color: var(--icon-color-on-dark, #fff);
  background: var(--icon-fill);
}
:host .icon.with-light-fill,
:host .image.with-light-fill {
  --symbol-color: var(--icon-color-on-light, #000);
  background: var(--icon-fill);
}
:host .icon:not(.selected) .image,
:host .image:not(.selected) .image {
  --shadow-color: color-mix(in srgb, var(--icon-fill, var(--icon-color, transparent)), transparent 50%);
  box-shadow: inset 0 0 calc(var(--element-size, 1em) * 0.3) 0 var(--shadow-color);
}
:host .image {
  overflow: visible;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
:host .emblem {
  position: absolute;
  left: var(--emblem-position-x);
  top: var(--emblem-position-y);
  height: var(--emblem-size);
  width: var(--emblem-size);
  aspect-ratio: 1/1;
  display: inline-flex;
  align-items: center;
}
:host .emblem .mask {
  background-color: var(--icon-fill, var(--icon-color, currentColor));
}
:host .mask {
  mask: var(--symbol) center/contain no-repeat;
  background-color: var(--symbol-color, var(--icon-color, currentColor));
  align-self: stretch;
  flex-grow: 1;
  mask-origin: border-box;
  mask-clip: border-box;
}
:host .selected {
  --symbol-size: calc(var(--element-size) - 2px);
  --symbol-padding: -2px;
  border: 2px solid var(--symbol-color, var(--icon-color, currentColor));
}
:host .selected .mask {
  mask: var(--symbol) center/contain no-repeat, var(--mask-shape, linear-gradient(#000 0%, #000));
  mask-composite: exclude;
}

:host([fill]) {
  --symbol-size: calc(var(--element-size) - 2px);
  --symbol-padding: 2px;
}

:host([shape=circle]) {
  --icon-shape-radius: calc(var(--element-size) * 0.5);
  --icon-border-radius: 4000px;
  --mask-shape: radial-gradient(#000 0%, #000 var(--icon-shape-radius), transparent var(--icon-shape-radius));
}`;

// src/components/icon/icon.component.ts
import { RgbColor, webComponent } from "@inform-elevate/elevate-cdk";
var IconComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.aspectRatio = "1 / 1";
    this.selected = false;
    this._emblem = "";
    this._icon = "";
  }
  get emblem() {
    return this._emblem;
  }
  set emblem(value) {
    if (this._emblem != value) {
      this._emblem = value;
      this._emblemValue = void 0;
      this.parseIconString(value).then((icon) => {
        if (icon instanceof Icon || icon && icon !== "") {
          this._emblemValue = icon;
        }
      });
    }
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    if (this._icon != value) {
      this._icon = value;
      this._iconValue = void 0;
      this.parseIconString(value).then((icon) => {
        if (icon instanceof Icon || icon && icon !== "") {
          this._iconValue = icon;
        }
      });
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._iconValue instanceof Icon) {
      this._iconValue.dispose();
    }
  }
  getFillColor() {
    if (this.fill && this.fill.startsWith("#")) {
      return new RgbColor(this.fill);
    }
    return void 0;
  }
  render() {
    const color = this.getFillColor();
    this.style.setProperty("--icon-fill", color ? `${color}` : null);
    this.style.setProperty("--icon-aspect-ratio", this.aspectRatio ? this.aspectRatio : null);
    let emblem = "";
    if (this._emblemValue) {
      emblem = html`<span class="emblem" part="emblem"> ${this.createElement("emblem", this._emblemValue)} </span>`;
    }
    if (this.image && this.image !== "") {
      const classes = classMap({
        "icon": true,
        "with-emblem": !!this._emblemValue,
        "selected": this.selected
      });
      return html`<span class=${classes} part="icon"> <span class="image" part="image" style=${styleMap({ backgroundImage: `url(${this.image})` })}></span> </span>
                ${emblem}`;
    } else if (this._iconValue) {
      const classes = classMap({
        "icon": true,
        "with-emblem": !!this._emblemValue,
        "with-dark-fill": !!(color && color.isDarkColor()),
        "with-light-fill": !!(color && color.isLightColor()),
        "selected": this.selected
      });
      return html`<span class=${classes} part="icon"> ${this.createElement("icon", this._iconValue)} </span> ${emblem}`;
    }
    return "";
  }
  createElement(part, icon) {
    const url = icon instanceof Icon ? icon.url : icon;
    return html`<span class="mask" part=${`${part}-mask`} style=${styleMap({ "--symbol": `url(${url})` })}></span>`;
  }
  async fetchIconFromUrl(url) {
    if (url.startsWith("data:image/svg+xml")) {
      return new Icon(url);
    }
    const response = await fetch(url);
    const parseSvgResponse = (responseText) => {
      const svgElement = new DOMParser().parseFromString(responseText, "image/svg+xml").documentElement;
      return new Icon({
        svg: responseText,
        width: +(svgElement.getAttribute("width") || "24"),
        height: +(svgElement.getAttribute("height") || "24")
      });
    };
    if (response.ok) {
      const contentType = response.headers.get("content-type");
      switch (contentType) {
        case "text/json":
        case "application/json":
          return new Icon(await response.json());
        case "image/svg+xml":
          return parseSvgResponse(await response.text());
      }
    }
    throw Error(`Failed to fetch icon from: ${url}`);
  }
  async parseIconString(value) {
    if (value.startsWith("blob:") || value.startsWith("http")) {
      return this.fetchIconFromUrl(value);
    } else if (value.startsWith("path:")) {
      return new Icon(value);
    } else if (value.startsWith("data:")) {
      return value;
    } else if (value.startsWith("url:")) {
      return value.substring(4);
    } else if (value.startsWith("mask:")) {
      return value.substring(5);
    } else {
      const [library, name] = value.match(/^\w+:.+/) ? value.split(":", 2).map((s) => s.trim()) : [void 0, value];
      const detail = icon_registry_default.getIcon(name, library || icon_registry_default.DefaultLibrary);
      if (detail) {
        if (typeof detail === "string") {
          if (detail.startsWith("blob:") || detail.startsWith("http")) {
            return this.fetchIconFromUrl(detail);
          } else if (detail.startsWith("data:")) {
            return detail;
          } else if (detail.startsWith("url:")) {
            return detail.substring(4);
          } else if (detail.startsWith("mask:")) {
            return detail.substring(5);
          }
        }
        return new Icon(detail);
      }
      return new Icon(value);
    }
  }
};
IconComponent.styles = unsafeCSS(icon_styles_default);
__decorateClass([
  property({ type: String, reflect: true, attribute: "aspect-ratio" })
], IconComponent.prototype, "aspectRatio", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IconComponent.prototype, "fill", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], IconComponent.prototype, "selected", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IconComponent.prototype, "image", 2);
__decorateClass([
  state()
], IconComponent.prototype, "_emblemValue", 2);
__decorateClass([
  state()
], IconComponent.prototype, "_iconValue", 2);
__decorateClass([
  property({ type: String, reflect: true })
], IconComponent.prototype, "emblem", 1);
__decorateClass([
  property({ type: String, reflect: true })
], IconComponent.prototype, "icon", 1);
IconComponent = __decorateClass([
  webComponent({ name: "elvt-icon" })
], IconComponent);

export {
  IconComponent
};
