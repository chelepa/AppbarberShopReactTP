import IconEdit from "../../../../../icons/IconEdit.png"
import IconDelete from "../../../../../icons/IconDelete.png"


export const ListTablePermission = ({ id, permission, description}: { id: BigInteger, permission: string, description: string }) => {
  return (
    <tr>
    <th scope="row">{id}</th>
    <td>{permission}</td>
    <td>{description}</td>
    <td>
      <div>
        <img src={IconEdit} alt="Costs" />
        <img src={IconDelete} alt="Costs" />
      </div>
    </td>
  </tr>
  );
};