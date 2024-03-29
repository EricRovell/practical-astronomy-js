import { convertDecimalHoursToTime, convertTimeToDecimalHours } from "./convert-time-and-decimal-hours";
import { convertJulianToGreenwichDate, convertGreenwichToJulianDate } from "./convert-julian-to-greenwich-date";
import type { LCT, UT } from "../../types";

/**
 * Converts Local Civil Time (LCT) to Universal Time (UT).
 */
export function convertLCTToUT(time: LCT): UT {
	const LCT = convertTimeToDecimalHours(time);
	const UT = LCT - time.daylightSaving - time.zoneCorrection;
	const greenwichDay = time.day + UT / 24;
	const JD = convertGreenwichToJulianDate({ ...time, day: greenwichDay });
	const greenwichDate = convertJulianToGreenwichDate(JD);
	const greenwichTime = convertDecimalHoursToTime(24 * (greenwichDay - Math.trunc(greenwichDay)));

	return {
		...greenwichDate,
		...greenwichTime,
		day: Math.trunc(greenwichDate.day)
	};
}
