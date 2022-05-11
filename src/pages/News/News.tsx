import styles from "./News.module.css";

const News = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <img src='./static/pictures/news/main.png' alt='Новости' className={styles.image}></img>
                <h2 className={styles.imageTitle}>НОВОСТИ СОЮЗА <br></br> ЭЛЕКТРОМАШИНОСТРОЕНИЯ</h2>
            </div>
        </div>
    )
}

export default News;