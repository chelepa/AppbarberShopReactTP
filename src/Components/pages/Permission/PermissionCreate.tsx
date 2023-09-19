import { useContext } from 'react';
import {PermissionRequest } from '../../../types/Permission';
import PermissionForm from '../../layout/Default/Forms/PermissionForm';
import styles from './PermissionCreate.module.css'
import { permissionContext } from '../../../contexts/Permission/PermissionContext';

export const PermissionCreate = () => {
    const context = useContext(permissionContext);

    const createPost = async (request: PermissionRequest) => {
        // var response = JSON.stringify(request);
        context.createByPermission(request);
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Cadastro de Permissão</h1>
            <PermissionForm handleSubmit={createPost} btnText="Criar Permissão" permissionData={null}/>
        </div>
    )
}