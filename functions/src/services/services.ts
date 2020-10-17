import { userRole } from "./enums";
import * as generators from "./core/generators";
const userRoleEnum = generators.generateEnumService("userRole", userRole);

export { User } from "./user/service";
export { Company } from "./company/service";
export { Auth } from "./auth/service";

export { userRoleEnum as UserRoleEnum };
