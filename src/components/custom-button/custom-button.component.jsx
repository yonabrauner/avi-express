import React from "react";
import './custom-button.styles.scss';

export const CustomButton = ({ children, isGoogleSignIn,  ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button open-sans`} {...otherProps}>
        {children}
    </button>
)