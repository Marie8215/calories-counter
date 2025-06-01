import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./authentication.module.css";
import { ServerAdress } from "../../apiConstant";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import logo from "../../images/logo.jpg"

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
      <div className={styles.authFormContainer}>
      <div className={styles.authLogo}>
        <img src={logo} alt="CalorieTracker" className={styles.logoImage} />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Калькулятор калорий
        </Typography.Title>
      </div>
        
        <Form
          name="auth-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Введите ваш email!' }]}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Введите ваш пароль!' }]}
          >
            <Input.Password placeholder="Пароль" size="large" />
          </Form.Item>

          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>
            <a>
              Забыли пароль?
            </a>
            </div>
          </Form.Item>
          {errorMessage && (
            <div style={{ color: 'red', marginBottom: 16, textAlign: 'center' }}>
              {errorMessage}
            </div>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block >
              Войти
            </Button>
          </Form.Item>
        </Form>
        </div>
    </div>
  );
};
