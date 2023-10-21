import { describe, it, expect } from "vitest";
import { getDayWeekName } from "./get-day-week-name";

describe("Time", () => {
	it("Determines the name of the day of the week", () => {
		expect(getDayWeekName(2455001.5)).toBe(5);
	});
});
