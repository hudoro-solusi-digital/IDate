import convertDateFromRangeDate from "./core/dayNumberToDay";
import { DayInNumberType } from "./types";

export default function IDate(date: DayInNumberType) {
  const result = convertDateFromRangeDate(date);
  return result;
}
