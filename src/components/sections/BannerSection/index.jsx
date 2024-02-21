import styles from "./styles.module.css";

export const BannerSection = () =>{
    return (
        <section className={styles.bannerSection}>
            <div>
                <h4 className="titleName">KAREMWISNIEWSKI</h4>
                <h1 className="title1">Bem vindo ao meu portifólio</h1>
                <p className="paragraph">Uma frase interessante sobre mim</p>
                <button className="btn">Saiba mais</button>
            </div>
            <div>
                <img src="./src/assets/banner-img.png" alt="Banner" />
            </div>
        </section>
    )
}
