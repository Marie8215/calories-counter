import { useState } from "react";
import styles from "./layout.module.css";
import { Link, Outlet, useNavigate } from "react-router";
import { ServerAdress } from "../../apiConstant";

export const Layout = () => {
  const [loggingOut, setLoggingOut] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    setErrorMessage("");
  
    const response = await fetch(`${ServerAdress}/api/user/logout`, {
      method: "POST",
      credentials: "include",
    });
  
    if (response.ok) {
      setLoggingOut(true);
      navigate("/login");
    } else {
      setErrorMessage("Ошибка. Пожалуйста, попробуйте позже.");
      setLoggingOut(false);
    }
  };


  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerItem}>Calories</div>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/">Мои калории</Link>
            </li>
            <span className={styles.verticalDivider}>|</span>
            <li className={styles.navItem}>
              <Link to="/blog">Блог</Link>
            </li>
          </ul>
        </nav>
        <div className={`${styles.user} ${styles.headerItem}`}>
          <p>Username</p>
          <span className={styles.verticalDivider}>|</span>
          <p>
          <button onClick={handleLogout} disabled={loggingOut}>
              Выйти
            </button>
          </p>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </header>
      <Outlet />
      <footer className={styles.footer}>footer</footer>
    </>
  );
};
