import { round } from "@helpers/math";

export interface Time {
	hours: number;
	minutes: number;
	seconds: number;
}

/**
 * Convert time to decimal form.
 */
export function convertTimeToDecimalHours({ hours = 0, minutes = 0, seconds = 0 }: Partial<Time>): number {
	const deciSeconds = Math.abs(seconds) / 3600;
	const deciMinutes = Math.abs(minutes) / 60;
	return round(hours + deciMinutes + deciSeconds, 8);
}

export function convertDecimalHoursToTime(time: number): Partial<Time> {
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