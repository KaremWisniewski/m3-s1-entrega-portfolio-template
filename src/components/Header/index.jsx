import styles from "./styles.module.css";

export const Header = () =>{
    return(
        <header className={styles.header}>
            <img src="./src/assets/portfolio.png" alt="Portifólio" />
                <a className="textHeader" href="url">Sobre</a>
                <a className="textHeader" href="url">Stack</a>
                <a className="textHeader"href="url">Projetos</a>
                <button className="btn">Contato</button>
        </header>
    )   
}