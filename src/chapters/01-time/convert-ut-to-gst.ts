import { convertGreenwichToJulianDate } from "./julian-to-greenwich-date";
import { convertTimeToDecimalHours, convertDecimalHoursToTime } from "./converting-time-to-decimal-hours";
import { reduceToRange } from "@helpers/math";
import type { UT, GT, Time } from "../../types";

/**
 * Converts Universal Time (UT) to Greenwich Sidereal Time (GST).
 */
export function convertUTtoGST(date: UT): Time {
	const jd = convertGreenwichToJulianDate(date);
	const s = jd - 2451545;
	const t = s / 36525;
	const t0 = reduceToRange(6.697374558 + 2400.051336 * t + 0.000025862 * t ** 2)
	const UT = convertTimeToDecimalHours(date);
	const A = UT * 1.002737909;
	const GST = reduceToRange(t0 + A);

	return convertDecimalHoursToTime(GST);
}

/**
 * Convert Greenwich Sidereal Time (GST) to Universal Time (UT) in decimal form.
 */
function convertGSTtoUTDecimal(date: GT): number {
	const jd = convertGreenwichToJulianDate(date);
	const s = jd - 2451545;
	const t = s / 36525;
	let t0 = 6.697374558 + 2400.051336 * t + 0.000025862 * t ** 2;
	t0 -= 24 * Math.trunc(t0 / 24);
	const GST = convertTimeToDecimalHours(date);
	const A = reduceToRange(GST - t0);
	const UT = A * 0.9972695663;

	if (UT < 0.065574) {
		console.warn("It may not be the desired conversion (UT -> GST).");
	}

	return UT;
}

/**
 * Convert Greenwich Sidereal Time (GST) to Universal Time (UT).
 */
export function convertGSTtoUT(date: GT): Time {
	return convertDecimalHoursToTime(
		convertGSTtoUTDecimal(date)
	);
}

/**
 * Check whether the UT lies in [ 00:00:00; 00:03:56 ].
 * If it does, it may not be the desired conversion since
 * an equality-valid range of UT for this date corresponding
 * to the given GST is [ 23:56:04; 00:00:00 ].
 * 
 * Returns `true` if is fine.
 */
export function checkGSTtoUT(date: GT): Boolean {
	return convertGSTtoUTDecimal(date) > 0.065574;
}