import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeadCreateInput = {
  contactInfo?: string | null;
  leadName?: string | null;
  source?: string | null;
  dateAdded?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
