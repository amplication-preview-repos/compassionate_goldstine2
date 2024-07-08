import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeadWhereInput = {
  id?: StringFilter;
  contactInfo?: StringNullableFilter;
  leadName?: StringNullableFilter;
  source?: StringNullableFilter;
  dateAdded?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
