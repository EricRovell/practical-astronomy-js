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