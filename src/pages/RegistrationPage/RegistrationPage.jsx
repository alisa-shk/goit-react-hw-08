import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
    return (
        <div>
            <h1 className={s.register}>Registration</h1>
            <RegistrationForm />
        </div>
    )
}

export default RegistrationPage;