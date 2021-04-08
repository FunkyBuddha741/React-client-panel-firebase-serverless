import React, { useState } from "react";
import {
	AddInputContainer,
	AddInputEmail,
	AddInputField,
	AddInputPassword,
	AddInputTitle,
	AddLoginButton,
	AddInputLogo,
	AddClientTitle,
} from "./add.Client.styled";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

function AddClient() {
	const [newClient, setNewClient] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNo: "",
		balance: "",
	});

	const firebase = useFirebase();
	const history = useHistory();
	const {
		settings: { disableBalOnAdd },
	}: any = useSelector((state) => state);

	const handleClientAdd = (e: any) => {
		e.preventDefault();
		if (newClient.balance === "") {
			newClient.balance = "0";
		}
		firebase.firestore().collection("clients").add(newClient);
		history.push("/dashboard");
	};

	return (
		<AddInputContainer>
			<AddInputTitle>
				<AddInputLogo className="fas fa-plus" />
				<AddClientTitle>Add Client</AddClientTitle>
			</AddInputTitle>
			<AddInputField>
				<form action="">
					<label>First Name</label>
					<AddInputEmail
						type="text"
						placeholder="Enter firstname.."
						value={newClient.firstName}
						onChange={(e) =>
							setNewClient({ ...newClient, firstName: e.target.value })
						}
					/>
					<label>Last Name</label>
					<AddInputEmail
						type="text"
						placeholder="Enter lastname.."
						value={newClient.lastName}
						onChange={(e) =>
							setNewClient({ ...newClient, lastName: e.target.value })
						}
					/>
					<label>Email</label>
					<AddInputPassword
						type="email"
						name="email"
						placeholder="Enter email.."
						value={newClient.email}
						onChange={(e) =>
							setNewClient({ ...newClient, email: e.target.value })
						}
					/>
					<label>PhoneNo</label>
					<AddInputPassword
						type="text"
						name="phone"
						placeholder="Enter PhoneNo.."
						value={newClient.phoneNo}
						onChange={(e) =>
							setNewClient({ ...newClient, phoneNo: e.target.value })
						}
					/>
					<label>Balance</label>
					<AddInputPassword
						type="number"
						name="balance"
						placeholder="Enter balance.."
						value={newClient.balance}
						onChange={(e) =>
							setNewClient({ ...newClient, balance: e.target.value })
						}
						disabled={disableBalOnAdd}
					/>
					<AddLoginButton onClick={handleClientAdd}>Submit</AddLoginButton>
				</form>
			</AddInputField>
		</AddInputContainer>
	);
}

export default AddClient;
