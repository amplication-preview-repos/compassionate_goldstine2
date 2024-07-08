import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  contactInfo?: SortOrder;
  leadName?: SortOrder;
  source?: SortOrder;
  dateAdded?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
};
