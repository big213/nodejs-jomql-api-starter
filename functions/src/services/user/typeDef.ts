import * as bcrypt from "bcryptjs";

import errorHelper from "../../helpers/tier0/error";
import { User, UserRoleEnum } from "../services";
import * as typeDefHelper from "../../helpers/tier0/typeDef";
import { dataTypes, sequelizeDataTypes } from "jomql";

export default {
  ...typeDefHelper.generateIdField(),
  email: {
    type: dataTypes.STRING,
    mysqlOptions: {
      type: sequelizeDataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    addable: true,
    updateable: true,
  },
  password: {
    type: dataTypes.STRING,
    allowNull: true,
    mysqlOptions: {
      type: sequelizeDataTypes.STRING,
    },
    addable: true,
    updateable: true,
    hidden: true,
    transform: {
      setter: (value) =>
        bcrypt.hash(value, 10).catch(() => {
          throw errorHelper.generateError("Invalid password");
        }),
    },
  },
  name: {
    type: dataTypes.STRING,
    allowNull: true,
    mysqlOptions: {
      type: sequelizeDataTypes.STRING,
      allowNull: false,
    },
    addable: true,
    updateable: true,
  },
  ...typeDefHelper.generateCreatedAtField(),
  ...typeDefHelper.generateUpdatedAtField(),
  ...typeDefHelper.generateCreatedByField(User),
  ...typeDefHelper.generateEnumField(
    "role",
    UserRoleEnum,
    {},
    { defaultValue: UserRoleEnum.enum["NEW"] }
  ),
};
