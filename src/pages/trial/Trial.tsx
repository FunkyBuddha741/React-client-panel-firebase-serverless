import React from "react";
import { useFirebase } from "react-redux-firebase";

export default function Todos() {
	const firebase = useFirebase();

	const addSampleTodo = () => {
		firebase.firestore().collection("clients").add({
			firstName: "John ",
			lastName: "Doe",
			phoneNo: "444-444-444",
			email: "Jdoe@gmail.com",
			balance: "2000",
		});
	};

	return (
		<div>
			<h1>New Sample Todo</h1>
			<button onClick={addSampleTodo}>Add</button>
		</div>
	);
}
