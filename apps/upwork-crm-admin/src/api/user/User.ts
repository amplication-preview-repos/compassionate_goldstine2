import { JsonValue } from "type-fest";
import { Lead } from "../lead/Lead";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  leads?: Array<Lead>;
};
