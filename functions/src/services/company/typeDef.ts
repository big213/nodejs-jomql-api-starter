import { User } from "../services";
import * as typeDefHelper from "../../helpers/tier0/typeDef";
import { dataTypes, sequelizeDataTypes } from "jomql";

export default {
  ...typeDefHelper.generateIdField(),
  name: {
    type: dataTypes.STRING,
    allowNull: false,
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
};
