import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";


const SearchBox = () => {

    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = e => dispatch(changeFilter(e.target.value));

    return (
        <div className={s.searchBox}>
            <p className={s.find}>Find contacts by name</p>
            <input className={s.field} type="text" value={filter} onChange={handleChange} />
        </div>
    );
};

export default SearchBox;