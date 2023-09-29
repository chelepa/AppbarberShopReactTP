import { useContext, useState } from 'react';
import {PermissionRequest } from '../../../types/Permission';
import PermissionForm from '../../layout/Default/Forms/PermissionForm';
import styles from './PermissionCreate.module.css'
import { permissionContext } from '../../../contexts/Permission/PermissionContext';
import Message from '../../layout/Default/Message/message';

export const PermissionCreate = () => {
    const context = useContext(permissionContext);
    const [message, setMessage] = useState("")
    const [type1, setType1] = useState("")
    const [status, setStatus] = useState("")

    const createPost = async (request: PermissionRequest) => {
      context.createByPermission(request).then((response) => {
        if (response["status"] === 201) {
          setMessage("Criado Com Sucesso");
          setType1("sucess");
          setStatus(response["status"]);
        } else {
          setMessage("Erro Ao Cadastrar");
          setType1("error");
          setStatus(response["status"]);
        }
      });
    };

    return (
        <div className={styles.newproject_container}>
            <div>
              {status && <Message msg={message} type={type1}/>} 
            </div>
            <h1>Cadastro de Permissão</h1>
            <PermissionForm handleSubmit={createPost} btnText="Criar Permissão" permissionData={null}/>
        </div>
    )
}