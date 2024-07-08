import { User } from "../user/User";

export type Lead = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contactInfo: string | null;
  leadName: string | null;
  source: string | null;
  dateAdded: Date | null;
  status?: "Option1" | null;
  user?: User | null;
};
