import { Service } from "../core/service";

import * as bcrypt from "bcryptjs";
import errorHelper from "../../helpers/tier0/error";
import { mysqlHelper } from "jomql";

export class Auth extends Service {
  static __typename = "auth";

  static presets = {
    default: {},
  };

  static filterFieldsMap = {};

  static hasKeys = false;

  static sortFieldsMap = {};

  static isFilterRequired = false;

  static accessControl = {};

  static async loginUser(req, args, query) {
    if (!args.email || !args.password) {
      throw errorHelper.missingParamsError();
    }

    //lookup hashed password by email
    const userResults = await mysqlHelper.executeDBQuery(
      "SELECT id, email, password FROM user WHERE email = :email",
      {
        email: args.email,
      }
    );

    if (userResults.length < 1) {
      throw errorHelper.itemNotFoundError();
    }

    //if saved password is null, cannot login normally, must be socialLogin
    if (!userResults[0].password) {
      throw errorHelper.generateError("Cannot login with password");
    }

    //bcrypt compare to args.password
    const passed = await bcrypt.compare(args.password, userResults[0].password);

    if (!passed) {
      throw errorHelper.generateError("Invalid email/password combo");
    }

    //if OK, return auth payload
    return this.getRecord(
      req,
      {
        id: userResults[0].id,
        email: userResults[0].email,
      },
      query
    );
  }
}
