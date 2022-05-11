import styles from './Council.module.css'

const Council = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <img src='./static/pictures/council/main.png' className={styles.image}></img>
                <h2 className={styles.imageText}>ЭКСПЕРТНО-ТЕХНИЧЕЙСКИЙ <br></br> СОВЕТ</h2>
            </div>
        </div>
    )
}

export default Council;