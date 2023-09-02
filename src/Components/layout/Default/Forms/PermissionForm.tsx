import { useState } from "react"
import Input from "../Input/Input"
import SubmitButton from "../SubmitButton/SubmitButton"
import styles from './PermissionForm.module.css'


function PermissionForm({handleSubmit, btnText, permissionData}: {btnText: string, handleSubmit: any, permissionData: any}) {
  const [permission, setPermission] = useState(permissionData || {})

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    handleSubmit(permission)
  }

  function handleChange(e: { target: { name: string; value: string } }) {
    setPermission({ ...permission, [e.target.name]: e.target.value })
  }

    return (
        <form className={styles.form} onSubmit={submit}>
          <Input
            type="text"
            text="Nome da Permissão"
            name="permission"
            placeholder="Insira o nome da Permissão"
            handleOnChange={handleChange}
            value={permission.permission}
          />
          <Input
            type="text"
            text="Descrição da Permissão"
            name="description"
            placeholder="Insira a descrição da Permissão"
            handleOnChange={handleChange}
            value={permission.description}
          />
          <SubmitButton text={btnText} />
        </form>
      )
    }
    
    export default PermissionForm