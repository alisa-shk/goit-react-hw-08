import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const LoginPage = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return <Navigate to='/'/>
    }
    return (
        <div>
            <h1 className={s.login}>Login</h1>
            <LoginForm />
        </div>
    )
}

export default LoginPage;