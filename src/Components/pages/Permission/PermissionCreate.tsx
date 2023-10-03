import styles from "./PermissionCreate.module.css";
import { useContext } from "react";
import { PermissionRequest } from "../../../types/Permission";
import PermissionForm from "../../layout/Default/Forms/PermissionForm";
import { permissionContext } from "../../../contexts/Permission/PermissionContext";
import { useNavigate } from "react-router-dom";

export const PermissionCreate = () => {
  const context = useContext(permissionContext);
  const navigate = useNavigate();

  const createPost = async (request: PermissionRequest) => {
    context.createByPermission(request).then((response) => {
      let message = "";
      let type = "";
      if (response["status"] === 201) {
        message = "Criado Com Sucesso";
        type = "sucess";
      } else {
        message = "Erro Ao Cadastrar";
        type = "error";
      }
      return navigate("/permission", {state: {"message": message, "type": type}});
    });
  };

  return (
    <div className={styles.newproject_container}>
      <h1>Cadastro de Permissão</h1>
      <PermissionForm
        handleSubmit={createPost}
        btnText="Criar Permissão"
        permissionData={null}
      />
    </div>
  );
};
