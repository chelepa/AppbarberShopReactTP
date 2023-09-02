import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { AuthenticationApi } from "../../hooks/AuthenticationApi";
import jwt_decode from "jwt-decode";
import { authenticationContext } from "./AuthenticationContext";
import { LoginRequest } from "../../types/LoginRequest";


export const AuthenticationProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = AuthenticationApi();

    useEffect(() => {
        const storageData = getStorageData();
        if (storageData) {
            const claims: User = jwt_decode(storageData);
            if (claims && isTokenValid(claims)) {
                setUser(claims);
            } else {
                setUser(null);
                setToken("");
            }
        }
    }, []);

    const signin = async (login: LoginRequest) => {
        const data = await api.signin(login)
        if (data.auth) {
            setToken(data.token)
            setUser(jwt_decode(data.token))
            return true;
        }
        return false;
    }

    const singout = () => {
        setUser(null);
        setToken("");
    }

    const hasPermission = (roles: string[]) => {
        const authorizations = getRoles();
        if (authorizations) {
          return roles.some(role => authorizations.includes(role));
        }
        return false;
    }

    return (
        <authenticationContext.Provider value={{user, signin, singout, hasPermission}}>
            {children}
        </authenticationContext.Provider>
    );
}

function setToken(token: string) {
    localStorage.setItem('authToken', token);
}

function getRoles() {
    const storageData = getStorageData();
    if (storageData) {
        const claims: User = jwt_decode(storageData);
        if (claims && isTokenValid(claims)) {
            return claims.Roles.split(",");
        } else {
            return [];
        }
    }
}

function getStorageData() {
    return localStorage.getItem('authToken');
}

function isTokenValid(claims: User) {
    return claims.exp * 1000 > Date.now();
}

