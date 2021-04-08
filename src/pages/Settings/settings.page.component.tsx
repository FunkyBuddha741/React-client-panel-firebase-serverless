import React from "react";
import SettingsComponent from "../../components/Setting/setting.component";
import {
	ClientContainer,
	BackToDashboard,
} from "../AddClients/Add.New.Page.styled";

function SettingsPage() {
	return (
		<>
			<BackToDashboard
				to="/"
				style={{ width: "80%", margin: "auto", paddingBottom: "15px" }}
			>
				<i className="fas fa-arrow-circle-left"></i>
				<h5 style={{ paddingLeft: "10px" }}>Back to dashboard</h5>
			</BackToDashboard>
			<SettingsComponent />
		</>
	);
}

export default SettingsPage;
