import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import DashboardTable from "../../components/dashboard/dashboard.component";
import {
	AddClientButton,
	DashboardContainer,
	DashboardHeading,
	DashboardLogo,
	DashboardMain,
	DashboardTitle,
	TotalAmount,
} from "./dashboard.page.styles";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

function Dashboard() {
	const [totalAmount, setTotalAmount] = useState("");

	useFirestoreConnect(["clients"]);

	const clients = useSelector((state: any) => state.firestore.ordered.clients);

	useEffect(() => {
		if (isLoaded(clients)) {
			const total = clients.reduce((acc: any, client: any) => {
				return acc + parseFloat(client.balance.toString());
			}, 0);
			setTotalAmount(total);
		}
	}, [clients]);

	return (
		<DashboardMain >
			<DashboardContainer>
				<DashboardHeading>
					<DashboardLogo className="fas fa-users fa-2x">
						<DashboardTitle>Clients</DashboardTitle>
					</DashboardLogo>
					<TotalAmount>
						Total Balance: <span>${totalAmount}</span>
					</TotalAmount>
					<AddClientButton to="/client/add">
						<i className="fas fa-plus fa-1x"></i>
						<h3>Add</h3>
					</AddClientButton>
				</DashboardHeading>
				<DashboardTable />
			</DashboardContainer>
		</DashboardMain>
	);
}

export default Dashboard;
