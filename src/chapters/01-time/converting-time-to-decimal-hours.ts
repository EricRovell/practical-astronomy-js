import { round } from "@helpers/math";
import type { Time } from "../../types";

/**
 * Convert time in H:M:S format to decimal hours.
 */
export function convertTimeToDecimalHours({ hours = 0, minutes = 0, seconds = 0 }: Partial<Time>): number {
	const deciSeconds = Math.abs(seconds) / 3600;
	const deciMinutes = Math.abs(minutes) / 60;
	return round(hours + deciMinutes + deciSeconds, 8);
}

/**
 * Convert decimal hours to time in H:M:S format.
 */
export function convertDecimalHoursToTime(time: number): Time {
	const decimalHours = Math.abs(time);
	const totalSeconds = decimalHours * 3600;
	const seconds = round(totalSeconds % 60, 2);
	const correctedSeconds = (seconds === 60) ? 0 : seconds;
	const correctedRemainder = (seconds === 60) ? totalSeconds + 60 : totalSeconds;
	const minutes = Math.trunc(correctedRemainder / 60) % 60;
	const uHours = Math.trunc(correctedRemainder / 3600);
	const sHours = (decimalHours < 0) ? -1 * uHours : uHours;

	return {
		hours: sHours,
		minutes,
		seconds: correctedSeconds
	};
}