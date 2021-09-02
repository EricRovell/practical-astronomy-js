/**
 * Checks for leap year.
 */
export function checkLeapYear(year: number): boolean {
	if (year % 4) return false;
	if (year % 100) return true;
	if (year % 400 === 0) return true;

	return false;
}

/**
 * The most efficient leap year check.
 * 
 * Need to understand it before I will use it.
 * 
 * [source](https://stackoverflow.com/questions/3220163/how-to-find-leap-year-programmatically-in-c/11595914#11595914)
 */
/* export function checkLeapYear(year: number): boolean {
	return ((year & 3) === 0 && ((year % 25) !== 0 || (year & 15) === 0))
} */