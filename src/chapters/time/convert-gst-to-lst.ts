import { convertDecimalHoursToTime, convertTimeToDecimalHours } from "./convert-time-and-decimal-hours";
import { reduceToRange } from "../../helpers";
import type { Time } from "../../types";

/**
 * Converts GST (Greenwich Sidereal Time) to LST (Local Sidereal Time).
 */
export function convertGSTtoLST(time: Time, longtitude: number): Time {
	const GST = convertTimeToDecimalHours(time);
	const offset = longtitude / 15;
	const hours = reduceToRange(GST + offset);

	return convertDecimalHoursToTime(hours);
}

/**
 * Converts LST (Local Sidereal Time) to GST (Greenwich Sidereal Time).
 */
 export function convertLSTtoGST(time: Time, longtitude: number): Time {
	const longtitudeHours = longtitude / 15;
	const GST = reduceToRange(
		convertTimeToDecimalHours(time) - longtitudeHours
	);
	
	return convertDecimalHoursToTime(GST);
}
