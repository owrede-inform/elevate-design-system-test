import {
  TabComponent
} from "./chunk.6HIJTFEF.js";

// src/react/tab.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtTab = createComponent({
  tagName: "elvt-tab",
  elementClass: TabComponent,
  react: React,
  events: {
    onRequestClose: "request-close",
    onSelectionChange: "selection-change"
  },
  displayName: "ElvtTab"
});

export {
  ElvtTab
};
