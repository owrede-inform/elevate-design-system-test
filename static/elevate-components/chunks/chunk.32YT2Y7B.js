import {
  LightboxComponent
} from "./chunk.KPSDTNJX.js";

// src/react/lightbox.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtLightbox = createComponent({
  tagName: "elvt-lightbox",
  elementClass: LightboxComponent,
  react: React,
  events: {
    onBackdropClick: "backdrop-click",
    onEscapeKeypress: "escape-keypress"
  },
  displayName: "ElvtLightbox"
});

export {
  ElvtLightbox
};
