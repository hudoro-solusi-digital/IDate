import { IndonesianDays } from "../../helpers/datas";
import { DayInNumberType } from "../../types";

/**
 *
 * @param date - Day index ranged from 0 to 6
 * @returns Day based on given date
 * @example dayNumberToDay(0) "Minggu"
 */
export default function dayNumberToDay(date: DayInNumberType) {
  return IndonesianDays.get(date);
}
