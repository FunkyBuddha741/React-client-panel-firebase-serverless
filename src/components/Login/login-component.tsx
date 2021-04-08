import React, { useEffect, useState } from "react";
import {
	InputContainer,
	InputEmail,
	InputField,
	InputPassword,
	InputTitle,
	InvalidField,
	LoginButton,
	LoginLogo,
	LoginText,
} from "./login-style";
import { auth } from "../../redux/store";
import { notifyUser } from "../../redux/Notifyuser/notifyuser.actions";
import { useSelector, useDispatch } from "react-redux";

function LoginInput() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const {
		notify: { message, messageType },
	}: any = useSelector((state) => state);

	const handleUserLogin = (e: any) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;

				// ...
			})
			.catch((error) => {
				dispatch(notifyUser("Invalid Login Credentials", "error"));
				setTimeout(() => dispatch({ type: "CLEAR_NOTIFY" }), 2500);
			});
	};

	return (
		<InputContainer>
			{message ? (
				<InvalidField>
					<p style={{ padding: "10px" }}>{message}</p>
				</InvalidField>
			) : null}
			<InputTitle>
				<LoginLogo className="fas fa-lock fa-2x" />
				<LoginText>LogIn</LoginText>
			</InputTitle>
			<InputField>
				<form onSubmit={handleUserLogin}>
					<label>Email</label>
					<InputEmail
						type="email"
						placeholder="Enter email.."
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<InputPassword
						type="password"
						name="password"
						placeholder="Enter password.."
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<LoginButton type="submit">Login</LoginButton>
				</form>
			</InputField>
		</InputContainer>
	);
}

export default LoginInput;
