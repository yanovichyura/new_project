import { Link } from "react-router-dom";

const RegisterLogin = () => {
  return (
    <div>
      <section className="form-container">
        <div className="form-box">
          <h2 className="form-title">Авторизація</h2>
          <p className="form-subtitle">Введіть дані наведені нижче</p>
          <form>
            <input
              type="email"
              placeholder="Електронна адреса або номер телефону"
              required
            />
            <input type="password" placeholder="Пароль" required />
            <button type="submit" className="btn-login">
              Увійти
            </button>
            <Link to="/forgot-password" className="forgot-password">
              Забули пароль?
            </Link>
          </form>
        </div>

        <div className="form-box">
          <h2 className="form-title">Створити аккаунт</h2>
          <p className="form-subtitle">Введіть дані для реєстрації</p>
          <form>
            <input type="text" placeholder="Ім'я" required />
            <input
              type="email"
              placeholder="Електронна адреса або номер телефону"
              required
            />
            <input type="password" placeholder="Пароль" required />
            <button type="submit" className="btn-register">
              Створити аккаунт
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterLogin;
