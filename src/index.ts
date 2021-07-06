import dayNumberToDay from "./core/dayNumberToDay";
import { DayInNumberType } from "./types";

export default function IDate(date: DayInNumberType) {
  const result = dayNumberToDay(date);
  return result;
}
