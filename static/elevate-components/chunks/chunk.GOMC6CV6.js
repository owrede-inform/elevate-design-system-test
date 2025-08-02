import {
  Icon
} from "./chunk.QR7NMAP2.js";

// src/components/icon/icon-registry.ts
var IconRegistry = class {
  constructor() {
    this._libraries = {};
    this._resolvers = {};
    this.DefaultLibrary = "_";
  }
  getIcon(name, library = "_") {
    if (this._libraries[library] && this._libraries[library][name]) {
      return this._libraries[library][name];
    }
    if (this._resolvers[library]) {
      return this._resolvers[library](name);
    }
    return void 0;
  }
  registerIcon(name, definition, library = "_") {
    this.validateLibraryName(library);
    if (!this._libraries[library]) {
      this._libraries[library] = {};
    }
    if (definition) {
      if (typeof definition === "string") {
        if (definition.startsWith("data:")) {
          this._libraries[library][name] = definition;
          return true;
        }
      }
      this._libraries[library][name] = new Icon(definition);
      return true;
    }
    return false;
  }
  registerIcons(definitions, library = "_") {
    Object.entries(definitions).forEach(([name, definition]) => this.registerIcon(name, definition, library));
  }
  registerResolver(library, resolver) {
    this.validateLibraryName(library);
    this._resolvers[library] = resolver;
  }
  clear() {
    this._libraries = {};
    this._resolvers = {};
  }
  validateLibraryName(library) {
    const match = /\W/.exec(library);
    if (match) {
      throw new Error(`Library identifier ${library} does contain invalid characters at #${match.index}.`);
    }
  }
};
var icon_registry_default = new IconRegistry();

export {
  icon_registry_default
};
