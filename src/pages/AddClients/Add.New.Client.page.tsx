import React from "react";
import AddClient from "../../components/addClient/add.Client.component";
import { BackToDashboard, ClientContainer } from "./Add.New.Page.styled";

function AddNewClients() {
	return (
		<ClientContainer>
			<BackToDashboard to="/dashboard">
				<i className="fas fa-arrow-circle-left"></i>
				<h5 style={{ paddingLeft: "10px" }}>Back to dashboard</h5>
			</BackToDashboard>
			<AddClient />
		</ClientContainer>
	);
}

export default AddNewClients;
