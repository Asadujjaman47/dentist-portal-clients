import React, { useContext } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from '../configs/firebaseConfig';
import LoginBg from '../../../images/login.png'
import { UserContext } from '../../../App';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// firebase.initializeApp(firebaseConfig);  // old version
const app = initializeApp(firebaseConfig);

//google provider
const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();


    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const { displayName, email, uid } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);

                console.log(result.user);
                sessionStorage.setItem('token', uid);
                navigate('/');
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorMessage);
            });
    }

    return (
        <div className='login-page container'>
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className='text-danger'>Forgot your password?</label>
                        </div>
                        {/* <button onClick={handleSubmit} type="submit" className="btn btn-primary">Log In</button> */}
                    </form>

                    <div className="form-group mt-5">
                        <button onClick={handleGoogleSignIn} className='btn btn-brand'>GOOGLE Sign in</button>
                    </div>

                    {/* <div>
                        {
                            (loggedInUser.email)
                                ? console.log('login')
                                : console.log('not log in')
                        }

                    </div> */}
                </div>

                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className='img-fluid' src={LoginBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
