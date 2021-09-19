import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/firebaseState";
import { About } from "./pages/About";
import { From } from "./pages/From";
import { Home } from "./pages/Home";

function App() {
	return (
		<FirebaseState>
			<AlertState>
				<BrowserRouter>
					<Navbar />
					<div className="container pt-4">
						<Alert />
						<Switch>
							<Route path={"/"} exact component={Home} />
							<Route path={"/about"} component={About} />
							<Route path={"/from"} component={From} />
						</Switch>

					</div>
				</BrowserRouter>
			</AlertState>
		</FirebaseState>
	);
}

export default App;
