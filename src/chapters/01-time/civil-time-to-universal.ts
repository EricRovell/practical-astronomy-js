import { convertDecimalHoursToTime, convertTimeToDecimalHours } from "./converting-time-to-decimal-hours";
import { convertJulianToGreenwichDate, convertGreenwichToJulianDate } from "./julian-to-greenwich-date";

import type { LCT, UT } from "../../types";

/**
 * Converts Local Civil Time (LCT) to Universal Time (UT).
 */
export function convertCivilTimeToUniversal(time: LCT): UT {
	const lct = convertTimeToDecimalHours(time);
	const ut = lct - time.daylightSaving - time.zoneCorrection;
	const greenwichDay = time.day + ut / 24;
	const julianDate = convertGreenwichToJulianDate({ ...time, day: greenwichDay });
	const greenwichDate = convertJulianToGreenwichDate(julianDate);
	const greenwichTime = convertDecimalHoursToTime(24 * (greenwichDay - Math.trunc(greenwichDay)));

	return {
		...greenwichDate,
		...greenwichTime,
		day: Math.trunc(greenwichDate.day)
	};
}