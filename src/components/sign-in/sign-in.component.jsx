import React, { useState } from "react";
import "./sign-in.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export const SignIn = () => {
    const [formData, setFormData] = useState({email: "", password: ""});
    const [signingIn, setSigningIn] = useState(false);

    const handleSubmit = event => {
        event.preventDefault()
        setFormData({email: '', password: '' })
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleGoogleSignIn = async () => {
        if (signingIn) return;
        setSigningIn(true);
        try {
          await signInWithGoogle();
        } catch (error) {
          console.error('Google sign-in error:', error);
        } finally {
          setSigningIn(false);
        }
      };

    return(
        <div className="sign-in">
            <h2 className="title montserrat">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type='email' label='email' value={formData.email} handleChange={handleChange} required />
                <FormInput name="password" type='password' label='password' value={formData.password} handleChange={handleChange} required />
                <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={handleGoogleSignIn} isGoogleSignIn disabled={signingIn}>{' '}Sign In with Google{' '}</CustomButton>
                </div>
            </form>
        </div>
    )
}