import styles from'../../styles/portfolioMain.module.css'
export default function portfolio() {
    return (
<div className={styles.bodywrap}>
  <div className={styles.container}>
    <nav className={styles.navbarnavbar-inverse} role="navigation">
      <div className={styles.container-fluid}>
        <div className={styles.navbar-header}>
          <button type="button" className={styles.navbar-toggle} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className={styles.sr-only}>Toggle navigation</span>
            <span className={styles.icon-bar}></span>
            <span className={styles.icon-bar}></span>
            <span className={styles.icon-bar}></span>
          </button>
          <a className={styles.navbar-brand} href="#">Brand</a>
        </div>
        <div className={styles.collapse-navbar-collapse} id="bs-example-navbar-collapse-1">
          <ul className={styles.nav-navbar-nav}>
            <li className={styles.active}><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li className={styles.dropdown}>
              <a href="#" className={styles.dropdown-toggle} data-toggle="dropdown">Dropdown <b className={styles.caret}></b></a>
              <ul className={styles.dropdown-menu}>
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li className={styles.divider}></li>
                <li><a href="#">Separated link</a></li>
                <li className={styles.divider}></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>

          <ul className={styles.nav-navbar-nav-navbar-right}>
            <li><a href="#">Link</a></li>
            <li className={styles.dropdown}>
              <a href="#" className={styles.dropdown-toggle} data-toggle="dropdown">Dropdown <b className={styles.caret}></b></a>
              <ul className={styles.dropdown-menu}>
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li className={styles.divider}></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
    )
}
