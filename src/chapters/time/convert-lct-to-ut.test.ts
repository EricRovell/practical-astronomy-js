import { describe, it, expect } from "vitest";
import { convertLCTToUT } from "./convert-lct-to-ut";

describe("Time", () => {
	it("Converts Local Civil Time to Universal", () => {
		expect(convertLCTToUT({ year: 2013, month: 7, day: 1, hours: 3, minutes: 37, seconds: 0,	daylightSaving: 1, zoneCorrection: 4 }))
			.toEqual({ year: 2013, month: 6, day: 30, hours: 22, minutes: 37, seconds: 0 });
	});
});
