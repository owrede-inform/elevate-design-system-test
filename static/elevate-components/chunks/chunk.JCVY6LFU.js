import {
  TableDataProvider
} from "./chunk.V63E2BHJ.js";
import {
  __spreadValues
} from "./chunk.S3NI7NKU.js";

// src/components/tables/data-providers/paged-table-data-provider.ts
var PagedTableDataProvider = class extends TableDataProvider {
  constructor(pageSize, fetcher) {
    super();
    this.pageSize = pageSize;
    this.fetcher = fetcher;
    this._slices = {};
  }
  async getSlice(page, sortBy) {
    if (!this._slices[page]) {
      try {
        this._slices[page] = {
          page,
          pageSize: this.pageSize,
          data: await this.fetcher(page, this.pageSize, sortBy)
        };
      } catch (e) {
        this.status.next("failure" /* Failure */);
        throw e;
      }
    }
    return this._slices[page];
  }
  reset() {
    this._slices = {};
    this.changes.next();
  }
  async slice(start, end, sortBy) {
    var _a, _b;
    this.status.next("loading" /* Loading */);
    const pageStart = Math.floor((start || 0) / this.pageSize);
    const pageEnd = Math.ceil((end || 1) / this.pageSize);
    if (((_a = this._sliceSort) == null ? void 0 : _a.column) !== (sortBy == null ? void 0 : sortBy.column) || ((_b = this._sliceSort) == null ? void 0 : _b.direction) !== (sortBy == null ? void 0 : sortBy.direction)) {
      this._slices = {};
      this._sliceSort = sortBy ? __spreadValues({}, sortBy) : void 0;
    }
    const slices = (await Promise.all(
      Array.from(Array(pageEnd - pageStart)).map(async (_, i) => {
        return this.getSlice(pageStart + i, sortBy);
      })
    )).sort((a, b) => a.page - b.page).reduce(
      (carry, slice) => {
        const dataStart = slice.page * slice.pageSize;
        const dataEnd = dataStart + slice.data.items.length;
        const dataLength = slice.data.length >= 0 ? slice.data.length : dataEnd + (slice.data.items.length >= slice.pageSize ? 1 : 0);
        if (dataLength > 0) {
          carry.items = [...carry.items, ...slice.data.items];
          carry.length = Math.max(carry.length, dataLength);
        }
        return carry;
      },
      {
        items: [],
        length: -1
      }
    );
    const offset = pageStart * this.pageSize;
    this.status.next("ready" /* Ready */);
    return Promise.resolve({
      items: slices.items.slice((start || 0) - offset, end ? end - offset : void 0),
      length: slices.length
    });
  }
};

export {
  PagedTableDataProvider
};
