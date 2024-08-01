import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Triangle } from "react-loader-spinner";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    if (user) {
        return children;
    }
    if (loader) {
        return (
            <div className="flex justify-center items-center my-36">
                <Triangle
                visible={true}
                height="80"
                width="80"
                color="#95453590"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            </div>
        );

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;