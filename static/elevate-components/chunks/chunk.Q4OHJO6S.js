// src/components/fields/form-controller.ts
var FormController = class {
  constructor(form) {
    this.form = form;
  }
  reset(submitter) {
    this.doAction("reset", submitter);
  }
  submit(submitter) {
    this.doAction("submit", submitter);
  }
  doAction(type, submitter) {
    const form = this.form;
    if (form) {
      const button = document.createElement("button");
      button.type = type;
      button.style.position = "absolute";
      button.style.width = "0";
      button.style.height = "0";
      button.style.clipPath = "inset(50%)";
      button.style.overflow = "hidden";
      button.style.whiteSpace = "nowrap";
      ["name", "value", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
        if (submitter.hasAttribute(attr)) {
          button.setAttribute(attr, submitter.getAttribute(attr));
        }
      });
      form.append(button);
      button.click();
      button.remove();
    }
  }
};

export {
  FormController
};
