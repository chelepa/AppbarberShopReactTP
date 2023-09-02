import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Container from "../Container/Container";
import { useContext } from "react";
import { authenticationContext } from "../../../contexts/Authentication/AuthenticationContext";

function Navbar() {
  const auth = useContext(authenticationContext);

  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={"logo"} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            {auth.hasPermission(["ADM"]) && <Link to={"/users"}>Usuario</Link>}
          </li>
          <li className={styles.item}>
            {auth.hasPermission(["ADM"]) && <Link to="/group">Grupo de Usuarios</Link>}
          </li>
          <li className={styles.item}>
            {auth.hasPermission(["ADM"]) && <Link to="/permission">Permissão</Link>}
          </li>
          <li className={styles.item}>
            {auth.hasPermission(["ADM"]) && <Link to="/schedule">Agendamentos</Link>}
          </li>
          <li className={styles.item}>
            {auth.hasPermission(["ADM"]) && <Link to="/services">Serviços</Link>}
          </li>
          <li className={styles.item}>
            {auth.hasPermission(["ADM"]) && <Link to="/contract">Contrato</Link>}
          </li>
          <li className={styles.item}>
            <Link to="/logout">Sair</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;