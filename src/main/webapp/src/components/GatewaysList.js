import React, {useEffect, useState} from "react";
import GatewayService from "../services/GatewayService";

const GatewaysList = () => {
    const [gateways, setGateways] = useState([]);
    const [currentGateway, setCurrentGateway] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");
    const [currentCredentials, setCurrentCredentials] = useState({});

    useEffect(() => {
        retrieveGateways();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const handleInputChange = event => {
        const {name, value} = event.target;
        setCurrentCredentials({...currentCredentials, [name]: value});
    };

    const createGateway = () => {
        var data = {
            gatewayType: currentGateway.gateway_type,
            gatewayCredentials: currentCredentials
        };

        console.log(" we have some data - woohoo! ", data)

        GatewayService.create(data)
            .then(response => {
                console.log("we have a response", response.data);
            })
            .catch(e => {
                console.log("oh! oh!", e);
            });
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
                            {currentGateway.company_name}
                        </div>

                        {
                            currentGateway.auth_modes
                            && currentGateway.auth_modes[0].credentials.map((credential, index) => (
                                    <div key={index}>
                                        <label htmlFor={credential.name + index}>{credential.label}</label>
                                        <input type={credential.safe ? "text" : "password"}
                                               className="form-control form-control-sm"
                                               name={credential.name}
                                               id={credential.name + index}
                                               required
                                               value={currentCredentials.name}
                                               onChange={handleInputChange}/>
                                    </div>
                                )
                            )
                        }

                        <button className="m-3 btn btn-sm btn-success" onClick={createGateway}>
                            Submit
                        </button>
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