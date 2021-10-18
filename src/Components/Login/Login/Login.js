import React from 'react';
import useFirebase from '../../../hooks/useFirebase';


const Login = () => {

    const { signInUsingGoogle } = useFirebase()

    return (
        <div>
            <h2>This is login  </h2>

            <button onClick={signInUsingGoogle} >Google Signin</button>

        </div>
    );
};

export default Login;