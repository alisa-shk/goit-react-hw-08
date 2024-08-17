import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
    
    const contacts = useSelector(selectFilteredContacts);

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