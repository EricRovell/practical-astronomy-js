import type { Date } from "../../types";

/**
 * Convert Julian Date to Greenwich Calendar Date.
 */
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

/**
 * Convert Greenwich Calendar Date to Julian Date.
 */
export function convertGreenwichToJulianDate({ year, month, day }: Date): number {
	const yd = (month < 3) ? year - 1 : year;
	const md = (month < 3) ? month + 12: month;
	const a = Math.trunc(yd / 100);
	const b = ((year > 1582) || (year === 1582 && month > 10) || (year === 1582 && month === 10 && day >= 15))
		? 2 - a + Math.trunc(a / 4)
		: 0;
	const c = (yd < 0)
		? Math.trunc((365.25 * yd) - 0.75)
		: Math.trunc(365.25 * yd);
	const d = Math.trunc(30.6001 * (md + 1));

	return b + c + d + day + 1720994.5;
}