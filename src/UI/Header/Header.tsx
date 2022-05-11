import NavMenuLink from '../../components/NavLink/NavMenuLink';
import styles from './Header.module.css'
const Header = () => {
    return (
        <nav className={styles.container}>
            <img src='./static/pictures/logo.svg' alt="logo" className={styles.logo}/>
            <ul className={styles.menu}>
                <NavMenuLink link='/' name='Главная'></NavMenuLink>
                <NavMenuLink link='/news' name='Новости'></NavMenuLink>
                <NavMenuLink link='/' name='Участники'></NavMenuLink>
                <NavMenuLink link='/council' name='Тех совет'></NavMenuLink>
                <NavMenuLink link='/join' name='Вступление'></NavMenuLink>
                <NavMenuLink link='/contacts' name='Контакты'></NavMenuLink>
            </ul>
        </nav>
    )
}

export default Header;