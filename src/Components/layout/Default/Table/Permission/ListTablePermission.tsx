import IconEdit from "../../../../../icons/IconEdit.png"
import IconDelete from "../../../../../icons/IconDelete.png"
import LinkIcon from '../../LinkIcon/LinkIcon';


export const ListTablePermission = ({ id, permission, description}: { id: BigInteger, permission: string, description: string }) => {
  return (
    <tr>
    <th scope="row">{id}</th>
    <td>{permission}</td>
    <td>{description}</td>
    <td>
      <div>
        <LinkIcon to="/" IconEdit={IconEdit}/>
        <LinkIcon to="/" IconEdit={IconDelete}/>
      </div>
    </td>
  </tr>
  );
};