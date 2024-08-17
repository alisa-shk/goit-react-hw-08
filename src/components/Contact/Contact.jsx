import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";
import s from "./Contact.module.css";

const Contact = ({ data: { name, number, id } }) => {

    const dispatch = useDispatch();

    return (
        <div className={s.list}>
            <ul className={s.listItem}>
                <li>{name}</li>
                <li>{number}</li>
            </ul>
            <button id={id} className={s.btn} onClick={() => dispatch(deleteContactThunk(id))}>Delete</button>
        </div>
    );
};

export default Contact;