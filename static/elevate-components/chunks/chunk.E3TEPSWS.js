import {
  __spreadValues
} from "./chunk.S3NI7NKU.js";

// src/components/distance/padding.ts
var _Padding = class _Padding {
  constructor(values) {
    this.ValuePattern = /^(2?x)?s|(2?x)?l|m|\d+(px|em)$/;
    if (typeof values === "object") {
      this.top = values.top;
      this.right = values.right;
      this.bottom = values.bottom;
      this.left = values.left;
    } else {
      const parts = typeof values === "string" ? this.fromString(values) : this.fromArray(values);
      this.top = parts.top;
      this.right = parts.right;
      this.bottom = parts.bottom;
      this.left = parts.left;
    }
  }
  fromString(value) {
    const values = value.trim().toLowerCase().split(/\s+/);
    return this.fromArray(values);
  }
  fromArray(values) {
    const filtered = values.slice(0, 4).map((value) => value.match(this.ValuePattern) ? value : "0px");
    switch (filtered.length) {
      case 4:
        return {
          top: filtered[0],
          right: filtered[1],
          bottom: filtered[2],
          left: filtered[3]
        };
      case 3:
        return {
          top: filtered[0],
          right: filtered[1],
          bottom: filtered[2],
          left: filtered[1]
        };
      case 2:
        return {
          top: filtered[0],
          right: filtered[1],
          bottom: filtered[0],
          left: filtered[1]
        };
      case 1:
        return {
          top: filtered[0],
          right: filtered[0],
          bottom: filtered[0],
          left: filtered[0]
        };
      default:
        return {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        };
    }
  }
  equal(first, ...others) {
    return others.reduce((carry, other) => carry && other === first, true);
  }
  toString() {
    if (this.equal(this.top, this.right, this.bottom, this.left)) {
      return this.top;
    }
    if (this.equal(this.top, this.bottom) && this.equal(this.right, this.left)) {
      return `${this.top} ${this.right}`;
    }
    if (this.equal(this.right, this.left)) {
      return `${this.top} ${this.right} ${this.bottom}`;
    }
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`;
  }
  toJSON() {
    return {
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left
    };
  }
  applyTo(target) {
    ["top", "left", "bottom", "right"].forEach((name) => {
      const value = `${this[name]}`;
      const isValue = !value.match(/x*[sl]|m/);
      target.style.setProperty(`--padding-${name}`, isValue ? value : `var(--distance-${value})`);
    });
  }
  static create(values, applyTo) {
    if (values instanceof _Padding || typeof values !== "object") {
      return new _Padding(values);
    }
    return new _Padding(__spreadValues(__spreadValues({}, applyTo || {}), values));
  }
};
_Padding.converter = {
  fromAttribute: (value) => {
    return new _Padding(value);
  },
  toAttribute: (value) => {
    return `${value}`;
  }
};
var Padding = _Padding;

export {
  Padding
};
