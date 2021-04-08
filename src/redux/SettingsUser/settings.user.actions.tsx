import {
	ALLOW_REGISTRATION,
	DISABLE_BALANCE_ON_EDIT,
	DISABLE_BALANCE_ON_ADD,
} from "./settings.user.types";

export const setAllowRegistration = () => {
	// get from local storage
	const settings = JSON.parse(localStorage.getItem("settings") || "{}");

	// toggle the value
	settings.allowReg = !settings.allowReg;

	// set in local storage
	localStorage.setItem("settings", JSON.stringify(settings));

	return {
		type: ALLOW_REGISTRATION,
		payload: settings.allowReg,
	};
};

export const setDisableBalanceOnAdd = () => {
	// get from local storage
	const settings = JSON.parse(localStorage.getItem("settings") || "{}");

	// toggle
	settings.disableBalOnAdd = !settings.disableBalOnAdd;

	// set local storage
	localStorage.setItem("settings", JSON.stringify(settings));
	return {
		type: DISABLE_BALANCE_ON_ADD,
		payload: settings.disableBalOnAdd,
	};
};

export const setDisableBalanceOnEdit = () => {
	// get from local storage
	const settings = JSON.parse(localStorage.getItem("settings") || "{}");

	// toggle
	settings.disableBalOnEdit = !settings.disableBalOnEdit;

	// set local storage
	localStorage.setItem("settings", JSON.stringify(settings));

	return {
		type: DISABLE_BALANCE_ON_EDIT,
		payload: settings.disableBalOnEdit,
	};
};
