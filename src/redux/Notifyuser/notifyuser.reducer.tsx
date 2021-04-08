import { NOTIFY_USER, CLEAR_NOTIFY } from "./notifyuser.types";

const initialState = {
	message: null,
	messageType: null,
};

export const notifyReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case NOTIFY_USER:
			return {
				...state,
				message: action.payload.message,
				messageType: action.payload.messageType,
			};

		case CLEAR_NOTIFY:
			return {
				...state,
				message: null,
				messageType: null,
			};

		default:
			return state;
	}
};
