import i18n from "../i18n/i18n";
const timeSince = date => {
	const seconds = Math.floor((new Date() - new Date(date)) / 1000);

	let interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return interval + i18n.t("yearsAgo");
	}
	interval = Math.floor(seconds / 2592000);
	if (interval > 1) {
		return interval + i18n.t("monthsAgo");
	}
	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return interval + i18n.t("daysAgo");
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return interval + i18n.t("hoursAgo");
	}
	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return interval + i18n.t("minutesAgo");
	}
	return Math.floor(seconds < 0 ? 0 : seconds) + i18n.t("secondsAgo");
};

export default timeSince;
