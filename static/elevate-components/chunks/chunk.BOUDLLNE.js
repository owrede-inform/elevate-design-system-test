import {
  Tone,
  getShoelaceVariantForTone
} from "./chunk.GFUPY45O.js";
import {
  mdiAlertOctagonOutline,
  mdiAlertOutline,
  mdiCheckCircleOutline,
  mdiCogOutline,
  mdiInformationOutline
} from "./chunk.HMLPYKN2.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/notification/notification.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property, query } from "lit/decorators.js";

// src/components/notification/notification.styles.scss?inline
var notification_styles_default = ``;

// src/components/notification/notification.component.ts
import { ifDefined } from "lit/directives/if-defined.js";
import "@shoelace-style/shoelace";
import { webComponent } from "@inform-elevate/elevate-cdk";
var NotificationComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.closable = false;
    this.tone = Tone.Primary;
    this._duration = Infinity;
    this._open = false;
  }
  get duration() {
    return this._duration;
  }
  set duration(value) {
    this._duration = value;
    if (this._wrappedElement) {
      this._wrappedElement.duration = value;
    }
  }
  get open() {
    var _a;
    return this._wrappedElement ? (_a = this._wrappedElement) == null ? void 0 : _a.open : this._open;
  }
  set open(value) {
    this._open = value;
    if (this._wrappedElement) {
      this._wrappedElement.open = value;
    }
  }
  get notificationDefaultIcon() {
    const map = {
      [Tone.Success]: mdiCheckCircleOutline,
      [Tone.Warning]: mdiAlertOutline,
      [Tone.Danger]: mdiAlertOctagonOutline,
      [Tone.Neutral]: mdiCogOutline,
      [Tone.Primary]: mdiInformationOutline
    };
    return map[this.tone] || map[Tone.Primary];
  }
  get notificationVariant() {
    if (this.tone === Tone.Neutral) {
      return "neutral";
    }
    return getShoelaceVariantForTone(this.tone);
  }
  /** Hides the notification. */
  hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
  }
  render() {
    return html`<sl-alert
            variant=${this.notificationVariant}
            ?open=${this.open}
            ?closable=${this.closable}
            countdown=${ifDefined(this._duration && this._duration !== Infinity ? "rtl" : null)}
            @sl-show=${this.handleShowAndHide}
            @sl-hide=${this.handleShowAndHide}>
            <slot name="icon" slot="icon">
                <elvt-icon icon=${this.notificationDefaultIcon} class="default-icon"></elvt-icon>
            </slot>
            <div part="message">
                <slot></slot>
            </div>
        </sl-alert>`;
  }
  /** Shows the notification. */
  show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    setTimeout(() => {
      if (this._wrappedElement) {
        this._wrappedElement.duration = this._duration;
      }
    }, 10);
  }
  handleShowAndHide() {
    var _a, _b;
    this._open = ((_a = this._wrappedElement) == null ? void 0 : _a.open) || false;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { open: ((_b = this._wrappedElement) == null ? void 0 : _b.open) || false },
        bubbles: true,
        cancelable: true
      })
    );
  }
};
NotificationComponent.styles = unsafeCSS(notification_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true })
], NotificationComponent.prototype, "closable", 2);
__decorateClass([
  property({ type: String, reflect: true })
], NotificationComponent.prototype, "tone", 2);
__decorateClass([
  query("sl-alert")
], NotificationComponent.prototype, "_wrappedElement", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], NotificationComponent.prototype, "duration", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], NotificationComponent.prototype, "open", 1);
NotificationComponent = __decorateClass([
  webComponent({ name: "elvt-notification", dependencies: ["sl-alert"] })
], NotificationComponent);

export {
  NotificationComponent
};
