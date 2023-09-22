import { Permission } from "../../hooks/Permission";
import { PermissionRequest } from "../../types/Permission";
import { permissionContext } from "./PermissionContext";

export const PermissionProvider = ({ children }: { children: JSX.Element; }) => {
    const api = Permission();

    const createByPermission = async (request: PermissionRequest) => {
        var permissionResponse = await api.create(request);
        return permissionResponse;
    };

    const getAllPermission = async () => {
        var permissionResponse = await api.getAll();
        return permissionResponse;
    };

    return (
        <permissionContext.Provider value={{createByPermission, getAllPermission}}>
            {children}
        </permissionContext.Provider>
    );
};
