import { useState } from "react";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import styles from './SigninForm.module.css'



function SigninForm({ handleSubmit, btnText }: { btnText: string, handleSubmit: any }) {
    const [login, setLogin] = useState({})

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        handleSubmit(login)
      }

    function handleChange(e: { target: { name: string; value: string } }) {
        setLogin({ ...login, [e.target.name]: e.target.value })
      }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="email"
                text="Login"
                name="login"
                placeholder="Insira seu email para login"
                handleOnChange={handleChange}
                value="null"
            />
            <Input
                type="password"
                text="Password"
                name="password"
                placeholder="Insira sua senha"
                handleOnChange={handleChange}
                value="null"
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default SigninForm