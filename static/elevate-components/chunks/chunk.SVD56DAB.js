import {
  NotificationComponent
} from "./chunk.BOUDLLNE.js";

// src/react/notification.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var ElvtNotification = createComponent({
  tagName: "elvt-notification",
  elementClass: NotificationComponent,
  react: React,
  events: {
    onChange: "change"
  },
  displayName: "ElvtNotification"
});

export {
  ElvtNotification
};
