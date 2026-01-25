import React, { useState, useEffect } from "react";
import Button from "../component/Button";

const Auth = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    console.log("Form submitted")
    // API implementation for login
    // token store 
  };

  const onChangeEmail = (event) => {
    console.log("Email changed", event.target.value)
    let email = event.target.value;
    setEmail(email)
  }
  const onChangePassword = (event) => {
    console.log("Password changed", event.target.value)
    let email = event.target.value;
    setPassword(email)
  }

  const handleOnBlurEmail = () => {
    console.log("user compeleted editing email")
    if (email.length < 5) {
      setError("Email must be greater than 5 characters")
      setEmail("")
    }
  }

  const handleOnBlurPassword = () => {
    if (password.length < 5) setError("Min. Password length is 5 characters")
  }

  useEffect(() => {
    if (email.length > 5) {
      setError("")
    }
    if (password.length > 5) setError("")
  }, [email, password])

  return (
    <div style={{ height: "100vh", paddingTop: 100, backgroundColor: 'lightgray', padding: 10, borderRadius: 10 }}>
      <h1 style={{ textAlign: 'center', margin: 10, fontSize: 24 }}> Login</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
        <input
          type="email"
          placeholder="Email"
          onChange={onChangeEmail}
          onBlur={handleOnBlurEmail}
          value={email}
          style={{ padding: 10, margin: 10, fontSize: 16, borderRadius: 5, minWidth: 300 }}
        />
        <input placeholder="Password"
          type="password"
          onChange={onChangePassword}
          onBlur={handleOnBlurPassword}
          value={password}
          style={{ padding: 10, margin: 10, fontSize: 16, borderRadius: 5, minWidth: 300 }} />

        <p style={{ color: 'red', margin: 10, fontSize: 16 }}>{error}</p>

        <Button title="Login" backgroundColor="blue" disabled={error.length > 0} />
      </form>

    </div>
  );
};

export default Auth;
