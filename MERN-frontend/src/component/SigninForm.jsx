import React, { useState, useEffect } from "react";
// import { navigate } from "react-router-dom";
import Button from "../component/Button.jsx";

function SigninForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const body = {
                "username" : name,
                "password":password
            }
            console.log("body", body)

            const res = await fetch("http://localhost:8080/api/auth/login",{
                method: "POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(body)
            })

            const data = await res.json()
            console.log("data", data)

            if(data.message === "Login Successfully"){
                // navigate("/")
                alert("success!!")
            }
        }catch(err){
            console.log("Login Failed ", err);
            setError("Login Failed")
        }
        // console.log({ name, email, password });
        // alert("Enquiry submitted!");

        // setName("");
        // setEmail("");
        // setPassword("");
        // setError("");
    };

    const handleOnBlurName = (e) => {
        if (e.target.value.trim() === "") {
            setError("Name can't be empty!");
        }
    };

    const handleOnBlurEmail = (e) => {
        if (!e.target.value.includes("@")) {
            setError("Invalid email address!");
        }
    };

    const handleOnBlurPassword = (e) => {
        if (e.target.value.length < 5) {
            setError("Password must be at least 8 characters!");
        }
    };

    useEffect(() => {
        if (name.length > 0 && email.includes("@") &&password.length >= 5) {
            setError("");
        }
    }, [name, email, password]);

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={formStyle}>
                <h3>Sign In form</h3>

                {error && <div style={{ color: "red" }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        style={formField}
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleOnBlurName}
                    />

                    <br /><br />

                    <input
                        type="email"
                        style={formField}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleOnBlurEmail}
                    />

                    <br /><br />

                    <input
                        type="password"
                        style={formField}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handleOnBlurPassword}
                    />

                    <br /><br />

                    <Button title="Submit" backgroundColor="#178748ff" type="submit" />
                </form>
            </div>
        </div>
    );
}

const formStyle = {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    width: 300,
};

const formField = {
    fontSize: "18px",
    width: "100%",
    padding: "7px",
};

export default SigninForm;
