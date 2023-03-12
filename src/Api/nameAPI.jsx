import AxiosClient from "./AxiosClient";
const nameApi = {
    getAll() {
        return AxiosClient.get();
    },
    getItem(param) {
        const url = "/ability";
        return AxiosClient.get(url);
    },
};
export default nameApi;
