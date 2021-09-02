import type { Date } from "../../types";

export function convertJulianToGreenwichDate(date: number): Date {
	const i = Math.trunc(date + 0.5);
	const f = (date + 0.5) - i;

	let b = i;

	if (i > 2299160) {
		const a = Math.trunc((i - 1867216.25) / 36524.25);
		b = i + a - Math.trunc(a / 4) + 1;
	}

	const c = b + 1524;
	const d = Math.trunc((c - 122.1) / 365.25);
	const e = Math.trunc(365.25 * d);
	const g = Math.trunc((c - e) / 30.6001);
	
	/**
	 * This is the day of the month including the decimal part of the day.
	 */
	const day = c - e + f - Math.trunc(30.6001 * g);
	const month = (g < 13.5)
		? g - 1
		: g - 13;
	const year = (month > 2.5)
		? d - 4716
		: d - 4715;

	return {
		year,
		month,
		day
	};
}