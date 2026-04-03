import React, { useState } from "react";
import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import SigninForm from "../component/SigninForm.jsx";
import SignupForm from "../component/SignupForm.jsx";

function Auth(){
    const [mode, setMode] = useState("signup"); // 'signup' or 'signin'

    const handleSignupSuccess = () => {
        // switch to signin after successful signup
        setMode("signin");
    };

    const handleLoginSuccess = () => {
        // noop here; SigninForm will navigate to dashboard
    };

    return(
        <>
        <Navbar/>
        {mode === "signup" ? (
            <SignupForm onSignupSuccess={handleSignupSuccess} />
        ) : (
            <SigninForm onLoginSuccess={handleLoginSuccess} />
        )}
        <Footer />
        </>
    );
}

export default Auth;
