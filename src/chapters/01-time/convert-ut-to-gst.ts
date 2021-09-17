import { convertGreenwichToJulianDate } from "./julian-to-greenwich-date";
import { convertTimeToDecimalHours, convertDecimalHoursToTime } from "./converting-time-to-decimal-hours";
import type { UT, Time } from "../../types";

/**
 * Converts Universal Time (UT) to Greenwich Sidereal Time (GST).
 */
export function convertUTtoGST(date: UT): Time {
	const jd = convertGreenwichToJulianDate(date);
	const s = jd - 2451545;
	const t = s / 36525;
	let t0 = 6.697374558 + 2400.051336 * t + 0.000025862 * t ** 2;
	t0 -= 24 * Math.trunc(t0 / 24);
	const UT = convertTimeToDecimalHours(date);
	const A = UT * 1.002737909;
	let GST = t0 + A;
	GST -= 24 * Math.trunc(GST / 24);

	return convertDecimalHoursToTime(GST);
}