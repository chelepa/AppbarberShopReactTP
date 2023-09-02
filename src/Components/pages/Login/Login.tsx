
import { useContext } from "react";
import { LoginRequest } from "../../../types/LoginRequest";
import SigninForm from "../../layout/Default/Forms/SigninForm";
import styles from './Login.module.css'
import { authenticationContext } from "../../../contexts/Authentication/AuthenticationContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const auth = useContext(authenticationContext);
    const navigate = useNavigate();

    const createPost = async (login: LoginRequest) => {
        if (login.login && login.password) {
            const isLogged = await auth.signin(login);
            if (isLogged) {
                navigate('/')
            } else {
                alert("Usuario ou senha Invalidas");
            }
        }
    }

    return (
        // <div className={styles.login_container}>
        //     <h1>Por favor digite suas credenciais</h1>
        //     <SigninForm handleSubmit={createPost} btnText="Entrar" />
        // </div>

        <section className={styles.login_container}>
            <h1>
                Por favor digite suas credenciais
            </h1>
            <SigninForm handleSubmit={createPost} btnText="Entrar" />
        </section>
    );
}