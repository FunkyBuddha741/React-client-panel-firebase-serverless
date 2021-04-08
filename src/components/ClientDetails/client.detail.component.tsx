import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	ClientDetailsContainer,
	ClientDetailsHeader,
	ClientHeaderTitle,
	ClientIdentificationContainer,
	ClientMoreInfoContainer,
} from "./client.detail.styles";
import {
	useFirestoreConnect,
	isLoaded,
	isEmpty,
	useFirestore,
} from "react-redux-firebase";

function ClientDetails() {
	const [isTrue, setIsTrue] = useState(false);
	const [newBalance, setNewBalance] = useState("");
	const [isClientUpdated, setIsClientUpdated] = useState(false);
	const [updatedClients, setUpdatedClients] = useState<any>([]);

	let balanceForm: any = "";

	const firestore = useFirestore();

	const { id }: any = useParams();

	useFirestoreConnect(["clients"]);

	const clients = useSelector((state: any) => state.firestore.ordered.clients);

	const {
		settings: { disableBalOnEdit },
	}: any = useSelector((state) => state);

	useEffect(() => {
		if (clients) {
			let filteredItems = clients.filter((client: any) => client.id === id);
			setIsClientUpdated(true);
			setUpdatedClients(filteredItems);
		} else {
			setIsClientUpdated(false);
		}
	}, [clients, id]);

	const handleBalanceUpdate = (e: any) => {
		e.preventDefault();
		console.log("clicked");
		firestore.collection("clients").doc(id).update({ balance: newBalance });
	};

	if (isTrue) {
		balanceForm = (
			<form style={{ padding: " 0 10px" }} onSubmit={handleBalanceUpdate}>
				<input
					type="text"
					placeholder="Enter New Balance.."
					style={{
						padding: "12px 20px",
						margin: "8px 0",
						display: " inline-block",
						border: " 1px solid #ccc",
						borderRadius: " 4px",
						boxSizing: "border-box",
					}}
					value={newBalance}
					onChange={(e) => setNewBalance(e.target.value)}
					disabled={disableBalOnEdit}
				/>
				<button
					type="submit"
					style={{
						backgroundColor: "#4caf50",
						color: "white",
						padding: "14px 20px",
						margin: "8px 0",
						border: "none",
						borderRadius: "4px",
						cursor: "pointer",
					}}
				>
					Ok
				</button>
			</form>
		);
	} else {
	}

	return (
		<ClientDetailsContainer>
			<ClientDetailsHeader>
				<ClientHeaderTitle style={{ padding: "10px 15px" }}>
					{isClientUpdated ? updatedClients[0].firstName : <h4>Loading...</h4>}
				</ClientHeaderTitle>
			</ClientDetailsHeader>
			<ClientIdentificationContainer>
				<div>
					<h2 style={{ padding: "20px" }}>Client Id: {id} </h2>
				</div>
				<div>
					<div style={{ padding: "20px" }}>
						Balance: $
						{isClientUpdated ? updatedClients[0].balance : <h6>Loading...</h6>}
						<i
							className="far fa-edit"
							style={{ cursor: "pointer", color: "#0A75AD", marginLeft: "8px" }}
							onClick={() => setIsTrue(!isTrue)}
						></i>
					</div>
					{balanceForm}
				</div>
			</ClientIdentificationContainer>
			<ClientMoreInfoContainer>
				<div>
					<div style={{ padding: "10px" }}>
						Contact email:{" "}
						{isClientUpdated ? updatedClients[0].email : <h6>Loading...</h6>}
					</div>
				</div>
				<div>
					<div style={{ padding: "10px" }}>
						Contact PhoneNo:{" "}
						{isClientUpdated ? updatedClients[0].phoneNo : <h6>Loading...</h6>}
					</div>
				</div>
			</ClientMoreInfoContainer>
		</ClientDetailsContainer>
	);
}

export default ClientDetails;
