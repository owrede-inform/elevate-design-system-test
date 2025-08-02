// src/components/tables/data-providers/table-data-provider.ts
import { BehaviourSubject, Subject } from "@inform-elevate/elevate-cdk";
var TableDataProvider = class {
  constructor() {
    /*
     * Processing status
     */
    this.status = new BehaviourSubject("created" /* Created */);
    /*
     * Data changes
     */
    this.changes = new Subject();
  }
};

export {
  TableDataProvider
};
