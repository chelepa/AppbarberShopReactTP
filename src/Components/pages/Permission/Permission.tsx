import LinkButton from '../../layout/Default/LinkButton/LinkButton';
import styles from './Permission.module.css'

export const Permission = () => {
    return (
        <section>
            <div className={styles.newproject_container}>
                <h1>Modulo de  Permissão</h1>
                <p>Criar e gerenciar as permissoes do sistema</p>
            </div>
            <div className={styles.newproject_container}>
                <LinkButton to="/permission/create" text="Criar Nova Permissão" />
            </div>
        </section>
    );
}