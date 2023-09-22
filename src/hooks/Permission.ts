import axios from "axios";
import { PermissionRequest } from "../types/Permission";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

const config = {
  headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      'Content-Type': 'application/json'
  }
};

export const Permission = () => {
    return ({
        create: async (request: PermissionRequest) => {
            const response = await api.post("/v1/permission", JSON.stringify(request), config);
            return response.data;
        },
        getAll: async () => {
            const response = await api.get("/v1/permission", config);
            return response.data;
        }
    });
};