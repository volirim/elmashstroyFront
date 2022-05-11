import styles from './JoinDocks.module.css';
import { Link } from "react-router-dom";
const anketa =  require("../../../docs/anketa.docx");
const zayavlenie =  require("../../../docs/zayavlenie.docx");

const JoinDocks = () => {
    return (
        <div className={styles.container}>
            <Link to={anketa} download="анкета на вступление в союз.docx" target='_blank' className={styles.link}>
                Анкета
            </Link>
            <Link to={zayavlenie}  download="заявление на вступление в союз.docx" rel="noopener noreferrer" target='_blank' className={styles.link}>
                Заявление
            </Link>
        </div>
    )
}

export default JoinDocks;