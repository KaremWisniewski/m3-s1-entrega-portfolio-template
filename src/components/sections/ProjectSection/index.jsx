import styles from "./styles.module.css";
import { ProjectLi } from "../../ProjectLi";
import { projects } from "../../../data/projects";

export const ProjectSection = () =>{
    return (
        <section className={styles.projectSection}>
            <div>
                <h2 className="title2">Projetos</h2>
            </div>
            <div>
                <ul className={styles.projectUl}>
                    {projects.map(projeto => <ProjectLi item={projeto}/>)}
                </ul>
            </div>
        </section>
    )
}
