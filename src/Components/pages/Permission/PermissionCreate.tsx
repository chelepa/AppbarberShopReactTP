import { Permission } from '../../../types/Permission';
import PermissionForm from '../../layout/Default/Forms/PermissionForm';
import styles from './PermissionCreate.module.css'

function createPost(permission: Permission) {
    var response = JSON.stringify(permission);
    console.log(response)
}

export const PermissionCreate = () => {
    return (
        <div className={styles.newproject_container}>
            <h1>Cadastro de Permissão</h1>
            <PermissionForm handleSubmit={createPost} btnText="Criar Permissão" permissionData={null}/>
        </div>
    )
}