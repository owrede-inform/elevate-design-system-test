import {
  MutationObserverComponent
} from "./chunk.THGLFE2R.js";

// src/react/mutation-observer.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtMutationObserver = createComponent({
  tagName: "elvt-mutation-observer",
  elementClass: MutationObserverComponent,
  react: React,
  events: {
    onMutation: "mutation"
  },
  displayName: "ElvtMutationObserver"
});

export {
  ElvtMutationObserver
};
