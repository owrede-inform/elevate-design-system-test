import {
  InternalIcons
} from "./chunk.AQNECNIA.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/avatar/avatar.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

// src/components/avatar/avatar.styles.scss?inline
var avatar_styles_default = `:host {
  --item-size: var(--avatar-size, 1em);
  --initial-font-size: 0.5em;
  --border-radius: 2000px;
  display: inline-grid;
  grid-template: 1fr/1fr;
  line-height: var(--item-size);
}
:host .avatar {
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--avatar-fill);
  border-radius: var(--border-radius, 2000px);
  font-size: var(--item-size);
  aspect-ratio: 1/1;
  width: var(--item-size);
  height: var(--item-size);
  position: relative;
  overflow: hidden;
  line-height: var(--item-size);
}
:host .avatar .initials {
  display: inline-flex;
  justify-content: center;
  max-width: 85%;
  min-height: var(--item-size);
  flex-wrap: wrap;
  color: var(--symbol-color);
  position: absolute;
  gap: var(--item-size) 0;
  pointer-events: none;
  top: calc((var(--item-size) - var(--initial-font-size)) * 0.5);
  vertical-align: center;
}
:host .avatar .initials > * {
  font-size: var(--initial-font-size);
  display: block;
  line-height: 100%;
  height: 100%;
}
:host .avatar .image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
:host .avatar.with-dark-fill {
  --symbol-color: var(--avatar-color-on-dark, #fff);
  background: var(--avatar-fill);
}
:host .avatar.with-light-fill {
  --symbol-color: var(--avatar-color-on-light, #000);
  background: var(--avatar-fill);
}

:host([shape=square]) {
  --border-radius: var(--sl-border-radius-medium);
}`;

// src/components/avatar/avatar.component.ts
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { RgbColor, webComponent } from "@inform-elevate/elevate-cdk";
var AvatarShape = {
  Circle: "circle",
  Square: "square"
};
var AvatarComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.GuestIcon = InternalIcons.Account;
    this._name = "";
    this.shape = AvatarShape.Circle;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (this._name !== value) {
      this._name = value;
      const match = value.match(/([A-Z])\w*(\W+([A-Z]))?/i);
      this._initials = match ? `${match[1]}${match[3] || ""}` : value.substring(0, 1);
      this._fillColor = this._name && this._name !== "" ? new RgbColor(this.getColorForString(this._name)) : void 0;
    }
  }
  render() {
    var _a;
    let avatar = "";
    if (this.image && this.image !== "") {
      const styles = styleMap({
        "--avatar-image": `url(${this.image})`,
        "backgroundImage": `url(${this.image})`
      });
      avatar = html`<span class="avatar"><span class="image" style=${styles}></span></span>`;
    } else if (this._initials && this._initials !== "") {
      const classes = classMap({
        "avatar": true,
        "with-dark-fill": !!(this._fillColor && this._fillColor.isDarkColor()),
        "with-light-fill": !!(this._fillColor && this._fillColor.isLightColor())
      });
      const styles = styleMap({
        "--avatar-fill": (_a = this._fillColor) == null ? void 0 : _a.toString()
      });
      avatar = html`<span class=${classes} style=${styles}><span class="initials">${[...this._initials].map((c) => html`<span>${c}</span>`)}</span></span>`;
    }
    if (avatar && avatar !== "") {
      return avatar;
    }
    return html`<slot name="icon"><elvt-icon icon=${this.GuestIcon}></elvt-icon></slot>`;
  }
  getColorForString(value) {
    const hash = Math.round([...value].reduce((carry, character) => character.charCodeAt(0) + ((carry << 5) - carry), 0) & 16777215).toString(16);
    return "#" + hash.substring(0, 6).padStart(6, "0");
  }
};
AvatarComponent.styles = unsafeCSS(avatar_styles_default);
__decorateClass([
  property({ type: String, reflect: true })
], AvatarComponent.prototype, "shape", 2);
__decorateClass([
  property({ type: String, reflect: true })
], AvatarComponent.prototype, "image", 2);
__decorateClass([
  property({ type: String, reflect: true })
], AvatarComponent.prototype, "name", 1);
AvatarComponent = __decorateClass([
  webComponent({ name: "elvt-avatar", dependencies: ["elvt-icon"] })
], AvatarComponent);

export {
  AvatarShape,
  AvatarComponent
};
