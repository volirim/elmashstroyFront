import MainPageItem from '../../components/MainPageItem/MainPageItem';
import { mainPageItems, mainPageItems2 } from '../../constants/mainPageItems';
import Header from '../../UI/Header/Header';
import styles from './Main.module.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Отраслевой союз «Электромашиностроение»</h2>
        <p className={styles.text}>
          является организацией, включающей ведущих производителей электродвигателей на территории Российской Федерации и Республики Беларусь с долей рынка по производимым асинхронным электродвигателям не менее 70 %.
        </p>
      </div>
      <div className={styles.itemsContainer}>
        {mainPageItems.map(item => <MainPageItem img={item.img} title={item.title} text={item.text} />)}
      </div>
      <div className={styles.container}>

      </div>
      <div className={styles.itemsContainer}>
        {mainPageItems2.map(item => <MainPageItem img={item.img} title={item.title} text={item.text} />)}
      </div>
      <div className={styles.sertificationBlock}>
        <img src="./static/pictures/mainEnginebg.png" alt="" />
        <div className={styles.sertificationTitle}>
          ВВЕДЕНИЕ ОБЯЗАТЕЛЬНОЙ СЕРТИФИКАЦИИ
        </div>
        <div className={styles.sertificationText}>
        <span className={styles.sertificationTextInner}>
          Союз «Электромашиностроение» совместно с Минпромторгом РФ инициирует введение обязательной сертификации на продукцию электромашиностроения, реализуемой на территории ЕАЭС.
        </span>
        </div>
      </div>
    </div>
  );
}

export default App;
