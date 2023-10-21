import { describe, it, expect } from "vitest";
import { calcEaster } from "./calc-easter";

describe("Time", () => {
	it("Calculates the date of Easter", () => {
		expect(calcEaster(2009)).toEqual({ month: 4, day: 12 });
		expect(calcEaster(2012)).toEqual({ month: 4, day: 8 });
		expect(calcEaster(2021)).toEqual({ month: 4, day: 4 });
		expect(calcEaster(2027)).toEqual({ month: 3, day: 28 });
		expect(calcEaster(2041)).toEqual({ month: 4, day: 21 });
	});
});
