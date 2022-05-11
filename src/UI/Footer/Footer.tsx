import FooterLink from "../../components/FooterLink/FooterLink";
import footerLinks from "../../constants/footerLinks";
import styles from "./Footer.module.css"
const uniqid = require('uniqid')

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contactsBlock}>
                <img src='./static/pictures/logo.svg' alt="logo" className={styles.logo}/>
                <div className={styles.contacts}>
                    <div>
                        <h3 className={styles.contactsTitle}>Контакты</h3>
                        <p className={styles.contactsText}>
                            119331, г. Москва, пр-т Вернадского, д. 29
                        </p>
                        <p className={styles.contactsText}>
                            +7 903 649-15-37
                        </p>
                        <p className={styles.contactsText}>
                            elmech.union@gmail.com
                        </p>
                    </div>
                    <div className={styles.links}>
                        {footerLinks.map(link => <FooterLink link={link.link} text={link.text} key={uniqid()}></FooterLink>)}
                    </div>
                </div>
            </div>
            <div className={styles.feedbackBlock}>
                <div className={styles.feedbackTitle}>
                    <h3>МЫ НА СВЯЗИ</h3>
                    <p>Оставьте свою заявку и мы свяжемся с Вами</p>
                </div>
                <form className={styles.feedbackForm}>
                    <div className={styles.feedbackFieldsContainer}>
                        <input placeholder='Тема письма' required className={styles.feedbackFormInput}></input>
                        <input placeholder='ФИО' required className={styles.feedbackFormInput}></input>
                        <input placeholder='Организация' className={styles.feedbackFormInput}></input>
                        <input placeholder='Должность' className={styles.feedbackFormInput}></input>
                        <button type="submit" className={styles.feedbackFormSubmit}>Оставить заявку</button>
                    </div>
                    <div className={styles.feedbackFieldsContainer}>
                        <input placeholder='Телефон' className={styles.feedbackFormInput}></input>
                        <input placeholder='Email' required className={styles.feedbackFormInput}></input>
                        <textarea placeholder='Текст письма' required className={styles.feedbackFormTextarea}></textarea>
                        <div className={styles.feedbackFormAnnotation}>
                            Нажимая кнопку, я принимаю условия Пользовательского соглашения и даю своё согласие на обработку моих персональных данных.
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer;