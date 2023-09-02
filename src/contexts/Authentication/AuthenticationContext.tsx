import { createContext } from "react";
import { User } from "../../types/User";
import { LoginRequest } from "../../types/LoginRequest";

export type AuthenticationContext = {
    user: User | null;
    signin: (login: LoginRequest) => Promise<boolean>;
    hasPermission: (roles: string[]) => boolean;
    singout: () => void;
}

export const authenticationContext = createContext<AuthenticationContext>(null!);