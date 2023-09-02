import { useContext } from "react";
import { authenticationContext } from "./AuthenticationContext";
import { Login } from "../../Components/pages/Login/Login";

export const AuthenticationRequire = ({children}: {children: JSX.Element}) => {

    const auth = useContext(authenticationContext);
    
    if (!auth.user){
        return <Login/>
    }
    
    return children;
}