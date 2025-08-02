import {
  RadioGroupComponent
} from "./chunk.4F2FRMLE.js";

// src/react/radio-group.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtRadioGroup = createComponent({
  tagName: "elvt-radio-group",
  elementClass: RadioGroupComponent,
  react: React,
  events: {
    onType: "type",
    onChange: "change",
    onInput: "input",
    onBlur: "blur"
  },
  displayName: "ElvtRadioGroup"
});

export {
  ElvtRadioGroup
};
