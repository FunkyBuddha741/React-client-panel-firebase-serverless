import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardMain = styled.div`
	width: 80%;
	margin: auto;
`;

export const DashboardContainer = styled.div`
	// display: flex;
	// justify-content: space-between;
`;

export const DashboardHeading = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export const DashboardLogo = styled.i`
	display: flex;
	align-items: center;
`;

export const DashboardTitle = styled.h3`
	margin-left: 10px;
`;

export const TotalAmount = styled.h4``;

export const AddClientButton = styled(Link)`
	width: 50px;
	display: flex;
	align-items: center;
	background-color: #4caf50;
	color: white;
	padding: 2px 15px;
	margin: 8px 0;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		background-color: #0aad94;
		transition: 0.4s ease-in-out;
	}
`;
