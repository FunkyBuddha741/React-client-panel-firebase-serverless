import React, { useEffect, useState } from "react";
import {
	AddInputContainer,
	AddInputEmail,
	AddInputField,
	AddInputPassword,
	AddInputTitle,
	AddLoginButton,
	AddInputLogo,
	AddClientTitle,
} from "./edit.client.styles";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";

function EditClient() {
	const [pullClient, setpullClient] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNo: "",
		balance: "",
	});

	const { id }: any = useParams();

	useFirestoreConnect(["clients"]);

	const clients = useSelector((state: any) => state.firestore.ordered.clients);

	useEffect(() => {
		if (clients) {
			const filteredItems = clients.filter((client: any) => client.id === id);
			console.log(filteredItems);
			setpullClient(filteredItems[0]);
		}
	}, [clients, id]);

	const firestore = useFirestore();

	const history = useHistory();

	const handleClientEdit = (e: any) => {
		e.preventDefault();
		if (pullClient.balance === "") {
			pullClient.balance = "0";
		}
		firestore.collection("clients").doc(id).update(pullClient);
		history.push("/dashboard");
	};

	return (
		<AddInputContainer>
			<AddInputTitle>
				<AddInputLogo className="fas fa-edit" />
				<AddClientTitle>Edit Client</AddClientTitle>
			</AddInputTitle>
			<AddInputField>
				<form onSubmit={handleClientEdit}>
					<label>First Name</label>
					<AddInputEmail
						type="text"
						placeholder="Enter firstname.."
						value={pullClient.firstName}
						onChange={(e) =>
							setpullClient({ ...pullClient, firstName: e.target.value })
						}
					/>
					<label>Last Name</label>
					<AddInputEmail
						type="text"
						placeholder="Enter lastname.."
						value={pullClient.lastName}
						onChange={(e) =>
							setpullClient({ ...pullClient, lastName: e.target.value })
						}
					/>
					<label>Email</label>
					<AddInputPassword
						type="email"
						name="email"
						placeholder="Enter email.."
						value={pullClient.email}
						onChange={(e) =>
							setpullClient({ ...pullClient, email: e.target.value })
						}
					/>
					<label>PhoneNo</label>
					<AddInputPassword
						type="text"
						name="phone"
						placeholder="Enter PhoneNo.."
						value={pullClient.phoneNo}
						onChange={(e) =>
							setpullClient({ ...pullClient, phoneNo: e.target.value })
						}
					/>
					<label>Balance</label>
					<AddInputPassword
						type="number"
						name="balance"
						placeholder="Enter balance.."
						value={pullClient.balance}
						onChange={(e) =>
							setpullClient({ ...pullClient, balance: e.target.value })
						}
					/>
					<AddLoginButton type="submit">Submit</AddLoginButton>
				</form>
			</AddInputField>
		</AddInputContainer>
	);
}

export default EditClient;
