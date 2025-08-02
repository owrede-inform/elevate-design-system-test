import {
  CheckboxComponent
} from "./chunk.Y7KTMKUP.js";

// src/react/checkbox.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtCheckbox = createComponent({
  tagName: "elvt-checkbox",
  elementClass: CheckboxComponent,
  react: React,
  events: {
    onChange: "change",
    onBlur: "blur",
    onInput: "input"
  },
  displayName: "ElvtCheckbox"
});

export {
  ElvtCheckbox
};
