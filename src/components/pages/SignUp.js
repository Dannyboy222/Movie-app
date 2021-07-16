import React from 'react';
import'../../App.css';
import './SignUp.css';
import SignInBtn from '../SignInBtn';
import { UserContextProvider } from '../services/User';
import useForm from '../useForm';
import validateInfo from '../ValidateInfo';


export default function SignUp() {

    const {handleChange, values, handleSubmit, errors} = useForm(validateInfo);

    return (
        <UserContextProvider>
        
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
            <br/>
            <SignInBtn />
            <br />
                <h1>
                    Get Started with us today! Create your account by filling out the information below.
                </h1>
                <div className='form-inputs'>
                    <label htmlfor='username' className='form-label'>Username</label>
                    <input 
                    id='username'
                    type='text'
                    name='username'
                    className='form-input'
                    placeholder='Enter your username' 
                    value={values.username}
                    onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlfor='email' className='form-label'>Email</label>
                    <input 
                    id='email'
                    type='email'
                    name='email'
                    className='form-input'
                    placeholder='Enter your Email' 
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}

                </div>
                <div className='form-inputs'>
                    <label htmlfor='password' className='form-label'>Password</label>
                    <input 
                    id='password'
                    type='password'
                    name='password'
                    className='form-input'
                    placeholder='Enter your password' 
                    value={values.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}

                </div>
                <div className='form-inputs'>
                    <label htmlfor='password2' className='form-label'>Confirm Password</label>
                    <input 
                    id='password2'
                    type='password2'
                    name='password2'
                    className='form-input'
                    placeholder='Enter your password again' 
                    value={values.password2}
                    onChange={handleChange}/>
                    {errors.password2 && <p>{errors.password2}</p>}

                </div>
                <button className='form-input-btn' type='submit'>Sign up</button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
            </div>
       
          
        </UserContextProvider>
       
    );
}