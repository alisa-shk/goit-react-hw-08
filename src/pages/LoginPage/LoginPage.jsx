import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

const LoginPage = () => {
    return (
        <div>
            <h1 className={s.login}>Login</h1>
            <LoginForm />
        </div>
    )
}

export default LoginPage;