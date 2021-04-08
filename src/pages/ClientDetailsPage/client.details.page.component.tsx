import React from "react";
import { useSelector } from "react-redux";
import ClientDetails from "../../components/ClientDetails/client.detail.component";
import { BackToDashboard } from "../AddClients/Add.New.Page.styled";
import { ClientDetailsButtonContainer } from "./client.details.page.styled";
import {
	useFirestoreConnect,
	isLoaded,
	isEmpty,
	useFirestore,
} from "react-redux-firebase";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

function ClientDetailsPage() {
	const { id }: any = useParams();

	const history = useHistory();

	const firestore = useFirestore();

	// deleting clients
	const handleClientDelete = () => {
		firestore.collection("clients").doc(id).delete();
		history.push("/dashboard");
	};

	// editing clients
	// const handleClientEdit = () => {
	//     firestore.collection('clients').doc(id).update()
	// }

	return (
		<div>
			<ClientDetailsButtonContainer>
				<BackToDashboard to="/dashboard">
					<i className="fas fa-arrow-circle-left"></i>
					<h5 style={{ paddingLeft: "5px" }}>Back to dashboard</h5>
				</BackToDashboard>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<Link to={`/client/edit/${id}`}>
						<button
							style={{
								padding: "8px",
								border: "none",
								backgroundColor: "#0a75ad",
								color: "white",
								cursor: "pointer",
								borderRadius: "2px",
							}}
						>
							Edit
						</button>
					</Link>
					<button
						style={{
							padding: "8px",
							border: "none",
							backgroundColor: "#ad420a",
							color: "white",
							cursor: "pointer",
							borderRadius: "2px",
						}}
						onClick={handleClientDelete}
					>
						Delete
					</button>
				</div>
			</ClientDetailsButtonContainer>
			<ClientDetails />
		</div>
	);
}

export default ClientDetailsPage;
