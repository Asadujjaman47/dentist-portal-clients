import jwtDecode from 'jwt-decode';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../App';
// import jwt_decode from "jwt-decoder";

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decoderToken = jwtDecode(token);

        const currentTime = new Date().getTime() / 1000;

        return decoderToken.exp > currentTime;

    }

    return (
        <div>
            {
                (loggedInUser.email || isLoggedIn)
                    ? children
                    : <Navigate to='/login' />
            }

        </div>
    );
};

export default PrivateRoute;