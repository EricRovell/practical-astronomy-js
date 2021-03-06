import {
	calcEaster,
	convertDateToDayNumber,
	convertJulianToGreenwichDate,
	convertGreenwichToJulianDate,
	convertTimeToDecimalHours,
	convertDecimalHoursToTime,
	getDayWeekName,
	convertLCTToUT,
	convertUTtoGST,
	convertGSTtoUT,
	checkGSTtoUT,
	convertGSTtoLST,
	convertLSTtoGST
} from "@time";

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
	it("Convert Greenwich calendar date to Julian", () => {
		expect(convertGreenwichToJulianDate({ year: 2009, month: 6, day: 19.75 })).toBe(2455002.25);
	});
	it("Determines the name of the day of the week", () => {
		expect(getDayWeekName(2455001.5)).toBe(5);
	});
	it("Converts time to decimal form", () => {
		expect(convertTimeToDecimalHours({ hours: 18, minutes: 31, seconds: 27 })).toBe(18.52416667);
	});
	it("Converts decimal hours to time", () => {
		expect(convertDecimalHoursToTime(18.52416667)).toEqual({ hours: 18, minutes: 31, seconds: 27 });
	});
	it("Converts Local Civil Time to Universal", () => {
		expect(convertLCTToUT({ year: 2013, month: 7, day: 1, hours: 3, minutes: 37, seconds: 0,	daylightSaving: 1, zoneCorrection: 4 }))
			.toEqual({ year: 2013, month: 6, day: 30, hours: 22, minutes: 37, seconds: 0 });
	});
	it("Converts Universal Time (UT) to Greenwich Sidereal Time (GST)", () => {
		expect(convertUTtoGST({	year: 1980,	month: 4,	day: 22, hours: 14,	minutes: 36, seconds: 51.67 }))
			.toEqual({ hours: 4, minutes: 40, seconds: 5.23 });
	});
	it("Converts Greenwich Sidereal Time (GST) to Universal Time (UT)", () => {
		expect(convertGSTtoUT({	year: 1980,	month: 4,	day: 22, hours: 4,	minutes: 40, seconds: 5.23 }))
			.toEqual({ hours: 14, minutes: 36, seconds: 51.67 });
		expect(checkGSTtoUT({	year: 1980,	month: 4,	day: 22, hours: 4,	minutes: 40, seconds: 5.23 }))
			.toEqual(true);
	});
	it("Converts GST to LST", () => {
		expect(convertGSTtoLST({ hours: 4, minutes: 40, seconds: 5.23 }, -64)).toEqual({ hours: 0, minutes: 24, seconds: 5.23 })
	});
	it("Converts LST to GST", () => {
		expect(convertLSTtoGST({ hours: 0, minutes: 24, seconds: 5.23 }, -64)).toEqual({ hours: 4, minutes: 40, seconds: 5.23 })
	});
});