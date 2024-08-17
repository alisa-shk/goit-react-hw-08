import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import "./App.css";
import { selectIsError, selectIsLoading } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "../redux/contactsOps";


const App = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);

    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);


    return (
        <div className="box">
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && <h2 className="loader">Loading...</h2>}
            {isError && <h2 className="err">Something went wrong!</h2>}
            <ContactList />
        </div>
    )
};

export default App;


