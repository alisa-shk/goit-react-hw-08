import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import { ProgressBar } from "react-loader-spinner";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    return (
        <div className={s.box}>
            <h1 className={s.header}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && <ProgressBar
    visible={true}
    height="180"
    width="180"
    color="#4fa94d"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
            />}
            {isError && <h2>Something went wrong!</h2>}
            <ContactList />
        </div>
    )
};

export default ContactsPage;