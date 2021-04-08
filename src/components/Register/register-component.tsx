import React, { useState } from "react";
import {
	RegInputContainer,
	RegInputEmail,
	RegInputField,
	RegInputPassword,
	RegInputTitle,
	RegLoginButton,
	RegLoginLogo,
	RegLoginText,
	InvalidField,
} from "./register-styles";
import { notifyUser } from "../../redux/Notifyuser/notifyuser.actions";
import { auth } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

function RegisterInput() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const {
		notify: { message, messageType },
	}: any = useSelector((state) => state);

	const handleRegisterButton = (e: any) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password).catch((err) => {
			dispatch(notifyUser("Invalid Registration", "error"));
			setTimeout(() => dispatch({ type: "CLEAR_NOTIFY" }), 2500);
		});
	};

	return (
		<RegInputContainer>
			{message ? (
				<InvalidField>
					<p style={{ padding: "10px" }}>{message}</p>
				</InvalidField>
			) : null}
			<RegInputTitle>
				<RegLoginLogo className="fas fa-lock fa-2x" />
				<RegLoginText>Register</RegLoginText>
			</RegInputTitle>
			<RegInputField>
				<form action="">
					<label>Email</label>
					<RegInputEmail
						type="email"
						placeholder="Enter email.."
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<RegInputPassword
						type="password"
						name="password"
						placeholder="Enter password.."
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<RegLoginButton onClick={handleRegisterButton}>
						Register
					</RegLoginButton>
				</form>
			</RegInputField>
		</RegInputContainer>
	);
}
export default RegisterInput;
