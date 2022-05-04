import styles from "./MainPageItem.module.css"

interface IMainPageItem {
    img: string;
    title: string;
    text: string;
} 

const MainPageItem = ({img, title, text}: IMainPageItem) => {
    return(
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src={img} alt={title} className={styles.image}></img>
                <h4 className={styles.title}>{title}</h4>
            </div>
            <div className={styles.line}></div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default MainPageItem;