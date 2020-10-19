import { userRoleEnum } from "./enums";
import { generateEnumService } from "./core/generators";

export { User } from "./user/service";
export { Company } from "./company/service";
export { Auth } from "./auth/service";

export const UserRole = generateEnumService("userRole", userRoleEnum);
