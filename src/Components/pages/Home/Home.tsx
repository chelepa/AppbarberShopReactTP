import styles from './Home.module.css'

export const Home = () => {
    return (
        <section className={styles.home_container}>
        <h1>
          Bem-vindo Claudimir ao <span>Barber Shop</span>
        </h1>
        <p>Sistema de gerenciamento de barbearias associadas</p>
      </section>
    );
}