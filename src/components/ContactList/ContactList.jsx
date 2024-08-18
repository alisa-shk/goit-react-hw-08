import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contacts/operations";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    useEffect(() => {
    dispatch(fetchContactsThunk());
    }, [dispatch]);

    return (
        <ul className={s.list}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))}
        </ul>
    )
};
export default ContactList;