import {
  SwitchComponent
} from "./chunk.NPJV5DVW.js";

// src/react/switch.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtSwitch = createComponent({
  tagName: "elvt-switch",
  elementClass: SwitchComponent,
  react: React,
  events: {
    onSwitchChangeEvent: "SwitchChangeEvent",
    onInput: "input",
    onChange: "change",
    onBlur: "blur"
  },
  displayName: "ElvtSwitch"
});

export {
  ElvtSwitch
};
