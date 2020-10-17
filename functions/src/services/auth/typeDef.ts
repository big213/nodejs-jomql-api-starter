import { User } from "../services";

import * as jwt from "jsonwebtoken";

import { env } from "../../config";
import { dataTypes } from "jomql";

const jwtExpirationDays = env.general.jwt_expiration
  ? parseInt(env.general.jwt_expiration)
  : 7;

export default {
  type: {
    type: dataTypes.STRING,
    resolver: () => "Bearer",
  },
  token: {
    type: dataTypes.STRING,
    resolver: async (context, req, currentObject, query, args) => {
      return jwt.sign(
        {
          id: args.id,
          email: args.email,
          role: "Admin", // temporary
          exp: Math.floor(Date.now() / 1000) + jwtExpirationDays * 24 * 60 * 60,
        },
        env.general.jwt_secret
      );
    },
  },
  expiration: {
    type: dataTypes.INTEGER,
    resolver: () =>
      Math.floor(Date.now() / 1000) + jwtExpirationDays * 24 * 60 * 60,
  },
  expiration_days: {
    type: dataTypes.INTEGER,
    resolver: () => jwtExpirationDays,
  },
  user: {
    type: User.__typename,
    resolver: async (context, req, currentObject, query, args) => {
      return User.getRecord(
        req,
        {
          id: args.id,
        },
        query
      );
    },
  },
};
