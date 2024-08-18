import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import s from "./Contact.module.css";

const Contact = ({ data: { name, number, id } }) => {

    const dispatch = useDispatch();

    return (
        <div className={s.list}>
            <ul className={s.listItem}>
                <li className={s.contact}>{name}</li>
                <li className={s.contactNum}>{number}</li>
            </ul>
            <button id={id} className={s.btn} onClick={() => dispatch(deleteContactThunk(id))}>Delete</button>
        </div>
    );
};

export default Contact;