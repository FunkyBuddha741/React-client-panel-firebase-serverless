import React from "react";
import EditClient from "../../components/ClientEdit/edit.client.component";
import { ClientContainer, BackToDashboard } from "./client.edit.styled";

function ClientEditPage() {
	return (
		<ClientContainer>
			<BackToDashboard to="/dashboard">
				<i className="fas fa-arrow-circle-left"></i>
				<h5 style={{ paddingLeft: "10px" }}>Back to dashboard</h5>
			</BackToDashboard>
			<EditClient />
		</ClientContainer>
	);
}

export default ClientEditPage;
