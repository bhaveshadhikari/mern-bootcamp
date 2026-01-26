import React, { useState, useEffect } from "react";
import Button from "../component/Button.jsx";

function SigninForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ name, email, password });
        alert("Enquiry submitted!");

        setName("");
        setEmail("");
        setPassword("");
        setError("");
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
        if (e.target.value.length < 8) {
            setError("Password must be at least 8 characters!");
        }
    };

    useEffect(() => {
        if (name.length > 0 && email.includes("@") &&password.length >= 8) {
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
