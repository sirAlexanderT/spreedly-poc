import http from "../http-common";

const getSupportedGateways = () => {
    return http.get("/gateways/supported");
};

const removeAllSupportedGateways = () => {
    return http.delete(`/tutorials`);
};

const findByName = name => {
    return http.get(`/tutorials?name=${name}`);
};

const create = data => {
    return http.post("/gateways", data);
};

export default {
    getSupportedGateways,
    removeAllSupportedGateways,
    findByName,
    create
};