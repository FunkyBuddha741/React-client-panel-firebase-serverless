import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	height: 50px;
	width: 100%;
	margin-bottom: 25px;
	background-color: #0a75ad;
	display: flex;
`;

export const HeaderContainerLimit = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderLeftContainer = styled.div`
	width: 250px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LeftLinkBranding = styled.div`
	color: white;
	font-size: 20px;
	font-weight: bold;
`;

export const LeftLinkDashboard = styled(Link)`
	text-decoration: none;
	color: white;
	font-size: 14px;
	opacity: 80%;
`;

export const HeaderRightContainer = styled.div`
	color: white;

	display: flex;
	justify-content: space-between;
`;

export const RightUserEmail = styled(Link)`
	text-decoration: none;
	color: white;
	margin-right: 15px;
	font-size: 12px;
	opacity: 80%;
`;

export const RightUserSettings = styled(Link)`
	text-decoration: none;
	color: white;
	font-size: 12px;
	opacity: 80%;
`;

export const RightUserLogout = styled(Link)`
	text-decoration: none;
	color: white;
	margin-left: 15px;
	font-size: 12px;
	opacity: 80%;
`;

export const RightLinkRegister = styled(Link)`
	text-decoration: none;
	color: white;
	margin-right: 8px;
`;

export const RightLinkLogin = styled(Link)`
	text-decoration: none;
	color: white;
	margin-left: 8px;
`;
