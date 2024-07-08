import { Stage as TStage } from "../api/stage/Stage";

export const STAGE_TITLE_FIELD = "id";

export const StageTitle = (record: TStage): string => {
  return record.id?.toString() || String(record.id);
};
