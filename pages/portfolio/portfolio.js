import styles from '../../styles/portfolio.module.css' ;
export default function portfolio() {
    return (
        <div>
            <section className={styles.navigation}>
                <div className={styles.container}>
                    <div className={styles.brand}>
                        <a href="#!">Logo</a>
                    </div>
                    <nav>
                        <div className={styles.mobile}><a   id={styles.toggle} href="#!">
                            <span></span>
                            </a>
                        </div>
                            <ul className={styles.list}>
                                <li>
                                    <a href="#!">Home</a>
                                </li>
                                <li>
                                    <a href="#!">About</a>
                                </li>
                                <li>
                                    <a href="#!">Services</a>
                                 <ul className={styles.dropdown}>
                                    <li>
                                        <a href="#!">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#!">Web Development</a>
                                    </li>
                                    <li>
                                        <a href="#!">Graphic Design</a>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                    <a href="#!">Pricing</a>
                                </li>
                                <li>
                                    <a href="#!">Portfolio</a>
                                    <ul className={styles.dropdown}>
                                        <li>
                                            <a href="#!">Web Design</a>
                                        </li>
                                        <li>
                                            <a href="#!">Web Development</a>
                                        </li>
                                        <li>
                                            <a href="#!">Graphic Design</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#!">Contact</a>
                                </li>
                            </ul>
                    </nav>
                </div>
            </section>

            <article>
                <h2>Navigation</h2>
                <p>Responsive Dropdown Navigation Bar.</p>
                <p>Want to see how it's made? <a href="http://www.taniarascia.com/responsive-dropdown-navigation-bar/">Read the tutorial!</a></p>
            </article>
        </div>




    )
}
