import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiPageFirst,
  mdiPageLast
} from "./chunk.HMLPYKN2.js";
import {
  Size
} from "./chunk.G3PS7UZD.js";
import {
  __decorateClass,
  __spreadProps,
  __spreadValues
} from "./chunk.S3NI7NKU.js";

// src/components/paginator/paginator.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

// src/components/paginator/paginator.styles.scss?inline
var paginator_styles_default = `:host {
  --gap: var(--elvt-measures-distance-s, 1rem);
  display: inline-flex;
  align-items: center;
  gap: var(--gap);
}

.range-actions {
  display: inline-flex;
  align-items: center;
  gap: var(--gap);
}
:host([size=small]) .range-actions .range-actions-label {
  font-size: var(--sl-input-label-font-size-small);
}
:host([size=medium]) .range-actions .range-actions-label {
  font-size: var(--sl-input-label-font-size-medium);
}
:host([size=large]) .range-actions .range-actions-label {
  font-size: var(--sl-input-label-font-size-large);
}

.page-size {
  display: inline-flex;
  align-items: center;
}
.page-size .page-size-control {
  display: inline-flex;
  align-items: center;
  gap: var(--gap);
}
.page-size elvt-select.page-size-value {
  --form-control-width: calc(var(--page-size-character-length, 3em) + (var(--sl-input-spacing-medium) * 2) + 0.8em);
}
.page-size elvt-input.page-size-value {
  --form-control-width: calc(var(--page-size-character-length, 3em) + (var(--sl-input-spacing-medium) * 2));
}
.page-size .page-size-value {
  --form-control-text-align: center;
}
.page-size .page-size-value::part(input) {
  width: calc(var(--page-size-character-length, 3em) + var(--sl-input-spacing-medium) * 2);
  text-align: center;
}
.page-size .page-size-value::part(combobox) {
  width: calc(var(--page-size-character-length, 3em) + var(--sl-input-spacing-medium) * 2 + 1em);
  text-align: center;
}`;

// src/components/paginator/paginator.component.ts
import { DependencyContainer, Subject, Subscriptions, webComponent } from "@inform-elevate/elevate-cdk";
var PaginatorIntl = class {
  constructor() {
    this.changes = new Subject();
  }
};
var DefaultPaginatorIntl = class extends PaginatorIntl {
  constructor() {
    super(...arguments);
    this.firstPageLabel = "First Page";
    this.lastPageLabel = "Last Page";
    this.nextPageLabel = "Next Page";
    this.pageSizeLabel = "Items per Page: ";
    this.previousPageLabel = "Previous Page";
  }
  getRangeLabel(pageIndex, pageSize, length) {
    const start = Math.max(pageIndex * pageSize, 0);
    const end = Math.min(start + pageSize, length);
    return `${start} - ${end} of ${length}`;
  }
};
var PageChangeEvent = class extends CustomEvent {
  constructor(type, detail, options) {
    super(type, __spreadProps(__spreadValues({}, options), { detail }));
  }
};
var PaginatorComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this._subscriptions = new Subscriptions();
    this.disabled = false;
    this.hidePageSize = false;
    this.hideRangeStatus = false;
    this.pageSizeOptions = [10, 50, 100];
    this.size = Size.Medium;
    this.showFirstLastButtons = false;
    this._messages = new DefaultPaginatorIntl();
    this.icons = {
      firstPage: mdiPageFirst,
      lastPage: mdiPageLast,
      nextPage: mdiChevronRight,
      previousPage: mdiChevronLeft
    };
    this._length = 0;
    this._pageIndex = 0;
    this._pageSize = 50;
  }
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = value;
  }
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = value;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this._messages = ((_a = DependencyContainer.findOnAncestorOf(this)) == null ? void 0 : _a.provide(PaginatorIntl)) || this._messages;
    this._subscriptions.add(this._messages.changes.subscribe(() => this.requestUpdate()));
  }
  disconnectedCallback() {
    this._subscriptions.unsubscribe();
    super.disconnectedCallback();
  }
  render() {
    const pageSizeOptions = this.getPageSizeOptions();
    return html` ${!this.hidePageSize ? html` <div
                      class="page-size"
                      style="--page-size-character-length: ${pageSizeOptions.reduce((carry, option) => {
      const characterLength = `${option}`.length;
      return characterLength > carry ? characterLength : carry;
    }, 0)}em">
                      <label class="page-size-control">
                          <span class="page-size-label">${this._messages.pageSizeLabel}</span>
                          ${pageSizeOptions.length > 1 ? html` <elvt-select
                                    class="page-size-value"
                                    size=${this.size}
                                    .options="${pageSizeOptions}"
                                    value=${this._pageSize}
                                    @input=${this.onInputPageSize}></elvt-select>` : html` <elvt-input disabled class="page-size-value" size=${this.size} value=${this._pageSize}></elvt-input>`}
                      </label>
                  </div>` : ""}
            <div class="range-actions">
                ${!this.hideRangeStatus ? html` <div class="range-actions-label">${this._messages.getRangeLabel(this._pageIndex, this._pageSize, this._length)}</div>` : ""}
                <elvt-button-group>
                    ${this.showFirstLastButtons ? html` <elvt-tooltip content=${this._messages.firstPageLabel}>
                              <elvt-button size=${this.size} @click=${this.gotoFirstPage} ?disabled=${this._pageIndex === 0}>
                                  <elvt-icon icon=${this.icons.firstPage}></elvt-icon>
                                  <elvt-visually-hidden>${this._messages.firstPageLabel}</elvt-visually-hidden>
                              </elvt-button>
                          </elvt-tooltip>` : ""}
                    <elvt-tooltip content=${this._messages.previousPageLabel}>
                        <elvt-button size=${this.size} @click=${this.gotoPreviousPage} ?disabled=${this._pageIndex === 0}>
                            <elvt-icon icon=${this.icons.previousPage}></elvt-icon>
                            <elvt-visually-hidden>${this._messages.previousPageLabel}</elvt-visually-hidden>
                        </elvt-button>
                    </elvt-tooltip>
                    <elvt-tooltip content=${this._messages.nextPageLabel}>
                        <elvt-button size=${this.size} @click=${this.gotoNextPage} ?disabled=${this._pageIndex >= this.getMaxPageIndex()}>
                            <elvt-icon icon=${this.icons.nextPage}></elvt-icon>
                            <elvt-visually-hidden>${this._messages.nextPageLabel}</elvt-visually-hidden>
                        </elvt-button>
                    </elvt-tooltip>
                    ${this.showFirstLastButtons ? html` <elvt-tooltip content=${this._messages.lastPageLabel}>
                              <elvt-button size=${this.size} @click=${this.gotoLastPage} ?disabled=${this._pageIndex >= this.getMaxPageIndex()}>
                                  <elvt-icon icon=${this.icons.lastPage}></elvt-icon>
                                  <elvt-visually-hidden>${this._messages.lastPageLabel}</elvt-visually-hidden>
                              </elvt-button>
                          </elvt-tooltip>` : ""}
                </elvt-button-group>
            </div>`;
  }
  emitPageEvent() {
    this.dispatchEvent(
      new PageChangeEvent(
        "page-change",
        {
          pageIndex: this._pageIndex,
          pageSize: this._pageSize
        },
        {
          bubbles: true,
          cancelable: true
        }
      )
    );
  }
  getMaxPageIndex() {
    return Math.floor(this._length / this._pageSize);
  }
  getPageSizeOptions() {
    const options = this.pageSizeOptions || [];
    if (!options.includes(this._pageSize)) {
      options.push(this._pageSize);
    }
    return options.sort((a, b) => a - b);
  }
  gotoFirstPage() {
    this.gotoPageIndex(0);
  }
  gotoLastPage() {
    this.gotoPageIndex(this.getMaxPageIndex());
  }
  gotoNextPage() {
    this.gotoPageIndex(this._pageIndex + 1);
  }
  gotoPreviousPage() {
    this.gotoPageIndex(this._pageIndex - 1);
  }
  gotoPageIndex(pageIndex) {
    const validated = Math.min(Math.max(pageIndex, 0), this.getMaxPageIndex());
    if (validated !== this._pageIndex) {
      this._pageIndex = validated;
      this.requestUpdate();
      this.emitPageEvent();
    }
  }
  onInputPageSize(event) {
    const pageSize = +event.target.value;
    if (pageSize !== this._pageSize) {
      this._pageSize = pageSize;
      this._pageIndex = 0;
      this.requestUpdate();
      this.emitPageEvent();
    }
  }
};
PaginatorComponent.styles = unsafeCSS(paginator_styles_default);
__decorateClass([
  property({ type: Boolean, reflect: true })
], PaginatorComponent.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "hide-page-size" })
], PaginatorComponent.prototype, "hidePageSize", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "hide-range-status" })
], PaginatorComponent.prototype, "hideRangeStatus", 2);
__decorateClass([
  property({
    type: String,
    reflect: true,
    attribute: "page-size-options",
    converter: {
      toAttribute(value) {
        return value.join(" ");
      },
      fromAttribute(value) {
        return value.split(" ").map((option) => Number.parseInt(option.trim(), 10) || 0).filter((option) => option > 0);
      }
    }
  })
], PaginatorComponent.prototype, "pageSizeOptions", 2);
__decorateClass([
  property({ type: String, reflect: true })
], PaginatorComponent.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "show-first-last-buttons" })
], PaginatorComponent.prototype, "showFirstLastButtons", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], PaginatorComponent.prototype, "length", 1);
__decorateClass([
  property({ type: Number, reflect: true, attribute: "page-index" })
], PaginatorComponent.prototype, "pageIndex", 1);
__decorateClass([
  property({ type: Number, reflect: true, attribute: "page-size" })
], PaginatorComponent.prototype, "pageSize", 1);
PaginatorComponent = __decorateClass([
  webComponent({
    name: "elvt-paginator",
    dependencies: ["elvt-button-group", "elvt-button", "elvt-input", "elvt-select", "elvt-tooltip", "elvt-icon", "elvt-visually-hidden"]
  })
], PaginatorComponent);

export {
  PaginatorIntl,
  PageChangeEvent,
  PaginatorComponent
};
