import {
  TextareaComponent
} from "./chunk.FMYRXWAO.js";

// src/react/textarea.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtTextarea = createComponent({
  tagName: "elvt-textarea",
  elementClass: TextareaComponent,
  react: React,
  events: {
    onChange: "change",
    onInput: "input",
    onBlur: "blur"
  },
  displayName: "ElvtTextarea"
});

export {
  ElvtTextarea
};
