import styles from "../sections/TechSection/styles.module.css"

export const TechCards = ({card}) =>{
    return (
        <li>
            <div  className={styles.techCards}>
                <img src= {card.img} />
                <p className="subtitlesCards">{card.name}</p>
            </div>
        </li>
    )
}
