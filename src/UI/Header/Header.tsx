import NavMenuLink from '../../components/NavLink/NavMenuLink';
import styles from './Header.module.css'
const Header = () => {
    return (
        <nav className={styles.container}>
            <img src='./static/pictures/logo.svg' alt="logo" className={styles.logo}/>
            <ul className={styles.menu}>
                <NavMenuLink link='/' name='Главная'></NavMenuLink>
                <NavMenuLink link='/' name='Новости'></NavMenuLink>
                <NavMenuLink link='/' name='Участники'></NavMenuLink>
                <NavMenuLink link='/' name='Тех совет'></NavMenuLink>
                <NavMenuLink link='/' name='Вступление'></NavMenuLink>
                <NavMenuLink link='/' name='Контакты'></NavMenuLink>
            </ul>
        </nav>
    )
}

export default Header;