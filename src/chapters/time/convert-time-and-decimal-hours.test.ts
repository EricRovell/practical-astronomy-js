import { describe, it, expect } from "vitest";
import { convertDecimalHoursToTime, convertTimeToDecimalHours } from "./convert-time-and-decimal-hours";

describe("Time", () => {
	it("Converts decimal hours to time", () => {
		expect(convertDecimalHoursToTime(18.52416667)).toEqual({ hours: 18, minutes: 31, seconds: 27 });
	});
	it("Converts time to decimal form", () => {
		expect(convertTimeToDecimalHours({ hours: 18, minutes: 31, seconds: 27 })).toBe(18.52416667);
	});
});

