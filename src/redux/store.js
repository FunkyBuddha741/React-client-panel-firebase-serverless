import { createStore, combineReducers } from "redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import {
	reactReduxFirebaseProvider,
	firebaseReducer,
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import { notifyReducer } from "./Notifyuser/notifyuser.reducer";
import { UserSettingsReducer } from "./SettingsUser/settings.user.reducer";


const firebaseConfig = {
	apiKey: "AIzaSyAcv5q21NzRbzT125N7UKxUKj3dm6yx8SY",
	authDomain: "client-panel-project-7cc01.firebaseapp.com",
	projectId: "client-panel-project-7cc01",
	storageBucket: "client-panel-project-7cc01.appspot.com",
	messagingSenderId: "174258306820",
	appId: "1:174258306820:web:871d2a2e60d76bd6811a51",
	measurementId: "G-K2KTCSQFGT",
};

// react-redux-firebase config
const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true,
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
export const firestore = firebase.firestore();

export const auth = firebase.auth();

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	notify: notifyReducer,
	settings: UserSettingsReducer,
});

// create store with reducers and initial state

// Check Localstorage

if (localStorage.getItem("settings") == null) {
	let defaultSettings = {
		allowReg: false,
		disableBalOnAdd: true,
		disableBalOnEdit: false,
	};
	// set localstorage
	localStorage.setItem("settings", JSON.stringify(defaultSettings));
}

const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };


const store = createStore(
	rootReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

export default store;
