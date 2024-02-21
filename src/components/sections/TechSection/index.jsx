import styles from "./styles.module.css";
import { TechCards } from "../../TechCards";
import { technologies } from "../../../data/technologies";

export const TechSection = () =>{
    return (
        <section className={styles.techSection}>
            <div>
                <h2 className="title2">Tecnologias</h2>
            </div>
            <div>
                <ul className={styles.techUl}>
                    {technologies.map(tech => <TechCards card={tech}/>)}
                    {/* <li>
                        <div className={styles.techCards}>
                            <img src="./src/assets/html-icon.png" alt="HTML" />
                            <p className="subtitlesCards">HTML</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.techCards}>
                            <img src="./src/assets/css-icon.png" alt="CSS" />
                            <p className="subtitlesCards">CSS</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.techCards}>
                            <img src="./src/assets/js-icon.png" alt="Javascript" />
                            <p className="subtitlesCards">Javascript</p> 
                        </div>
                    </li>
                    <li>
                        <div className={styles.techCards}>
                            <img src="./src/assets/react-icon.png" alt="React" />
                            <p className="subtitlesCards">React</p>
                        </div>
                    </li> */}
                </ul>
            </div>
        </section> 
    )
}