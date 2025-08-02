import {
  DefaultTableIntl,
  TableIntl,
  TableRowEvent
} from "./chunk.POUDLRUQ.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/tables/table-row/table-row.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { DependencyContainer, Subscriptions, webComponent } from "@inform-elevate/elevate-cdk";

// src/components/tables/table-row/table-row.styles.scss?inline
var table_row_styles_default = `:host {
  display: contents;
  border: 1px solid red;
}
:host .table-row {
  display: table-row;
  position: relative;
  border-bottom: 1px solid var(--data-cell-border);
  background-color: var(--table-row-fill);
  min-height: var(--table-row-min-height);
  height: var(--table-row-min-height);
}
:host .table-row .row-selector {
  display: table-cell;
  padding: var(--elvt-measures-distance-2xs, 0.5rem);
  vertical-align: middle;
  text-align: center;
}
:host .table-row:focus {
  outline: none;
}
:host .table-row.clickable:focus-visible {
  outline: none;
}
:host .table-row.clickable:focus-visible:after {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: var(--elvt-measures-radius-2xs, 0.125rem);
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: calc(var(--elvt-alias-action-focus-border-width-m, 0.125rem) * -1);
}`;

// src/components/tables/table-row/table-row.component.ts
import { property, query } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";
var TableRowComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this._messages = new DefaultTableIntl();
    this._subscriptions = new Subscriptions();
    this._clickable = false;
  }
  get clickable() {
    return this._clickable;
  }
  set clickable(value) {
    this._clickable = value;
  }
  get selected() {
    if (this.item && this._table) {
      return this._table.selection.indexOf(this.item) >= 0;
    }
    return false;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this._table = this.getTableElement();
    this._messages = ((_a = DependencyContainer.findOnAncestorOf(this)) == null ? void 0 : _a.provide(TableIntl)) || this._messages;
    this._subscriptions.add(this._messages.changes.subscribe(() => this.requestUpdate()));
  }
  handleTableRowClick() {
    this.emitRowClick();
  }
  handleTableRowKeydown(event) {
    if (event.code === "Space") {
      this.emitRowClick();
    }
  }
  disconnectedCallback() {
    this._subscriptions.unsubscribe();
    super.disconnectedCallback();
  }
  render() {
    var _a;
    let selector;
    if ((_a = this._table) == null ? void 0 : _a.selectable) {
      if (!this.item) {
        selector = html`<span class="row-selector"></span>`;
      } else {
        const isSelected = this.selected;
        selector = html`<span class="row-selector">
                    <elvt-checkbox size="small" hide-label @input=${this.handleCheckboxInput} @click=${(e) => e.stopPropagation()} .checked=${isSelected}>
                        <span class="action-label">${isSelected ? this._messages.deselectRowLabel : this._messages.selectRowLabel}</span>
                        <span class="row-label"><slot name="label">${ifDefined(this.label)}</slot></span>
                    </elvt-checkbox>
                </span>`;
      }
    }
    const classes = classMap({
      "table-row": true,
      "clickable": this._clickable
    });
    return html` <div class=${classes} tabindex=${this.clickable ? 0 : -1} @click=${this.handleTableRowClick} @keydown=${this.handleTableRowKeydown}>
            ${selector}
            <slot></slot>
        </div>`;
  }
  emitRowClick() {
    if (!this._clickable) {
      return;
    }
    this.dispatchEvent(
      new TableRowEvent("table-row-click", {
        detail: {
          index: this.getRowIndex(),
          item: this.item,
          row: this
        },
        bubbles: true,
        cancelable: true
      })
    );
  }
  getRowIndex() {
    return document.evaluate("count(preceding-sibling::elvt-table-row)", this, void 0, XPathResult.ANY_TYPE, null).numberValue;
  }
  getTableElement() {
    var _a;
    const table = this.closest("elvt-table");
    if (table) {
      return table;
    }
    let current = this.parentNode;
    while (current) {
      if (current instanceof ShadowRoot) {
        current = current.host;
      } else if (current instanceof Element && ((_a = current.localName) == null ? void 0 : _a.toLowerCase()) === "elvt-table") {
        return current;
      } else {
        current = current.parentNode;
      }
    }
    return void 0;
  }
  handleCheckboxInput() {
    var _a, _b;
    const selection = (_a = this._table) == null ? void 0 : _a.selection;
    const item = this.item;
    if (this._table && selection && item) {
      const isSelected = ((_b = this._rowSelector) == null ? void 0 : _b.checked) || false;
      if (isSelected) {
        selection.add(item);
      } else {
        selection.remove(item);
      }
      this.requestUpdate();
    }
  }
};
TableRowComponent.styles = unsafeCSS(table_row_styles_default);
__decorateClass([
  property({ type: Object, attribute: false })
], TableRowComponent.prototype, "item", 2);
__decorateClass([
  property({ type: Object, reflect: true })
], TableRowComponent.prototype, "label", 2);
__decorateClass([
  query(".row-selector > *")
], TableRowComponent.prototype, "_rowSelector", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TableRowComponent.prototype, "clickable", 1);
TableRowComponent = __decorateClass([
  webComponent({
    name: "elvt-table-row",
    dependencies: ["elvt-table-cell", "elvt-checkbox"]
  })
], TableRowComponent);

export {
  TableRowComponent
};
