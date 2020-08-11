import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import GatewaysList from "./components/GatewaysList";
import Store from "./store";
import CustomerDetails from "./components/CustomerDetails";

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/gateways" className="navbar-brand">
                        qudini-spreedly
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/gateways"} className="nav-link">
                                Gateways
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/store"} className="nav-link">
                                Store
                            </Link>
                        </li>
                    </div>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/gateways"]} component={GatewaysList} />
                        <Route exact path="/store" component={Store} />
                        <Route exact path="/details" component={CustomerDetails} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;