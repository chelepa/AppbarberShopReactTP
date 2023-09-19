import { PermissionRequest } from "../../types/Permission";
import { createContext } from "react";

export type PermissionContext = {
    createByPermission: (request: PermissionRequest) => Promise<boolean>;
}

export const permissionContext = createContext<PermissionContext>(null!);