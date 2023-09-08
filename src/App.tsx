import React, { Suspense } from "react";
import Header from "./components/header/header.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/login-page";
import Dashboard from "./pages/dashboard/dashboard.page";
import Register from "./pages/Register/Register-page-component";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from "./redux/store";
import AddNewClients from "./pages/AddClients/Add.New.Client.page";
import ClientDetailsPage from "./pages/ClientDetailsPage/client.details.page.component";
import ClientEditPage from "./pages/ClientEditPage/Client.edit.page.component";
import {
	UserIsAuthenticated,
	UserIsNotAuthenticated,
} from "./components/helper/auth";
import Spinner from "./components/spinner/Spinner";
import SettingsPage from "./pages/Settings/settings.page.component";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<Router>
					<Header />
					<Route
						render={({ location }) => (
							<TransitionGroup>
								<CSSTransition
									key={location.key}
									timeout={300}
									classNames="fade"
								>
									<Switch location={location}>
										<Route
											exact
											path="/login"
											component={UserIsNotAuthenticated(Login)}
										/>
										<Route
											exact
											path="/register"
											component={UserIsNotAuthenticated(Register)}
										/>
										<Route
											exact
											path="/"
											component={UserIsAuthenticated(Dashboard)}
										/>
										<Route
											exact
											path="/client/add"
											component={UserIsAuthenticated(AddNewClients)}
										/>

										<Route
											exact
											path="/client/:id"
											component={UserIsAuthenticated(ClientDetailsPage)}
										/>
										<Route
											exact
											path="/client/edit/:id"
											component={UserIsAuthenticated(ClientEditPage)}
										/>
										<Route
											exact
											path="/settings"
											component={UserIsAuthenticated(SettingsPage)}
										/>
										{/* redirects to my login page if url is gibberish */}
										<Route path="*" component={Dashboard} />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						)}
					/>
				</Router>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

export default App;
