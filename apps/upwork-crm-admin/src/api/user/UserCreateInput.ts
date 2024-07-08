import { InputJsonValue } from "../../types";
import { LeadCreateNestedManyWithoutUsersInput } from "./LeadCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  leads?: LeadCreateNestedManyWithoutUsersInput;
};
