import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/auth/selectors"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    const location = useLocation();

    if (isLoggenIn) {
        return children;
    }
    return <Navigate to='/login' state={location} />;
};