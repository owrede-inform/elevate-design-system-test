import {
  MenuComponent
} from "./chunk.A6WXB775.js";

// src/react/menu.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtMenu = createComponent({
  tagName: "elvt-menu",
  elementClass: MenuComponent,
  react: React,
  events: {
    onElvtItemSelect: "elvt-item-select"
  },
  displayName: "ElvtMenu"
});

export {
  ElvtMenu
};
