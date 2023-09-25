import React, { useContext, useEffect } from "react";
import { permissionContext } from "../../../contexts/Permission/PermissionContext";
import { PermissionResponse } from "../../../types/Permission";
import { ListTablePermission } from "../../layout/Default/Table/Permission/ListTablePermission";
import styles from "./Permission.module.css";
import LinkButton from "../../layout/Default/LinkButton/LinkButton";

export const Permission = () => {
  const context = useContext(permissionContext);
  const [permissionList, setPermissionResponse] = React.useState(
    Array<PermissionResponse>
  );

  useEffect(() => {
    const list = context.getAllPermission();

    const printTable = () => {
      list.then((response) => {
        setPermissionResponse(response);
      });
    };

    printTable();
  }, []);

  return (
    <section className={styles.login_container}>
      <div className={styles.newproject_container}>
        <h1>Modulo de Permissão</h1>
        <p>Criar e gerenciar as permissoes do sistema</p>
      </div>
      <div className="card">
        <div className="card-header">
          <div className={styles.card_header}>
            <div className={styles.newproject_container}>Permissão</div>
            <div className={styles.newproject_container}>
              <LinkButton to="/permission/create" text="Criar Nova Permissão" />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="overflow-auto">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome da Perminssao</th>
                  <th scope="col">Descricao da Permissao</th>
                  <th scope="col">Acao</th>
                </tr>
              </thead>
              <tbody>
                {permissionList.length > 0 &&
                  permissionList.map((response) => (
                    <ListTablePermission
                      id={response.id}
                      permission={response.permission}
                      description={response.description}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
