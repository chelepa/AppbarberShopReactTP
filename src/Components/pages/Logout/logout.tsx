import { useContext, useEffect } from "react";
import { authenticationContext } from "../../../contexts/Authentication/AuthenticationContext";

export const Logout = () => {
    const auth = useContext(authenticationContext);

    useEffect(() => {
        auth.singout()
        window.location.href = window.location.href;
    }, []);

    return null;
}