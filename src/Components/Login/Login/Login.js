import React from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from './../../../hooks/useAuth';


const Login = () => {

    const { signInUsingGoogle, setUser } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {

                setUser(result.user)
                history.push(redirect_url)
            })
    }
    return (
        <div>
            <h2>This is login  </h2>

            <button onClick={handleGoogleSignIn} type="button" class="btn btn-warning">Google Signin</button>

        </div>
    );
};

export default Login;