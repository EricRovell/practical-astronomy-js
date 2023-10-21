import { describe, it, expect } from "vitest";
import { convertDateToDayNumber } from "./convert-date-to-day-number";

describe("Time", () => {
	it("Calculates the number of days for the date", () => {
		expect(convertDateToDayNumber({ year: 1990, month: 11 })).toBe(304);
		expect(convertDateToDayNumber({ year: 2000, month: 5 })).toBe(121);
		expect(convertDateToDayNumber({ year: 2019, month: 1 })).toBe(0);
		expect(convertDateToDayNumber({ year: 2016, month: 1 })).toBe(0);
		expect(convertDateToDayNumber({ year: 2027, month: 9 })).toBe(243);
		expect(convertDateToDayNumber({ year: 2028, month: 9 })).toBe(244);
	});
});
