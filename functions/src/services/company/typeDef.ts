import { User } from "../services";
import {
  generateIdField,
  generateCreatedAtField,
  generateUpdatedAtField,
  generateCreatedByField,
} from "../../helpers/tier0/typeDef";
import { dataTypes, sequelizeDataTypes } from "jomql";

export default {
  ...generateIdField(),
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
  ...generateCreatedAtField(),
  ...generateUpdatedAtField(),
  ...generateCreatedByField(User),
};
