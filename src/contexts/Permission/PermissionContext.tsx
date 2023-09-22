import {PermissionRequest, PermissionResponse } from "../../types/Permission";
import { createContext } from "react";

export type PermissionContext = {
    getAllPermission: () => Promise<any>;
    createByPermission: (request: PermissionRequest) => Promise<PermissionResponse>;
}

export const permissionContext = createContext<PermissionContext>(null!);