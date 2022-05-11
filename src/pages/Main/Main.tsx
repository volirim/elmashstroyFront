import MainPageItem from '../../components/MainPageItem/MainPageItem';
import ProductsItem from '../../components/ProductsItem/ProductsItem';
import { mainPageItems, mainPageItems2 } from '../../constants/mainPageItems';
import arrayOfProducts from '../../constants/productItems';
import Footer from '../../UI/Footer/Footer';
import Header from '../../UI/Header/Header';
import styles from './Main.module.css';
const uniqid = require('uniqid');

function App() {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>Отраслевой союз «Электромашиностроение»</h2>
        <p className={styles.text}>
          является организацией, включающей ведущих производителей электродвигателей на территории Российской Федерации и Республики Беларусь с долей рынка по производимым асинхронным электродвигателям не менее 70 %.
        </p>
      </div>
      <div className={styles.itemsContainer}>
        {mainPageItems.map(item => <MainPageItem img={item.img} title={item.title} text={item.text} key={uniqid()} />)}
      </div>
      <div className={styles.container}>

      </div>
      <div className={styles.itemsContainer}>
        {mainPageItems2.map(item => <MainPageItem img={item.img} title={item.title} text={item.text} key={uniqid()} />)}
      </div>
      <div className={styles.sertificationBlock}>
        <img src="./static/pictures/mainEnginebg.png" alt="" className={styles.sertificationImg}/>
        <div className={styles.sertificationTitle}>
          ВВЕДЕНИЕ ОБЯЗАТЕЛЬНОЙ СЕРТИФИКАЦИИ
        </div>
        <div className={styles.sertificationText}>
        <span className={styles.sertificationTextInner}>
          Союз «Электромашиностроение» совместно с Минпромторгом РФ инициирует введение обязательной сертификации на продукцию электромашиностроения, реализуемой на территории ЕАЭС.
        </span>
        </div>
      </div>
      <div className={styles.container}>
        Карта
      </div>
      <div className={styles.productsBlock}>
        <h3 className={styles.productsTitle}>Продукты наших участников</h3>
        <div className={styles.productItemsContainer}>
          {arrayOfProducts.map(product => <ProductsItem text={product.text} img={product.img} link={product.link} key={uniqid()} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
