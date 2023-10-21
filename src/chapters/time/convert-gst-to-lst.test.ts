import { describe, it, expect } from "vitest";
import { convertGSTtoLST, convertLSTtoGST } from "./convert-gst-to-lst";

describe("Time", () => {
	it("Converts GST to LST", () => {
		expect(convertGSTtoLST({ hours: 4, minutes: 40, seconds: 5.23 }, -64)).toEqual({ hours: 0, minutes: 24, seconds: 5.23 })
	});
	it("Converts LST to GST", () => {
		expect(convertLSTtoGST({ hours: 0, minutes: 24, seconds: 5.23 }, -64)).toEqual({ hours: 4, minutes: 40, seconds: 5.23 })
	});
});
