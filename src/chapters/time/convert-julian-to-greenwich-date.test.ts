import { describe, it, expect } from "vitest";
import { convertJulianToGreenwichDate, convertGreenwichToJulianDate } from "./convert-julian-to-greenwich-date";

describe("Time", () => {
	it("Calculates the number of days for the date", () => {
		expect(convertJulianToGreenwichDate(2455002.25)).toEqual({ year: 2009, month: 6, day: 19.75 });
	});
	it("Convert Greenwich calendar date to Julian", () => {
		expect(convertGreenwichToJulianDate({ year: 2009, month: 6, day: 19.75 })).toBe(2455002.25);
	});
});
