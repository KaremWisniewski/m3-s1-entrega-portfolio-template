import styles from "../sections/ProjectSection/styles.module.css"

export const ProjectLi = ({item}) =>{
    return (
        <li className={styles.projectLi}>
                        <div className={styles.projectContainer}>
                            <h5 className="subtitlesCards">{item.name}</h5>
                            <p className="paragraph">{item.description}</p>
                            <p className="infoCards">Saiba mais</p>
                        </div>
                        <img className={styles.projectImg} src="./src/assets/git-icon.png" alt="Git" />
                    </li>


    )
}