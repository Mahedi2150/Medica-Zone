import React from 'react';

import useAuth from './../../../hooks/useAuth';


const Login = () => {

    const { signInUsingGoogle } = useAuth()

    return (
        <div>
            <h2>This is login  </h2>

            <button onClick={signInUsingGoogle} type="button" class="btn btn-warning">Google Signin</button>

        </div>
    );
};

export default Login;