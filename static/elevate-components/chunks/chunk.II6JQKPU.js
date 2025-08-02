import {
  RadioComponent
} from "./chunk.QLR27UV2.js";

// src/react/radio.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtRadio = createComponent({
  tagName: "elvt-radio",
  elementClass: RadioComponent,
  react: React,
  events: {
    onChange: "change",
    onInput: "input",
    onBlur: "blur"
  },
  displayName: "ElvtRadio"
});

export {
  ElvtRadio
};
