import {
	convertDecimalHoursToTime,
	convertGSTtoLST,
	convertLCTToUT,
	convertTimeToDecimalHours,
	convertUTtoGST
} from "@time";
import type { Date, Time, LCT } from "../../types";

interface RA {
	RA: Time;
	LCT: LCT;
	local: Date;
	longitude: number;
}

export function rightAscensionToHourAngle(input: RA): Time {
	const UT = convertLCTToUT(input.LCT);
	const GST = convertUTtoGST(UT);
	const LST = convertGSTtoLST(GST, input.longitude);
	const RA = convertTimeToDecimalHours(input.RA);
	const H1 = LST.hours - RA;
	const H = (H1 < 0) ? 24 + H1 : H1;

	return convertDecimalHoursToTime(H);
}
