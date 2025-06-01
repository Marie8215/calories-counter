import styles from "./layout.module.css";
import { Link } from "react-router";


export const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerItem}>Calories</div>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Мои калории</li>
            <span className={styles.verticalDivider}>|</span>
            <li className={styles.navItem}>Блог</li>
          </ul>
        </nav>
        <div className={`${styles.user} ${styles.headerItem}`}>
          <p>Username</p>
          <span className={styles.verticalDivider}>|</span>
          <p>Выйти</p>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>footer</footer>
    </>
  );
};
