import React, { useState } from "react";
import Button from "../component/Button.jsx";
import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import SigninForm from "../component/SigninForm.jsx"

function Auth(){
    return(
        <>
        <Navbar/>
        <SigninForm/>
        <Footer />
        </>
        
        
    );
}
export default Auth;
