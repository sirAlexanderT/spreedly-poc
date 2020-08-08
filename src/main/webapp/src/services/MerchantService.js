import http from "../http-common";

const getAllMerchants = () => {
    return http.get("/merchants");
};

export default {
    getAllMerchants
};