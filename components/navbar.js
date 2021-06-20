import styles from '../styles/nav.module.css'
import Head from 'next/head'
export default function portfolio() {
    return (
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
        // <div className={styles.nav_container}>
        //     <input type="checkbox" id="check"></input>
        //     <label for="check" className={styles.nav_container__check-btn}>
        //     </label>
        //         <nav className={styles.nav}>
        //             <ul className={styles.nav__list}>
        //                 <li className={styles.nav__list-logo}>
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 480 860" fill="none">
        //                         <path d="M240 400V120L420 0V220L480 180V240L360 320V100L300 140V360L240 400Z"/>
        //                         <path fill-rule="evenodd" clip-rule="evenodd" d="M180 60V0L0 120V760L60 720V620L120 580V840L180 800V480L60 560V500L180 420V120L60 200V140L180 60ZM60 260L120 220V280L60 320V260ZM120 340L60 380V440L120 400V340Z"/>
        //                         <path fill-rule="evenodd" clip-rule="evenodd" d="M240 460V780L360 700V860L420 820V660L480 620V560L420 600V340L240 460ZM360 440L300 480V680L360 640V440Z"/>
        //                     </svg>
        //                 </li>
        //                 <li className={styles.nav__list-item}>
        //                     About
        //                     <ul className={styles.nav__list-item-drop}>
        //                         <li>Our Team</li>
        //                         <li>Our Process</li>
        //                         <li>History</li>
        //                     </ul>
        //                 </li>
        //                 <li className={styles.nav__list-item}>
        //                     Work
        //                     <ul className={styles.nav__list-item-drop}>
        //                         <li>Portfolio</li>
        //                         <li>Showcase</li>
        //                     </ul>
        //                 </li>
        //                 <li className={styles.nav__list-item}>Contact</li>
        //             </ul>
        //         </nav>
        // </div>
    )
}

    

