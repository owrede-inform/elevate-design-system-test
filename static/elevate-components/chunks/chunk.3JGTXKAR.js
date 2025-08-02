import {
  TableDataProvider
} from "./chunk.V63E2BHJ.js";

// src/components/tables/data-providers/array-table-data-provider.ts
import { BehaviourSubject } from "@inform-elevate/elevate-cdk";
var ArrayTableDataProvider = class extends TableDataProvider {
  constructor(items, options = {}) {
    super();
    this._items = new BehaviourSubject([]);
    const { compare } = options;
    this._options = {
      compare
    };
    this.next(items);
  }
  next(items) {
    if (items instanceof Promise) {
      items.then(
        (data) => this._items.next(data),
        () => {
          this.status.next("failure" /* Failure */);
        }
      );
    } else {
      this._items.next(items);
      this.status.next("ready" /* Ready */);
      this.changes.next();
    }
  }
  async slice(start, end, sortBy) {
    const items = await this.getSortedItems(sortBy);
    return {
      items: items.slice(start, end),
      length: items.length
    };
  }
  async getSortedItems(sortBy) {
    if (sortBy) {
      if (this._sortedItems && this._sortedItems.sortBy.column === sortBy.column && this._sortedItems.sortBy.direction === sortBy.direction) {
        return this._sortedItems.items;
      } else {
        const compare = this._options.compare;
        if (compare) {
          this._sortedItems = {
            sortBy,
            items: [...this._items.value].sort((a, b) => compare(a, b, sortBy))
          };
          return this._sortedItems.items;
        }
      }
    }
    return this._items.value;
  }
};

export {
  ArrayTableDataProvider
};
