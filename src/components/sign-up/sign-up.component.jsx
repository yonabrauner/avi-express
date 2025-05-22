import React, { useState } from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const SignUp = () => {
    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        if(formData.password !== formData.confirmPassword){
            alert("passwords dont match!");
            return;
        }

        try{
            const {user} = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            createUserProfileDocument(user);
            setFormData({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error){
            console.error(error.code, error.message);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;

         setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' value={formData.displayName} onChange={handleChange} required label='Display Name'/>
                <FormInput type='email' name='email' value={formData.email} onChange={handleChange} required label='Email'/>
                <FormInput type='password' name='password' value={formData.password} onChange={handleChange} required label='Password'/>
                <FormInput type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} required label='Confirm Password'/>
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>

        </div>
    )
}

