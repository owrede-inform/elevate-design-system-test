import {
  InputComponent
} from "./chunk.PPC4MASE.js";

// src/react/input.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtInput = createComponent({
  tagName: "elvt-input",
  elementClass: InputComponent,
  react: React,
  events: {
    onChange: "change",
    onInput: "input",
    onBlur: "blur"
  },
  displayName: "ElvtInput"
});

export {
  ElvtInput
};
