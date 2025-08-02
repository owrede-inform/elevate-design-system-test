import {
  TableComponent
} from "./chunk.EXPJOII6.js";

// src/react/table.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtTable = createComponent({
  tagName: "elvt-table",
  elementClass: TableComponent,
  react: React,
  events: {
    onTableRowClick: "table-row-click",
    onTableSelectionChange: "table-selection-change"
  },
  displayName: "ElvtTable"
});

export {
  ElvtTable
};
