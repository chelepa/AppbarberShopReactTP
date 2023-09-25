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


// https://www.flaticon.com/br/icone-gratis/retomar_4453375?term=editar&related_id=4453375
// https://www.flaticon.com/br/icone-gratis/arquivo_3143535?term=excluir&related_id=3143535
// https://www.flaticon.com/br/icone-gratis/adicionar-ficheiro_1091585?term=adicionar&related_id=1091585