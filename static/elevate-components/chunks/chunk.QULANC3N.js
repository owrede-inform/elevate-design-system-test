import {
  ChipComponent
} from "./chunk.FPY3IMHC.js";

// src/react/chip.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtChip = createComponent({
  tagName: "elvt-chip",
  elementClass: ChipComponent,
  react: React,
  events: {
    onRequestRemove: "request-remove",
    onRequestEdit: "request-edit"
  },
  displayName: "ElvtChip"
});

export {
  ElvtChip
};
