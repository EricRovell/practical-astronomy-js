import { calcEaster } from "@/chapters/01-time/the-date-of-easter";
import { convertDateToDayNumber } from "@/chapters/01-time/converting-the-date-to-the-day-number";
import { convertJulianToGreenwichDate } from "@/chapters/01-time/julian-to-greenwich-date";

describe("Chapter 01: Time", () => {
	it("Calculates the date of Easter", () => {
		expect(calcEaster(2009)).toEqual({ month: 4, day: 12 });
		expect(calcEaster(2012)).toEqual({ month: 4, day: 8 });
		expect(calcEaster(2021)).toEqual({ month: 4, day: 4 });
		expect(calcEaster(2027)).toEqual({ month: 3, day: 28 });
		expect(calcEaster(2041)).toEqual({ month: 4, day: 21 });
	});
	it("Calculates the number of days for the date", () => {
		expect(convertDateToDayNumber({ year: 1990, month: 11 })).toBe(304);
		expect(convertDateToDayNumber({ year: 2000, month: 5 })).toBe(121);
		expect(convertDateToDayNumber({ year: 2019, month: 1 })).toBe(0);
		expect(convertDateToDayNumber({ year: 2016, month: 1 })).toBe(0);
		expect(convertDateToDayNumber({ year: 2027, month: 9 })).toBe(243);
		expect(convertDateToDayNumber({ year: 2028, month: 9 })).toBe(244);
	});
	it("Calculates the number of days for the date", () => {
		expect(convertJulianToGreenwichDate(2455002.25)).toEqual({ year: 2009, month: 6, day: 19.75 });
	});
});