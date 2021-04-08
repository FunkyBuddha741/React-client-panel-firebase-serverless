import {
	ALLOW_REGISTRATION,
	DISABLE_BALANCE_ON_ADD,
	DISABLE_BALANCE_ON_EDIT,
} from "./settings.user.types";

const initialState = {};

export const UserSettingsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ALLOW_REGISTRATION:
			return {
				...state,
				allowReg: action.payload,
			};

		case DISABLE_BALANCE_ON_ADD:
			return {
				...state,
				disableBalOnAdd: action.payload,
			};

		case DISABLE_BALANCE_ON_EDIT:
			return {
				...state,
				disableBalOnEdit: action.payload,
			};

		default:
			return state;
	}
};
