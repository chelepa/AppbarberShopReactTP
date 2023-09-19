import axios from "axios";
import { LoginRequest } from "../types/LoginRequest";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})


export const AuthenticationApi = () => {
    return ({
        signin: async (request: LoginRequest) => {
            var login = request.login;
            var password = request.password;
            const response = await api.post("/v1/Authentication", {login, password });
            return response.data;
        }
    });
};