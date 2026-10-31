import styles from "./Header.module.css"
function Header(){
    return(
        <header className={styles.header}>
            <h1> Travel Agency</h1>
            <nav className={styles.nav}>
                <a href="a">Accueil</a>
                <a href="a">Destinations</a>
                <a href="a">Contact</a>
            </nav>
        </header>
    )
}export default Header