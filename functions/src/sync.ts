const { syncDatabase } = require("jomql");
const schema = require("./schema");
const { env } = require("./config");
syncDatabase(env.mysql, schema);
