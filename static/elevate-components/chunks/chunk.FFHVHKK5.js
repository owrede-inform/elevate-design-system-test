import {
  ResizeObserverComponent
} from "./chunk.UPCGLGHW.js";

// src/react/resize-observer.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtResizeObserver = createComponent({
  tagName: "elvt-resize-observer",
  elementClass: ResizeObserverComponent,
  react: React,
  events: {
    onResize: "resize"
  },
  displayName: "ElvtResizeObserver"
});

export {
  ElvtResizeObserver
};
