// src/components/dialogs/dialog-manager.ts
import { DependencyContainer, InjectionToken } from "@inform-elevate/elevate-cdk";
import { render } from "lit";
var ELVT_DIALOG = new InjectionToken("Dialog Manager");
var DialogContext = class {
  constructor(_close, data) {
    this._close = _close;
    this.data = data;
  }
  async confirm(responseData) {
    this._close(this, responseData);
  }
  async cancel() {
    this._close(this);
  }
};
var DialogManager = class {
  constructor() {
    this._dialogs = [];
  }
  async open(dialogTagOrClass, opener, data) {
    return new Promise((resolve, reject) => {
      const container = document.createElement("elvt-lightbox");
      container.setAttribute("role", "dialog");
      document.body.appendChild(container);
      container[DependencyContainer.Symbol] = DependencyContainer.findOnAncestorOf(opener);
      try {
        const close = async (context2, responseData) => {
          container.remove();
          const index = this._dialogs.findIndex((i) => i === context2);
          if (index >= 0) {
            this._dialogs.splice(index, 1);
          }
          setTimeout(() => resolve(responseData), 0);
        };
        const context = new DialogContext(close, data);
        container.addEventListener("escape-keypress", () => {
          const [current] = this._dialogs;
          if (current === context) {
            current.cancel();
          }
        });
        const dialog = this.createDialogContent(dialogTagOrClass, context);
        if (dialog instanceof HTMLElement) {
          container.append(dialog);
        } else {
          render(dialog, container);
        }
        this._dialogs.unshift(context);
      } catch (error) {
        container.remove();
        reject(error);
      }
    });
  }
  createDialogContent(dialogTagOrClass, context) {
    if (typeof dialogTagOrClass === "string") {
      const dialog = document.createElement(dialogTagOrClass);
      dialog.dialog = context;
      return dialog;
    }
    if (!!dialogTagOrClass.prototype && !!dialogTagOrClass.prototype.constructor.name) {
      const dialog = new dialogTagOrClass();
      dialog.dialog = context;
      return dialog;
    }
    return dialogTagOrClass(context);
  }
  async cancelAll() {
    await Promise.all(
      [...this._dialogs].map(async (dialog) => {
        await dialog.cancel();
      })
    );
  }
};

export {
  ELVT_DIALOG,
  DialogContext,
  DialogManager
};
