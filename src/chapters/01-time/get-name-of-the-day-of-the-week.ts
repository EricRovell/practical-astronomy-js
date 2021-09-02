/**
 * Determines the name of the day of the week from specidied Julian Date.
 * 
 * The name of the week corresponds to numbers:
 * 		- 0 as Sunday;
 * 		- 1 as Monday;
 *    - 2 as Tuesday;
 * 		- 3 as Wednesday;
 * 		- 4 as Thursday;
 * 		- 5 as Friday;
 * 		- 6 as Saturday;
 */
export function getDayWeekName(date: number): number {
	const a = (date + 1.5) / 7;
	return Math.round((a - Math.trunc(a)) * 7);
}