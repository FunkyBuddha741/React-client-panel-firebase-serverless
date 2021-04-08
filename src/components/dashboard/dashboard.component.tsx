import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Spinner from "../spinner/Spinner";

import {
	CustomerLink,
	TableContainer,
	TableData,
	TableHeader,
	TableRow,
} from "./dashboard.table.styled";

function DashboardTable() {
	useFirestoreConnect(["clients"]);

	const clients = useSelector((state: any) => state.firestore.ordered.clients);
	console.log(clients);

	if (!isLoaded(clients)) {
		return (
			<div>
				<Spinner />
			</div>
		);
	}

	if (isEmpty(clients)) {
		return <div> Client List is Empty</div>;
	}

	return (
		<TableContainer>
			<TableRow>
				<TableHeader>Name</TableHeader>
				<TableHeader>Email</TableHeader>
				<TableHeader>Balance</TableHeader>
				<TableHeader />
			</TableRow>

			{clients.map((client: any) => {
				const { id, firstName, lastName, email, phoneNo, balance } = client;
				return (
					<TableRow key={id}>
						<TableData>{firstName}</TableData>
						<TableData>{email}</TableData>
						<TableData>${parseFloat(balance).toFixed(2)}</TableData>
						<TableData>
							<CustomerLink to={`/client/${id}`}>Details</CustomerLink>
						</TableData>
					</TableRow>
				);
			})}
		</TableContainer>
	);
}

export default DashboardTable;
