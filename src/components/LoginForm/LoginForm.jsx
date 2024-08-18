import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { loginThunk } from '../../redux/auth/operations';
import { Link, Navigate } from 'react-router-dom';


const LoginForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
});
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const handleSubmit = (values, { resetForm }) => {
        dispatch(loginThunk(values));
        resetForm();
    };
    if (isLoggedIn) {
        return <Navigate to='/'/>
    }
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={s.form}>
            <div className={s.formItem}>
                <Field name="email" placeholder="Enter your email" className={s.field} />
                <ErrorMessage name="email" component="div" className={s.error} />
            </div>
            <div className={s.formItem}>
                <Field type="password" name="password" placeholder="Enter your password" className={s.field} />
                <ErrorMessage name="password" component="div" className={s.error}  />
            </div>
                <button type="submit" className={s.btn}>Login</button>
                <p className={s.question}>Don't have an account? <Link to="/register" className={s.link}>Sign Up</Link></p>
        </Form>
    </Formik>
    )
};
export default LoginForm;