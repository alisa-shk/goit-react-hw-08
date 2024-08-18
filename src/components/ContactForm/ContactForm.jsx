import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/operations';


const ContactForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        number: "",
    };

    const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});
    
    const handleSubmit = (values, actions) => {
        dispatch(addContactThunk({
            name: values.name,
            number: values.number,
        }));
        actions.resetForm();
    };

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={s.form}>
            <div className={s.formItem}>
                <label className={s.label} htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" className={s.field} />
                <ErrorMessage name="name" component="div" className={s.error} />
            </div>
            <div className={s.formItem}>
                <label className={s.label} htmlFor="number">Number</label>
                <Field type="text" id="number" name="number" className={s.field} />
                <ErrorMessage name="number" component="div" className={s.error}  />
            </div>
            <button type="submit" className={s.btn} >Add contact</button>
        </Form>
    </Formik>
    )
};
export default ContactForm;