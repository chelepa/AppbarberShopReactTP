import { useState } from "react";
import { PermissionRequest } from "../../types/Permission";
import { permissionContext } from "./PermissionContext";
import { Permission } from "../../hooks/Permission";


export const PermissionProvider = ({ children }: { children: JSX.Element }) => {
    // const [request, setPermissionRequest] = useState<PermissionRequest | null>(null);
    const api = Permission();

    const createByPermission = async (request: PermissionRequest) => {
        api.create(request);
        return false;
    }

    return (
        <permissionContext.Provider value={{createByPermission}}>
            {children}
        </permissionContext.Provider>
    );
}