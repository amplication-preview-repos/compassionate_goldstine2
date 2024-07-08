import { InputJsonValue } from "../../types";
import { LeadUpdateManyWithoutUsersInput } from "./LeadUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  leads?: LeadUpdateManyWithoutUsersInput;
};
