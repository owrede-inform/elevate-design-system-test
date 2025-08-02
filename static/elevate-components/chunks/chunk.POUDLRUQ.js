// src/components/tables/table.ts
import { Subject } from "@inform-elevate/elevate-cdk";
var TableProviderStatus = /* @__PURE__ */ ((TableProviderStatus2) => {
  TableProviderStatus2["Created"] = "created";
  TableProviderStatus2["Loading"] = "loading";
  TableProviderStatus2["Ready"] = "ready";
  TableProviderStatus2["Failure"] = "failure";
  return TableProviderStatus2;
})(TableProviderStatus || {});
var TableItemSortDirection = /* @__PURE__ */ ((TableItemSortDirection2) => {
  TableItemSortDirection2["Ascending"] = "asc";
  TableItemSortDirection2["Descending"] = "desc";
  return TableItemSortDirection2;
})(TableItemSortDirection || {});
var TableCellAlignment = {
  start: "start",
  end: "end",
  center: "center",
  justify: "justify"
};
var TableRowEvent = class extends CustomEvent {
};
var TableIntl = class {
  constructor() {
    this.changes = new Subject();
  }
};
var DefaultTableIntl = class extends TableIntl {
  constructor() {
    super(...arguments);
    this.selectAllLabel = "Select all";
    this.selectNoneLabel = "Select none";
    this.selectRowLabel = "Select row";
    this.deselectRowLabel = "Deselect row";
  }
};

export {
  TableProviderStatus,
  TableItemSortDirection,
  TableCellAlignment,
  TableRowEvent,
  TableIntl,
  DefaultTableIntl
};
