import { describe, it, expect } from "vitest";
import { convertUTtoGST, convertGSTtoUT, checkGSTtoUT } from "./convert-ut-to-gst";

describe("Time", () => {
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
});
