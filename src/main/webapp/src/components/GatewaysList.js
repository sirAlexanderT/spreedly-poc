import React, {useEffect, useState} from "react";
import GatewayService from "../services/GatewayService";
import {Link} from "react-router-dom";

const GatewaysList = () => {
    const [gateways, setGateways] = useState([]);
    const [currentGateway, setCurrentGateway] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        retrieveGateways();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const retrieveGateways = () => {
        GatewayService.getSupportedGateways()
            .then(response => {
                setGateways(response.data.gateways);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveGateways();
        setCurrentGateway(null);
        setCurrentIndex(-1);
    };

    const setActiveGateway = (gateway, index) => {
        setCurrentGateway(gateway);
        setCurrentIndex(index);
    };

    const removeAllSupportedGateways = () => {
        GatewayService.removeAllSupportedGateways()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByName = () => {
        GatewayService.findByName(searchName)
            .then(response => {
                setGateways(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={searchName}
                        onChange={onChangeSearchName}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByName}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Gateways List</h4>

                <ul className="list-group">
                    {gateways &&
                    gateways.map((gateway, index) => (
                        <li
                            className={
                                "list-group-item " + (index === currentIndex ? "active" : "")
                            }
                            onClick={() => setActiveGateway(gateway, index)}
                            key={index}
                        >
                            {gateway.name}
                        </li>
                    ))}
                </ul>

                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllSupportedGateways}
                >
                    Remove All
                </button>
            </div>
            <div className="col-md-6">
                {currentGateway ? (
                    <div>
                        <h4>Gateway</h4>
                        <div>
                            <label>
                                <strong>Name:</strong>
                            </label>{" "}
                            {currentGateway.name}
                        </div>
                        <div>
                            <label>
                                <strong>Gateway Type:</strong>
                            </label>{" "}
                            {currentGateway.gateway_type}
                        </div>
                        <div>
                            <label>
                                <strong>Company Name:</strong>
                            </label>{" "}
                            {currentGateway.company_name }
                        </div>

                        <Link
                            to={"/gateways" + currentGateway.gateway_type}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br/>
                        <p>Please click on a Gateway...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GatewaysList;