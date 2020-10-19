import * as generators from "./core/generators";

import { User, Company } from "./services";

import user from "./user/typeDef";

import company from "./company/typeDef";

import auth from "./auth/typeDef";

import { userRole } from "./enums";

export const typeDefs = {
  user,
  userPaginator: generators.generatePaginatorTypeDef(User),

  company,
  companyPaginator: generators.generatePaginatorTypeDef(Company),

  auth,
  paginatorInfo: generators.generatePaginatorInfoTypeDef(),

  userRoleEnum: generators.generateEnumTypeDef(userRole),
};
