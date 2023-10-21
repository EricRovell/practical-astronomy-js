import { describe, expect, it } from "vitest"; 
import { toDegrees, toDecimalDegrees } from "./decimal-degrees";

describe("Coordinates", () => {
	it("Transforms decimal degrees value to sexagesimal form", () => {
		expect(toDegrees(182.5241667)).toEqual({ degrees: 182, minutes: 31, seconds: 27 });
	});
	it("Transforms degrees to decimal form", () => {
		expect(toDecimalDegrees({ degrees: 182, minutes: 31, seconds: 27 })).toEqual(182.5241667);
	});
});
