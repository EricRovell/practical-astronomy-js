import { checkLeapYear } from "@helpers";

describe("Helpers", () => {
	it("Checks for leap year", () => {
		expect(checkLeapYear(2000)).toBe(true);
		expect(checkLeapYear(2044)).toBe(true);
		expect(checkLeapYear(1900)).toBe(false);
		expect(checkLeapYear(1937)).toBe(false);
	});
});