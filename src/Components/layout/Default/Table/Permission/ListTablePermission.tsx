import LinkButton from "../../LinkButton/LinkButton";
import styles from "./ListTablePermission.module.css";

export const ListTablePermission = ({ id, permission, description}: { id: BigInteger, permission: string, description: string }) => {
  return (
    <tr>
    <th scope="row">{id}</th>
    <td>{permission}</td>
    <td>{description}</td>
    <td>null</td>
  </tr>
  );
};
