import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
const axiosClient = axios.create({
    baseURL:`${ API_BASE_URL}/api/v1`,
});

export default axiosClient;