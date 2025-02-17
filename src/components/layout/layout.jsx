import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>header</header>
      {children}
      <footer className={styles.footer}>footer</footer>
    </>
  );
};
