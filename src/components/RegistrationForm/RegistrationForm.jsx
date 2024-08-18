import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { registerThunk } from '../../redux/auth/operations';
import { Link, Navigate } from 'react-router-dom';


const RegistrationForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
});
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const handleSubmit = (values, { resetForm }) => {
        dispatch(registerThunk(values));
        resetForm();
    };
    if (isLoggedIn) {
        return <Navigate to="/"/>
    }
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={s.form}>
            <div className={s.formItem}>
                <Field type="text" name="name" placeholder="Enter your name" className={s.field} />
                <ErrorMessage name="name" component="div" className={s.error} />
            </div>
            <div className={s.formItem}>
                <Field type="email" name="email" placeholder="Enter your email" className={s.field} />
                <ErrorMessage name="email" component="div" className={s.error} />
            </div>
            <div className={s.formItem}>
                <Field type="password" name="password" placeholder="Enter your password" className={s.field} />
                <ErrorMessage name="password" component="div" className={s.error}  />
            </div>
                <button type="submit" className={s.btn}>Register</button>
                <p className={s.question}>Already have an account? <Link to="/login" className={s.link}>Sign In</Link></p>
        </Form>
    </Formik>
    )
};
export default RegistrationForm;