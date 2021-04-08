import { NOTIFY_USER } from "./notifyuser.types";
import { AnyAction } from "redux";
import { Dispatch } from "react";

export const notifyUser = (message: any, messageType: any) => {
	return {
		type: NOTIFY_USER,
		payload: { message, messageType },
	};
};
