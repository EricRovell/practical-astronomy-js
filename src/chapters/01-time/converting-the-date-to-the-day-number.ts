import { checkLeapYear } from "@helpers";
import type { Date } from "../../types";

/**
 * Converts the date to the day number.
 */
export function convertDateToDayNumber({ year = 2010, month = 1, day = 0 }: Partial<Date>): number {
	const leapVar = checkLeapYear(year) ? 62 : 63;

	if (month > 2) {
		return Math.floor(Math.floor((month + 1) * 30.6) - leapVar) + day;
	}

	return Math.floor((month - 1) * leapVar / 2) + day;
}