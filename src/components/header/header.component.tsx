import React, { useEffect, useState } from "react";
import { useFirebaseConnect } from "react-redux-firebase";
import {
	HeaderContainer,
	HeaderContainerLimit,
	HeaderLeftContainer,
	HeaderRightContainer,
	LeftLinkBranding,
	LeftLinkDashboard,
	RightLinkLogin,
	RightLinkRegister,
	RightUserEmail,
	RightUserLogout,
	RightUserSettings,
} from "./header.styles";
import { auth } from "../../redux/store";
import { useSelector } from "react-redux";

function Header() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
		});
	}, [auth]);

	const {
		settings: { allowReg },
	}: any = useSelector((state) => state);

	const handleLogout = () => {
		setIsAuthenticated(false);
		auth.signOut();
	};

	return (
		<HeaderContainer>
			<HeaderContainerLimit>
				<HeaderLeftContainer>
					<LeftLinkBranding>ClientPanel</LeftLinkBranding>
					{isAuthenticated ? (
						<LeftLinkDashboard to="/dashboard">Dashboard</LeftLinkDashboard>
					) : null}
				</HeaderLeftContainer>

				{isAuthenticated ? (
					<HeaderRightContainer>
						{" "}
						<RightUserEmail to="/dashboard">
							{auth.currentUser?.email}
						</RightUserEmail>
						<RightUserSettings to="/settings">Settings</RightUserSettings>
						<RightUserLogout to="/" onClick={handleLogout}>
							Logout
						</RightUserLogout>{" "}
					</HeaderRightContainer>
				) : allowReg ? (
					<HeaderRightContainer>
						{" "}
						<RightLinkRegister to="/register">Register</RightLinkRegister>
						<RightLinkLogin to="/">Login</RightLinkLogin>{" "}
					</HeaderRightContainer>
				) : null}
			</HeaderContainerLimit>
		</HeaderContainer>
	);
}

export default Header;
