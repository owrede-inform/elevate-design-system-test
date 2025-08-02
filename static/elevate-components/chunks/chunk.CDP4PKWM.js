import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/tables/table-column/table-column.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { webComponent } from "@inform-elevate/elevate-cdk";

// src/components/tables/table-column/table-column.styles.scss?inline
var table_column_styles_default = `@charset "UTF-8";
:host {
  --header-cell-padding-column: var(--elvt-measures-distance-xs, 0.75rem);
  --header-cell-padding-row: var(--elvt-measures-distance-s, 1rem);
  display: table-cell;
  width: var(--table-column-width, auto);
  position: relative;
}
:host .label {
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  padding: var(--header-cell-padding-column) var(--header-cell-padding-row);
}
:host button.label {
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  text-align: inherit;
  overflow: hidden;
  border-radius: var(--elvt-measures-radius-xs, 0.25rem);
}
:host button.label:focus-visible {
  outline: var(--elvt-alias-action-focus-border-width-m, 0.125rem) solid var(--elvt-alias-action-focus-border-color-default, rgb(11, 92, 223));
  outline-offset: calc(var(--elvt-alias-action-focus-border-width-m, 0.125rem) * -1);
}
:host button.label:after {
  content: var(--table-column-sort-indicator);
  opacity: var(--table-column-sort-indicator-opacity);
}

:host([alignment=start]) {
  text-align: start;
}

:host([alignment=end]) {
  text-align: end;
}

:host([alignment=center]) {
  text-align: center;
}

:host([alignment=justify]) {
  text-align: justify;
}

:host([sortable]) {
  --table-column-sort-indicator: "\u21C5";
  --table-column-sort-indicator-opacity: 50%;
}

:host([sortable=asc]) {
  --table-column-sort-indicator: "\u2191";
}

:host([sortable=desc]) {
  --table-column-sort-indicator: "\u2193";
}

:host([sorted=asc]) {
  --table-column-sort-indicator: "\u25B2";
  --table-column-sort-indicator-opacity: 80%;
}

:host([sorted=desc]) {
  --table-column-sort-indicator: "\u25BC";
  --table-column-sort-indicator-opacity: 80%;
}`;

// src/components/tables/table-column/table-column.component.ts
import { property } from "lit/decorators.js";
var TableColumnComponent = class extends LitElement {
  get width() {
    return this._width;
  }
  set width(value) {
    const stringValue = `${value}`;
    if (stringValue.match(/^[+-]?\d+(\.\d+)?$/)) {
      this._width = `${+stringValue / 16}rem`;
    } else {
      this._width = value;
    }
    this.style.setProperty("--table-column-width", this._width || null);
  }
  render() {
    if (this.sortable && this.sortable.length > 0) {
      return html` <button class="label"><slot></slot></button>`;
    }
    return html` <span class="label"><slot></slot></span>`;
  }
};
TableColumnComponent.styles = unsafeCSS(table_column_styles_default);
__decorateClass([
  property({ type: String, reflect: false })
], TableColumnComponent.prototype, "alignment", 2);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: {
      toAttribute(value) {
        const attributeValue = (value || []).join(" ");
        return attributeValue !== "" ? attributeValue : void 0;
      },
      fromAttribute(value) {
        const list = (value || "").split(" ").map((v) => v.trim()).filter((v) => v === "asc" /* Ascending */ || v === "desc" /* Descending */);
        return list.length > 0 ? list : void 0;
      }
    }
  })
], TableColumnComponent.prototype, "sortable", 2);
__decorateClass([
  property({ type: String, reflect: true })
], TableColumnComponent.prototype, "sorted", 2);
__decorateClass([
  property({ type: String, reflect: true })
], TableColumnComponent.prototype, "width", 1);
TableColumnComponent = __decorateClass([
  webComponent({
    name: "elvt-table-column"
  })
], TableColumnComponent);

export {
  TableColumnComponent
};
