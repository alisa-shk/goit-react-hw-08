import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFound from "../pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/operations";
import { PrivateRoute } from "../Routes/PrivateRoute";
import { PublicRoute } from "../Routes/PublicRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { ProgressBar } from "react-loader-spinner";


const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(() => {dispatch(refreshUser())}, [dispatch]);

    return isRefreshing ? <ProgressBar
    visible={true}
    height="180"
    width="180"
    color="#4fa94d"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /> : (
        <div className="box">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/register' element={<PublicRoute><RegistrationPage /></PublicRoute>} />
                    <Route path='/login' element={<PublicRoute><LoginPage /></PublicRoute>} />
                    <Route path='/contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;


