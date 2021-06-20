import styles from '../../styles/nav.module.css'

export default function portfolio(){
    return (
        <div>
            <div>
            <nav className={styles.nav}>
                <ul className={styles.main_nav}>
                    <li className={styles.li}><a className={styles.a} href="">About</a></li>
                    <li className={styles.li}><a className={styles.a} href="">Products</a></li>
                    <li className={styles.li}><a className={styles.a} href="">Our Team</a></li>
                    <li className={styles.push}><a className={styles.a} href="">Contact</a></li>
                </ul>
            </nav>
        </div>
       
        </div>
    )
}
