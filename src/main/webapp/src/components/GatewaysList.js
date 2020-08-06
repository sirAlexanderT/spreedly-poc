import React, {useEffect, useState} from "react";
import GatewayService from "../services/GatewayService";

const GatewaysList = () => {
    const [gateways, setGateways] = useState([]);
    const [filteredGateways, setFilteredGateways] = useState([]);
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
        let filtered = gateways.filter(str => str.name.toLowerCase().includes(searchName.toLowerCase()));
        setFilteredGateways(filtered);
    };

    const handleInputChange = event => {
        const {name, value} = event.target;
        setCurrentCredentials({...currentCredentials, [name]: value});
    };

    const createGateway = () => {
        let data = {
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
                const gatewaysResponse = response.data.gateways;
                setGateways(gatewaysResponse);
                setFilteredGateways(gatewaysResponse);
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
        let filtered = gateways.filter(str => str.name.toLowerCase().includes(searchName.toLowerCase()));
        setFilteredGateways(filtered);
    };

    return (
        <div className="list row">
            <div className="col-md-12">
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
            <div className="col-md-5 mt-3">
                <h4>Supported Gateways</h4>
                <i>Showing <b>{filteredGateways.length}</b> of <b>{gateways.length}</b></i>

                <ul className="list-group scroll overflow-auto mt-3">
                    {
                        filteredGateways &&
                        filteredGateways.map((gateway, index) => (
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
                    className="m-3 btn btn-sm btn-secondary"
                    onClick={removeAllSupportedGateways}
                >
                    Refresh
                </button>
            </div>
            <div className="col-md-1"/>
            <div className="col-md-6 mt-3">
                {currentGateway ? (
                    <div>
                        <h4>Gateway</h4>
                        <div className="mt-3">
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
                        <h5><i>Please click on a Gateway...</i></h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GatewaysList;