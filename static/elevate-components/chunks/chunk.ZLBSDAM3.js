import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/tables/table-cell/table-cell.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { webComponent } from "@inform-elevate/elevate-cdk";

// src/components/tables/table-cell/table-cell.styles.scss?inline
var table_cell_styles_default = `:host {
  --data-cell-padding-column: var(--elvt-measures-distance-3xs, 0.25rem);
  --data-cell-padding-row: var(--elvt-measures-distance-s, 1rem);
  display: table-cell;
  padding: var(--data-cell-padding-column) var(--data-cell-padding-row);
  width: var(--table-cell-width, auto);
  overflow: hidden;
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
}`;

// src/components/tables/table-cell/table-cell.component.ts
import { property } from "lit/decorators.js";
var TableCellComponent = class extends LitElement {
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
    this.style.setProperty("--table-cell-width", this._width || null);
  }
  render() {
    return html`<slot></slot>`;
  }
};
TableCellComponent.styles = unsafeCSS(table_cell_styles_default);
__decorateClass([
  property({ type: String, reflect: false })
], TableCellComponent.prototype, "alignment", 2);
__decorateClass([
  property({ type: String, reflect: true })
], TableCellComponent.prototype, "width", 1);
TableCellComponent = __decorateClass([
  webComponent({
    name: "elvt-table-cell"
  })
], TableCellComponent);

export {
  TableCellComponent
};
