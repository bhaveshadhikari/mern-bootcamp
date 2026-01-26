import React, { useState } from "react";
import Button from "../component/Button.jsx";
import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import ContactForm from "../component/ContactForm.jsx";

function Contact(){
    return(
        <>
        <Navbar/>
        <ContactForm/>
        <Footer />
        </>
        
        
    );
}
export default Contact;
