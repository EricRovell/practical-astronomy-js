import { round } from "../../helpers";
import type { Angle } from "../../types";

/**
 * Converts angle expressed in degrees to decimal form.
 */
export function toDecimalDegrees({ degrees = 0, minutes = 0, seconds = 0 }: Partial<Angle>): number {
	return round(degrees + minutes / 60 + seconds / 3600, 7);
}

/**
 * Converts andgle expressed in decimal degrees to { degrees, minutes, seconds }.
 */
export function toDegrees(value: number): Angle {
	const unsigned = Math.abs(value);
	const totalSeconds = unsigned * 3600;
	const seconds = round(totalSeconds % 60, 2);
	const correctedSeconds = (seconds === 60) ? 0 : seconds;
	const correctedRemainder = (seconds === 60) ? totalSeconds + 60 : totalSeconds;
	const minutes = Math.trunc(correctedRemainder / 60) % 60;
	const unsignedDegrees = Math.trunc(correctedRemainder / 3600);

	return {
		degrees: value < 0 ? unsignedDegrees * (-1) : unsignedDegrees,
		minutes,
		seconds: correctedSeconds
	};
}
