import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "../component/Button.jsx";
function ContactForm() {

    const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault()

        console.log({
            name,
            email,
            message,
        });

        alert("Enquiry submitted!");

        // Clear form
        setName("");
        setEmail("");
        setMessage("");
    };

    return (

        <>
            <div style={{ width: "100%", display:"flex", justifyContent: "center", alignItems:"center" }}>


                <div style={formStyle}>
                    <h3>Enquiry Form</h3>

                    <form onSubmit={handleSubmit}>
                        <input type="text" style={formField} placeholder="Name" value={name} required onChange={(e) => { setName(e.target.value) }} /><br /><br />
                        <input type="email" placeholder="Email" style={formField} value={email} required onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
                        <textarea placeholder="Message" style={formField} value={message} required onChange={(e) => { setMessage(e.target.value) }}></textarea><br /><br />

                        <Button
                            title="Submit"
                            backgroundColor="#178748ff"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}



const formStyle = {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    width: 300,

};

const formField = {
    fontSize: '18px',
    width: '100%',
    padding: '7px',

};

export default ContactForm;