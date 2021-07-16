import React, { useContext } from 'react';
import { signInWithGoogle } from './services/auth';
import { UserContext } from './services/User';
import './SignInBtn.css';

export default function SignInBtn() {

    const [ user, setUser ] = useContext(UserContext).user; 

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle()
        if(userBySignIn) setUser(userBySignIn);
        console.log(userBySignIn);
    };


    return (
        <>
           <div className='method' onClick={signInBtnClick}> 
            <p><i class="fab fa-google"></i>  Sign In With Google</p> 
            </div>
        </>
    );
};