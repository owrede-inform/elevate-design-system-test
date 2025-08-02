// src/components/icon/icon.ts
var _Icon = class _Icon {
  constructor(detail) {
    if (typeof detail === "string") {
      if (detail.startsWith("data:")) {
        const { width, height, svg } = this.loadDataUrl(detail);
        this._svg = svg;
        this.width = width || _Icon.DefaultWidth;
        this.height = height || _Icon.DefaultHeight;
      } else if (detail.startsWith("path:")) {
        const { width, height, path } = this.parseDetailString(detail);
        this._path = path;
        this.width = width || _Icon.DefaultWidth;
        this.height = height || _Icon.DefaultHeight;
      } else if (detail.startsWith("{")) {
        const { width, height, path } = JSON.parse(detail);
        this._path = path;
        this.width = width || _Icon.DefaultWidth;
        this.height = height || _Icon.DefaultHeight;
      } else {
        this._path = detail;
        this.width = _Icon.DefaultWidth;
        this.height = _Icon.DefaultHeight;
      }
    } else {
      if ("path" in detail) {
        this._path = detail.path;
      }
      if ("svg" in detail) {
        this._svg = detail.svg;
      }
      this.width = detail.width || _Icon.DefaultWidth;
      this.height = detail.height || _Icon.DefaultHeight;
    }
  }
  get svg() {
    if (this._svg) {
      return this._svg;
    }
    const { width, height, _path } = this;
    this._svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><path d="${_path}" fill="#000"/></svg>`;
    return this._svg;
  }
  get url() {
    if (!this._url) {
      const blob = new Blob([this.svg], {
        type: "image/svg+xml"
      });
      this._url = URL.createObjectURL(blob);
    }
    return this._url;
  }
  toString() {
    return this.url;
  }
  loadDataUrl(detail) {
    const match = /^data:image\/svg\+xml(?:;([^,]+))?,(.*)$/.exec(detail);
    if (match) {
      const [, encoding, data] = match;
      if (encoding === "base64") {
        const decodedData = atob(data);
        const svg = new DOMParser().parseFromString(decodedData, "text/xml");
        const viewBox = (svg.documentElement.getAttribute("viewbox") || "").split(" ").reduce(
          (carry, value, index) => {
            const field = ["minX", "minY", "width", "height"][index];
            carry[field] = +value;
            return carry;
          },
          {}
        );
        const width = +(svg.documentElement.getAttribute("width") || viewBox.width || _Icon.DefaultWidth);
        const height = +(svg.documentElement.getAttribute("height") || viewBox.height || _Icon.DefaultHeight);
        return {
          width,
          height,
          svg: decodedData
        };
      }
    }
    throw new Error("Invalid data url icon.");
  }
  parseDetailString(detailString) {
    return detailString.split(";").reduce(
      (carry, keyValue) => {
        const [key, value] = keyValue.split(":", 2).map((s) => s.trim());
        switch (key) {
          case "width":
            carry.height = +value || _Icon.DefaultHeight;
            break;
          case "height":
            carry.width = +value || _Icon.DefaultWidth;
            break;
          case "path":
            carry.path = value;
            break;
        }
        return carry;
      },
      {
        path: ""
      }
    );
  }
  dispose() {
    if (this._url) {
      URL.revokeObjectURL(this._url);
      this._url = void 0;
    }
  }
};
_Icon.DefaultHeight = 24;
_Icon.DefaultWidth = 24;
var Icon = _Icon;

export {
  Icon
};
