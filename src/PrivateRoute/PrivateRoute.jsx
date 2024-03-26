import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <div className="text-center mt-5 mb-7">
            <span className="loading loading-spinner text-error w-16"></span>
        </div>
    }

    if (user?.email) {
        return children;
    }


    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;