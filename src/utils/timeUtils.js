import moment, { utc } from "moment";
import "moment-timezone";

const LONDON_TIME_ZONE = "Europe/London";
const REQUIRED_DATE_FORMAT = "yyyy-MM-DD";

const getCurrentDay = () => {
	return new Date(utc().tz(LONDON_TIME_ZONE).format(REQUIRED_DATE_FORMAT));
};

const getYearAndMonthFromDate = (dateString) => {
	const date = moment(dateString); // "ddd MMM DD YYYY HH:mm:ss"

	return new Date(date.format("YYYY.MM"));
};

export { getCurrentDay, getYearAndMonthFromDate };
