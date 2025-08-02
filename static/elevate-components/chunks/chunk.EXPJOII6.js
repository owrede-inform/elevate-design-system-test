import {
  DefaultTableIntl,
  TableIntl
} from "./chunk.POUDLRUQ.js";
import {
  TableSelection
} from "./chunk.FBE3MDAU.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/tables/table/table.component.ts
import { html, LitElement, unsafeCSS } from "lit";
import { property, query, state } from "lit/decorators.js";

// src/components/tables/table/table.styles.scss?inline
var table_styles_default = `:host {
  --table-header-fill: var(--sl-color-neutral-0);
  --header-cell-border: var(--sl-color-neutral-500);
  --data-cell-border: var(--sl-color-neutral-200);
  --table-data-odd-fill: transparent;
  --table-data-even-fill: var(--sl-color-neutral-50);
  position: relative;
  display: grid;
  grid-template: 1fr/1fr;
  overflow: hidden;
  box-sizing: border-box;
}
:host .table {
  display: table;
  border-collapse: collapse;
  border: 1px;
  box-sizing: border-box;
}
:host .thead {
  display: table-header-group;
  width: 100%;
  position: sticky;
  z-index: 1;
  top: 0;
  background: var(--table-header-fill);
}
:host .thead .selectionToggle {
  display: table-cell;
  padding: var(--elvt-measures-distance-2xs, 0.5rem);
  vertical-align: middle;
  text-align: center;
}
:host .thead .thead-columns {
  display: table-row;
}
:host .thead .indicator {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
}
:host .tbody {
  display: table-row-group;
}
:host .tbody elvt-table-row:nth-child(odd) {
  --table-row-fill: var(--table-data-odd-fill);
}
:host .tbody elvt-table-row:nth-child(even) {
  --table-row-fill: var(--table-data-even-fill);
}
:host .scroll-viewport {
  overflow: auto;
  will-change: scroll-position;
  contain: strict;
  -webkit-overflow-scrolling: touch;
}
:host .scroll-viewport .scroll-content {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  contain: content;
}
:host .scroll-viewport .scroll-content .table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
:host .scroll-viewport .scroll-content .table .thead {
  top: var(--virtual-scroll-offset, 0px);
}
:host .scroll-viewport .scroll-spacer {
  height: 1px;
  transform-origin: 0 0;
  pointer-events: none;
}
:host .table[data-scroll=inner] {
  display: block;
  min-height: 100%;
  max-height: 100%;
  overflow: auto;
}
:host .table[data-scroll=inner] .thead {
  display: table;
}
:host .table[data-scroll=inner] .tbody {
  display: table;
  min-height: 100%;
  max-height: 100%;
  width: 100%;
}
:host .indicator {
  height: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  position: relative;
}
:host .progress {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  right: 0;
}
:host .table[data-status=loading] .progress {
  display: block;
}

::slotted(elvt-table-row:nth-child(odd)) {
  --table-row-fill: var(--table-data-odd-fill);
}

::slotted(elvt-table-row:nth-child(even)) {
  --table-row-fill: var(--table-data-even-fill);
}`;

// src/components/tables/table/table.component.ts
import { styleMap } from "lit/directives/style-map.js";
import { BehaviourSubject, delay, DependencyContainer, EventSubscription, Subscriptions, webComponent } from "@inform-elevate/elevate-cdk";
import { ifDefined } from "lit/directives/if-defined.js";
var TableScrollMode = {
  None: "none",
  Inner: "inner",
  Virtual: "virtual"
};
var TableComponent = class extends LitElement {
  constructor() {
    super();
    this.columns = [];
    this.scrollMode = TableScrollMode.None;
    this._defaultRowHeight = 40;
    this._limits = { start: -1, end: -1 };
    this._loadingTimeout = 5e3;
    this._loadingTimeoutDelay = 500;
    this._messages = new DefaultTableIntl();
    this._providerSubscriptions = new Subscriptions();
    this._resizeObserver = new ResizeObserver(async () => {
      await this.triggerUpdate();
    });
    this._slice = new BehaviourSubject({ start: 0, end: -1, absoluteLength: 0, items: [] });
    this._subscriptions = new Subscriptions();
    this._rowHeight = 0;
    this._selectable = false;
    this.selection = new TableSelection(this);
  }
  get trackBy() {
    return this.selection.trackBy;
  }
  set trackBy(value) {
    this.selection.trackBy = value;
  }
  handleSelectionToggleClick(event) {
    event.stopPropagation();
    const toggle = this._selectionToggleElement;
    if (toggle && this.scrollMode !== TableScrollMode.Virtual) {
      const status = this.getSelectionStatus();
      if (!status) {
        return;
      }
      if (status.all) {
        this.selection.clear();
      } else {
        const allItems = this.rows.map((row) => row.item).filter((item) => !!item);
        this.selection.assign(allItems);
      }
      requestAnimationFrame(() => this.updateRows());
    }
  }
  get provider() {
    return this._provider;
  }
  set provider(value) {
    if (this._provider !== value) {
      this._providerSubscriptions.unsubscribe();
      this._provider = value;
      if (value) {
        this._providerSubscriptions.add(
          value.status.subscribe((status) => {
            if (status && status !== this._providerStatus) {
              this._providerStatus = status;
            }
          })
        );
      }
    }
  }
  get rowHeight() {
    return this._rowHeight > 0 ? this._rowHeight : this._defaultRowHeight;
  }
  set rowHeight(value) {
    this._rowHeight = value;
  }
  get selectable() {
    return this._selectable;
  }
  set selectable(value) {
    if (this._selectable !== value) {
      this._selectable = value;
      this.updateRows();
    }
  }
  get sortBy() {
    return this._sortBy;
  }
  set sortBy(value) {
    var _a, _b;
    if (((_a = this._sortBy) == null ? void 0 : _a.column) !== (value == null ? void 0 : value.column) || ((_b = this._sortBy) == null ? void 0 : _b.direction) !== (value == null ? void 0 : value.direction)) {
      this._sortBy = value;
      if (this.scrollMode === TableScrollMode.Virtual) {
        this.selection.clear();
      }
      this.triggerUpdate().catch();
    }
  }
  get rowOffset() {
    return this._slice.value.start;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this._messages = ((_a = DependencyContainer.findOnAncestorOf(this)) == null ? void 0 : _a.provide(TableIntl)) || this._messages;
    this._subscriptions.add(
      this._messages.changes.subscribe(() => this.requestUpdate()),
      new EventSubscription(this, "table-selection-change", () => {
        if (this.scrollMode !== TableScrollMode.Virtual) {
          this.requestUpdate();
        }
      })
    );
    this._resizeObserver.observe(this);
  }
  disconnectedCallback() {
    this._resizeObserver.disconnect();
    this._subscriptions.unsubscribe();
    super.disconnectedCallback();
  }
  getSelectionStatus() {
    if (this.scrollMode === TableScrollMode.Virtual) {
      return void 0;
    }
    const selectableLength = this.rows.reduce((carry, row) => carry + (row.item ? 1 : 0), 0);
    const selectionLength = this.selection.length;
    return {
      maximum: selectableLength,
      current: selectionLength,
      all: selectionLength > 0 && selectionLength >= selectableLength,
      some: selectionLength > 0 && selectionLength < selectableLength
    };
  }
  getSelectionToggle() {
    const status = this.getSelectionStatus();
    if (!status) {
      return "";
    }
    const label = status.all ? this._messages.selectNoneLabel : this._messages.selectAllLabel;
    return html` <elvt-checkbox size="small" hide-label @input=${this.handleSelectionToggleClick} .checked=${status.all} .indeterminate=${status.some}>
            ${label}
        </elvt-checkbox>`;
  }
  render() {
    var _a;
    const slice = this._slice.value;
    const bodyStyles = {};
    if (this.scrollMode === TableScrollMode.Virtual) {
      bodyStyles["--table-row-min-height"] = `${this.rowHeight}px`;
    }
    const displayColumns = this.getDisplayColumns();
    const table = html` <div class="table" data-scroll=${this.scrollMode} data-status=${this._providerStatus}>
            <div class="thead">
                <div class="thead-columns">
                    ${this._selectable ? html`<span class="selectionToggle"> ${this.getSelectionToggle()} </span>` : ""}
                    <slot name="head"> ${this.getHeaderColumns(displayColumns)}</slot>
                </div>
                <div class="indicator">
                    <elvt-progress class="progress" size="small" tone="warning" indeterminate></elvt-progress>
                </div>
            </div>
            <div class="tbody" style=${styleMap(bodyStyles)}>
                <slot> ${slice.items.map((item, index) => this.getDataRow(item, slice.start + index, displayColumns))} </slot>
            </div>
        </div>`;
    if (this.scrollMode === TableScrollMode.Virtual) {
      const bodyHeight = slice.absoluteLength * this.rowHeight;
      const sliceTop = slice.start * this.rowHeight;
      const headerHeight = ((_a = this._tableHeaderElement) == null ? void 0 : _a.getBoundingClientRect().height) || 0;
      return html` <div class="scroll-viewport" @scroll=${this.handleScroll} @scrollend=${this.handleScrollEnd}>
                <div
                    class="scroll-content"
                    style=${styleMap({
        "transform": `translateY(${sliceTop}px)`,
        "--virtual-scroll-offset": `${-sliceTop}px`
      })}>
                    ${table}
                </div>
                <div class="scroll-spacer" style=${styleMap({ height: `${bodyHeight + headerHeight}px` })}></div>
            </div>`;
    } else {
      return table;
    }
  }
  updated() {
    if (this._rowHeight <= 0) {
      const firstRow = this.querySelector("elvt-table-row") || this.renderRoot.querySelector("elvt-table-row");
      if (firstRow) {
        this._rowHeight = firstRow.getBoundingClientRect().height;
        if (this._rowHeight !== this._defaultRowHeight) {
          this.triggerUpdate().then();
        }
      }
    }
  }
  getDataRow(item, index, displayColumns) {
    const rowProperties = (this.row instanceof Function ? this.row(item) : this.row) || {};
    return html` <elvt-table-row @table-row-click=${this.handleTableRowClick} .item=${item} ?clickable=${rowProperties.clickable}>
            ${ifDefined(rowProperties.label) ? html`<span slot="label">${rowProperties.label}</span>` : ""}
            ${displayColumns.map(
      ({ column }) => html` <elvt-table-cell alignment=${ifDefined(column.dataAlignment || column.alignment)}
                        >${column.data ? column == null ? void 0 : column.data(item, index, column) : ""}
                    </elvt-table-cell>`
    )}
        </elvt-table-row>`;
  }
  getDisplayColumns() {
    return (this.displayedColumns ? this.displayedColumns.map((id) => this.columns.find((column) => column.id === id)) : this.columns).filter((column) => !!column).map(
      (column) => {
        var _a;
        return {
          column,
          alignment: column == null ? void 0 : column.alignment,
          dataAlignment: (column == null ? void 0 : column.dataAlignment) || (column == null ? void 0 : column.alignment),
          sortable: (column.sortable === true ? "asc desc" : column.sortable) || void 0,
          sorted: ((_a = this._sortBy) == null ? void 0 : _a.column) === column.id ? this._sortBy.direction : void 0
        };
      },
      {}
    );
  }
  getHeaderColumns(columns) {
    return html` ${columns.map(({ column, sortable, sorted, alignment }) => {
      return html` <elvt-table-column
                width=${ifDefined(column.width)}
                alignment=${ifDefined(alignment)}
                sortable=${ifDefined(sortable)}
                sorted=${ifDefined(sorted)}
                @click=${() => this.handleColumnClick(column)}>
                ${column.label instanceof Function ? column == null ? void 0 : column.label(column) : (column == null ? void 0 : column.label) || ""}
            </elvt-table-column>`;
    })}`;
  }
  handleColumnClick(column) {
    var _a;
    if (column.sortable) {
      if (column.id === ((_a = this._sortBy) == null ? void 0 : _a.column) && column.sortable === true) {
        this.sortBy = {
          column: column.id,
          direction: this._sortBy.direction === "asc" /* Ascending */ ? "desc" /* Descending */ : "asc" /* Ascending */
        };
      } else if (column.sortable === true || column.sortable === "asc" /* Ascending */) {
        this.sortBy = { column: column.id, direction: "asc" /* Ascending */ };
      } else if (column.sortable === "desc" /* Descending */) {
        this.sortBy = { column: column.id, direction: "desc" /* Descending */ };
      }
    }
  }
  async handleScroll() {
    await this.triggerUpdate();
  }
  async handleScrollEnd() {
    await this.updateItems();
  }
  handleTableRowClick(event) {
    const eventClone = new event.constructor(event.type, event);
    this.dispatchEvent(eventClone);
  }
  async triggerUpdate() {
    if (!this._updateTrigger) {
      this._updateTrigger = requestAnimationFrame(() => {
        if (!this.isUpdatePending) {
          this._updateTrigger = void 0;
          this.updateItems();
        } else {
          this.triggerUpdate();
        }
      });
    }
  }
  async updateItems() {
    var _a, _b, _c, _d, _e, _f, _g;
    if (this._updateTrigger) {
      cancelAnimationFrame(this._updateTrigger);
      this._updateTrigger = void 0;
    }
    if (this._provider) {
      let timeout = this._loadingTimeout;
      while (timeout > 0 && this._provider.status.value === "loading" /* Loading */) {
        timeout -= this._loadingTimeoutDelay;
        await delay(this._loadingTimeoutDelay);
      }
      if (this._provider.status.value === "loading" /* Loading */) {
        throw new Error("Table Data Provider is still busy loading");
      }
      if (this.scrollMode === TableScrollMode.Virtual) {
        const tableHeight = ((_a = this._scrollViewportElement) == null ? void 0 : _a.getBoundingClientRect().height) || window.innerHeight || 0;
        const headerHeight = ((_b = this._tableHeaderElement) == null ? void 0 : _b.getBoundingClientRect().height) || 0;
        const scrollOffset = ((_c = this._scrollViewportElement) == null ? void 0 : _c.scrollTop) || 0;
        const rowHeight = this.rowHeight;
        const rowStart = scrollOffset / rowHeight;
        const visibleRowCount = Math.ceil((tableHeight - headerHeight) / rowHeight);
        const sliceSize = Math.ceil(visibleRowCount / 10) * 10;
        const sliceStart = Math.max(Math.floor((Math.floor(rowStart / sliceSize) - 1) * sliceSize / 2) * 2, 0);
        const sliceEnd = Math.max((Math.ceil(rowStart / sliceSize) + 1) * sliceSize);
        if (this._limits.start !== sliceStart || this._limits.end !== sliceEnd || this._limits.sortColumn !== ((_d = this._sortBy) == null ? void 0 : _d.column) || this._limits.sortDirection !== ((_e = this._sortBy) == null ? void 0 : _e.direction)) {
          this._limits = {
            start: sliceStart,
            end: sliceEnd,
            sortColumn: (_f = this._sortBy) == null ? void 0 : _f.column,
            sortDirection: (_g = this._sortBy) == null ? void 0 : _g.direction
          };
          const { items, length } = await this._provider.slice(sliceStart, sliceEnd, this._sortBy);
          const itemEnd = sliceStart + items.length;
          const calculatedLength = itemEnd >= sliceEnd ? itemEnd + 1 : itemEnd;
          const slice = {
            start: sliceStart,
            end: itemEnd,
            absoluteLength: length >= 0 ? length : calculatedLength,
            items
          };
          this._slice.next(slice);
        }
      } else {
        const { length, items } = await this._provider.slice(void 0, void 0, this.sortBy);
        this._slice.next({ start: 0, end: -1, absoluteLength: length, items });
      }
    } else {
      this._slice.next({ start: -1, end: -1, absoluteLength: 0, items: [] });
    }
    this.requestUpdate();
  }
  get rows() {
    var _a, _b, _c;
    return [
      ...(((_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot:not([name])")) == null ? void 0 : _b.assignedElements()) || []).filter(
        (element) => element.tagName.toLowerCase() === "elvt-table-row"
      ),
      ...((_c = this.shadowRoot) == null ? void 0 : _c.querySelectorAll("elvt-table-row")) || []
    ];
  }
  updateRows() {
    this.rows.forEach((row) => row.requestUpdate());
  }
};
TableComponent.styles = unsafeCSS(table_styles_default);
__decorateClass([
  property({ type: Object, attribute: false })
], TableComponent.prototype, "columns", 2);
__decorateClass([
  property({ type: Object, attribute: false })
], TableComponent.prototype, "displayedColumns", 2);
__decorateClass([
  property({ type: Object, attribute: false })
], TableComponent.prototype, "row", 2);
__decorateClass([
  property({ type: String, reflect: true, attribute: "scroll-mode" })
], TableComponent.prototype, "scrollMode", 2);
__decorateClass([
  state()
], TableComponent.prototype, "_providerStatus", 2);
__decorateClass([
  query(".scroll-viewport")
], TableComponent.prototype, "_scrollViewportElement", 2);
__decorateClass([
  query(".table > .thead")
], TableComponent.prototype, "_tableHeaderElement", 2);
__decorateClass([
  query(".selectionToggle elvt-checkbox")
], TableComponent.prototype, "_selectionToggleElement", 2);
__decorateClass([
  property({ type: Function, attribute: false })
], TableComponent.prototype, "trackBy", 1);
__decorateClass([
  property({ type: Object, attribute: false })
], TableComponent.prototype, "provider", 1);
__decorateClass([
  property({ type: Number, reflect: true, attribute: "row-height" })
], TableComponent.prototype, "rowHeight", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], TableComponent.prototype, "selectable", 1);
__decorateClass([
  property({ type: Object, attribute: false })
], TableComponent.prototype, "sortBy", 1);
TableComponent = __decorateClass([
  webComponent({
    name: "elvt-table",
    dependencies: ["elvt-table-column", "elvt-table-row", "elvt-table-cell", "elvt-checkbox"]
  })
], TableComponent);

export {
  TableScrollMode,
  TableComponent
};
