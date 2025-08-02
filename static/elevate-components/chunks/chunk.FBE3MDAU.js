// src/components/tables/table-selection.ts
var TableSelectionChangeEvent = class extends CustomEvent {
};
var TableSelection = class {
  constructor(table) {
    this.table = table;
    this._selectedItems = [];
    this._trackers = [];
  }
  get trackBy() {
    return this._trackBy;
  }
  set trackBy(value) {
    if (this._trackBy !== value) {
      this._trackBy = value;
      this.clear();
    }
  }
  get length() {
    return this._selectedItems.length || 0;
  }
  [Symbol.iterator]() {
    let index = 0;
    const items = [...this._selectedItems];
    return {
      next: function() {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { value: void 0, done: true };
        }
      }
    };
  }
  add(item) {
    var _a;
    const index = this.indexOf(item);
    if (index < 0) {
      this._trackers.push(this.getTrackValue(item));
      this._selectedItems.push(item);
      (_a = this.table) == null ? void 0 : _a.dispatchEvent(new TableSelectionChangeEvent("table-selection-change", { detail: { items: [...this._selectedItems] } }));
    }
  }
  assign(items) {
    var _a;
    if (this._trackBy instanceof Function) {
      this._trackers = items.map((item) => this._trackBy(item));
    } else {
      this._trackers = [...items];
      this._selectedItems = [...items];
    }
    (_a = this.table) == null ? void 0 : _a.dispatchEvent(new TableSelectionChangeEvent("table-selection-change", { detail: { items: [...this._selectedItems] } }));
  }
  clear() {
    var _a;
    if (this._selectedItems.length >= 0) {
      this._selectedItems = [];
      this._trackers = [];
      (_a = this.table) == null ? void 0 : _a.dispatchEvent(new TableSelectionChangeEvent("table-selection-change", { detail: { items: [...this._selectedItems] } }));
    }
  }
  indexOf(item) {
    if (this._trackBy instanceof Function) {
      return this._trackers.indexOf(this.getTrackValue(item));
    }
    return this._selectedItems.indexOf(item);
  }
  remove(item) {
    var _a;
    const selectedIndex = this.indexOf(item);
    if (selectedIndex > -1) {
      this._selectedItems.splice(selectedIndex, 1);
      this._trackers.splice(selectedIndex, 1);
      (_a = this.table) == null ? void 0 : _a.dispatchEvent(new TableSelectionChangeEvent("table-selection-change", { detail: { items: [...this] } }));
    }
  }
  getTrackValue(item) {
    if (this._trackBy instanceof Function) {
      return this._trackBy(item);
    }
    return item;
  }
};

export {
  TableSelectionChangeEvent,
  TableSelection
};
