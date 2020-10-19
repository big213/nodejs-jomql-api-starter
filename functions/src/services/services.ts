import { userRole } from "./enums";
import { generateEnumService } from "./core/generators";
const userRoleEnum = generateEnumService("userRole", userRole);

export { User } from "./user/service";
export { Company } from "./company/service";
export { Auth } from "./auth/service";

export { userRoleEnum as UserRoleEnum };
