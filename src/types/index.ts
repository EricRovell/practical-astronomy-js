export interface Date {
	year: number;
	month: number;
	day: number;
}

export interface Time {
	hours: number;
	minutes: number;
	seconds: number;
}

/**
 * Defines a Universal Time (UT)
 */
export interface UT extends Date, Time {}

/**
 * Defines a Greenwich Time (GT)
 */
export interface GT extends Date, Time {}

/**
 * Defines a Local Civil Time.
 * 
 * Note: defined date is local date.
 */
export interface LCT extends UT {
	daylightSaving: number;
	zoneCorrection: number;
}