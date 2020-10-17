import { Service } from "../core/service";
import { generatePaginatorService } from "../core/generators";

import { mysqlHelper, resolverHelper, subscriptionHelper } from "jomql";

import errorHelper from "../../helpers/tier0/error";

import { generateAlwaysAllowedGuard } from "../../helpers/tier2/permissions";

export class Company extends Service {
  static __typename = "company";

  static paginator = generatePaginatorService(Company);

  static presets = {
    default: {},
  };

  static filterFieldsMap = {
    id: {},
    created_by: {},
    "created_by.name": {},
  };

  static sortFieldsMap = {
    id: {},
    created_at: {},
  };

  static isFilterRequired = false;

  static accessControl = {
    get: generateAlwaysAllowedGuard(),

    getMultiple: generateAlwaysAllowedGuard(),

    create: generateAlwaysAllowedGuard(),

    update: generateAlwaysAllowedGuard(),

    delete: generateAlwaysAllowedGuard(),
  };
}
