import styles from "./styles.module.css";

export const AboutMeSection = () =>{
    return (
        <section className={styles.aboutMe}>
            <div>
                <h2 className="title2">Sobre mim</h2>
            </div>
            <div className={styles.divAboutMe}>
                <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nam exercitationem aspernatur quia labore molestias, rerum numquam architecto quae, facere expedita accusantium, saepe magnam reiciendis tenetur. Minus numquam cupiditate sapiente.</p>
            </div>
        </section>
    )
}
