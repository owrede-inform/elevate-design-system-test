import {
  SelectComponent
} from "./chunk.IIFVTUPR.js";

// src/react/select.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtSelect = createComponent({
  tagName: "elvt-select",
  elementClass: SelectComponent,
  react: React,
  events: {
    onInput: "input",
    onChange: "change",
    onBlur: "blur"
  },
  displayName: "ElvtSelect"
});

export {
  ElvtSelect
};
