import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./authentication.module.css";
import { ServerAdress } from "../../apiConstant";

export const Authentication = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const tryLogin = async () => {
    const response = await fetch(`${ServerAdress}/api/user/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        login: username,
        password,
      }),
      credentials: 'include'
    })

    if (response.ok) {
      setErrorMessage("")
      navigate("/")
    } else {
      setErrorMessage("Неверный логин или пароль")
    }
  }

  return (
    <div className={styles.authContainer}>
      <h2>Аутентификация</h2>
      <div>
        <div>
          <label>Логин:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={tryLogin}>Войти</button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};
