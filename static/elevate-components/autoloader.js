import {
  ElevateElements
} from "./chunks/chunk.JLFKXCY5.js";
import "./chunks/chunk.S3NI7NKU.js";

// src/autoloader.ts
import "@inform-elevate/elevate-cdk";
var Autoloader = class {
  constructor() {
    this._observer = new MutationObserver((mutations) => {
      for (const { addedNodes } of mutations) {
        for (const node of addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.discover(node).then();
          }
        }
      }
    });
    const baseUrl = document.location.href.replace(/[^/]*([?#].*)?$/, "");
    this._elevatePath = this.getLibraryUrl("elevate-core-ui", baseUrl);
    this._shoelacePath = this.getLibraryUrl("shoelace", baseUrl);
    this._observer.observe(document.documentElement, { subtree: true, childList: true });
  }
  getLibraryUrl(name, baseUrl) {
    var _a;
    const attributeName = `data-${name}`;
    const path = ((_a = document.querySelector(`[${attributeName}]`)) == null ? void 0 : _a.getAttribute(attributeName)) || `js/${name}`;
    return path.match(/^https?:\/\//) ? path : `${baseUrl}${path}`;
  }
  async discover(root) {
    const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
    const tags = [...root.querySelectorAll(":not(:defined)")].map((element) => element.tagName.toLowerCase()).filter((tag) => this.isLoadable(tag));
    if (this.isLoadable(rootTagName) && !this.isRegistered(rootTagName)) {
      tags.push(rootTagName);
    }
    const tagsToRegister = [...new Set(tags)];
    await this.loadAll(tagsToRegister);
  }
  isLoadable(tagName) {
    return this.isElevate(tagName) || this.isShoelace(tagName);
  }
  isElevate(tagName) {
    return tagName.startsWith("elvt-");
  }
  isShoelace(tagName) {
    return tagName.startsWith("sl-");
  }
  isRegistered(tagName) {
    return !!customElements.get(tagName);
  }
  async loadAll(tagsToRegister) {
    const loaded = await Promise.allSettled(tagsToRegister.map((tagName) => this.load(tagName)));
    const dependencies = loaded.reduce((carry, result) => {
      var _a;
      if (result.status === "fulfilled") {
        const value = result.value;
        const definition = value == null ? void 0 : value.elevateWebComponentDefinition;
        if ((definition == null ? void 0 : definition.dependencies) instanceof Array && ((_a = definition.dependencies) == null ? void 0 : _a.length) > 0) {
          return [...carry, ...definition.dependencies];
        }
      }
      return carry;
    }, []);
    const dependenciesToRegister = [...new Set(dependencies)];
    if (dependenciesToRegister.length > 0) {
      await this.loadAll(dependenciesToRegister);
    }
  }
  load(tagName) {
    if (customElements.get(tagName)) {
      return Promise.resolve(customElements.get(tagName));
    }
    if (tagName.startsWith("elvt-")) {
      const name = tagName.substring(5);
      const path = `${this._elevatePath}/components/${tagName in ElevateElements ? ElevateElements[tagName] : `${name}/${name}.component.js`}`;
      return new Promise((resolve, reject) => {
        import(path).then(() => resolve(customElements.get(tagName))).catch(() => reject(new Error(`Unable to autoload <${tagName}> from ${path}`)));
      });
    }
    if (tagName.startsWith("sl-")) {
      const name = tagName.substring(3);
      const path = `${this._shoelacePath}/components/${name}/${name}.js`;
      return new Promise((resolve, reject) => {
        import(path).then(() => resolve(customElements.get(tagName))).catch(() => reject(new Error(`Unable to autoload <${tagName}> from ${path}`)));
      });
    }
    return Promise.reject(new Error(`Unable to autoload <${tagName}>`));
  }
};
new Autoloader().discover(document.body).then();
