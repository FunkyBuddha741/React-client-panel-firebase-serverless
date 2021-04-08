import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	ClientDetailsContainer,
	ClientDetailsHeader,
	ClientHeaderTitle,
	ClientMoreInfoContainer,
} from "./setting.styled";
import {
	setAllowRegistration,
	setDisableBalanceOnAdd,
	setDisableBalanceOnEdit,
} from "../../redux/SettingsUser/settings.user.actions";

function SettingsComponent() {
	const {
		settings: { allowReg, disableBalOnAdd, disableBalOnEdit },
	}: any = useSelector((state) => state);

	console.log(allowReg, disableBalOnAdd, disableBalOnEdit);

	const dispatch = useDispatch();

	const allowRegistration = () => {
		dispatch(setAllowRegistration());
	};
	const disableBalanceOnAdd = () => {
		dispatch(setDisableBalanceOnAdd());
	};
	const disableBalanceOnEdit = () => {
	
		dispatch(setDisableBalanceOnEdit());
	};

	return (
		<ClientDetailsContainer>
			<ClientDetailsHeader>
				<ClientHeaderTitle style={{ padding: "10px 15px" }}>
					Edit settings
				</ClientHeaderTitle>
			</ClientDetailsHeader>
			<ClientMoreInfoContainer>
				<div style={{ marginBottom: "20px" }}>
					{" "}
					<label style={{ paddingRight: "5px" }}>Allow Registration</label>
					<input
						type="checkbox"
						name="allowRegistration"
						checked={allowReg}
						onChange={allowRegistration}
					/>
				</div>
				<div style={{ marginBottom: "20px" }}>
					{" "}
					<label style={{ paddingRight: "5px" }}>Disable Balance on Add</label>
					<input
						type="checkbox"
						name="Disable balance on Add"
						checked={disableBalOnAdd}
						onChange={disableBalanceOnAdd}
					/>
				</div>
				<div style={{ marginBottom: "20px" }}>
					{" "}
					<label style={{ paddingRight: "5px" }}>Disable Balance on Edit</label>
					<input
						type="checkbox"
						name="Disable balance on Edit"
						checked={disableBalOnEdit}
						onChange={disableBalanceOnEdit}
					/>
				</div>
			</ClientMoreInfoContainer>
		</ClientDetailsContainer>
	);
}

export default SettingsComponent;
