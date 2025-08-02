import {
  __spreadValues
} from "./chunk.S3NI7NKU.js";

// src/components/distance/gap.ts
var _Gap = class _Gap {
  constructor(values) {
    this.ValuePattern = /^(2?x)?s|(2?x)?l|m|\d+(px|em)$/;
    if (typeof values === "object") {
      this.column = values.column;
      this.row = values.row;
    } else {
      const parts = typeof values === "string" ? this.fromString(values) : this.fromArray(values);
      this.column = parts.column;
      this.row = parts.row;
    }
  }
  fromString(value) {
    const values = value.trim().toLowerCase().split(/\s+/);
    return this.fromArray(values);
  }
  fromArray(values) {
    const filtered = values.slice(0, 2).map((value) => value.match(this.ValuePattern) ? value : "0px");
    switch (filtered.length) {
      case 2:
        return {
          column: filtered[0],
          row: filtered[1]
        };
      case 1:
        return {
          column: filtered[0],
          row: filtered[0]
        };
      default:
        return {
          column: "0px",
          row: "0px"
        };
    }
  }
  equal(first, ...others) {
    return others.reduce((carry, other) => carry && other === first, true);
  }
  toString() {
    if (this.equal(this.column, this.row)) {
      return `${this.column}`;
    }
    return `${this.column} ${this.row}`;
  }
  toJSON() {
    return {
      column: this.column,
      row: this.row
    };
  }
  applyTo(target) {
    ["column", "row"].forEach((name) => {
      const value = `${this[name]}`;
      const isValue = !value.match(/x*[sl]|m/);
      target.style.setProperty(`--gap-${name}`, isValue ? value : `var(--distance-${value})`);
    });
  }
  static create(values, applyTo) {
    if (values instanceof _Gap || typeof values !== "object") {
      return new _Gap(values);
    }
    return new _Gap(__spreadValues(__spreadValues({}, applyTo || {}), values));
  }
};
_Gap.converter = {
  fromAttribute: (value) => {
    return new _Gap(value);
  },
  toAttribute: (value) => {
    return `${value}`;
  }
};
var Gap = _Gap;

export {
  Gap
};
