import styles from "./styles.module.css";

export const Footer = () =>{
    return(
        <footer className= {styles.footer}>
            <div className={styles.infoFooter}>
                <h2 className="title2">Contato</h2>
                <img className={styles.footerImg} src="./src/assets/whatsapp-icon.png" alt="WhatsApp"/>
                <img className={styles.footerImg} src="./src/assets/linkedin-icon.png" alt="Linkedin"/>
                 <img className={styles.footerImg} src="./src/assets/github-icon.png"alt="Github"/>
            </div>
            <div className={styles.containerFooter}>
                <p className="paragraph">Todos os direitos reservados - Karem Wisniewski</p> 
            </div>
        </footer>
    )
}