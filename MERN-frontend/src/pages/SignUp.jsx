import React, { useState, useEffect } from "react";
import Button from "../component/Button";
import { useNavigate } from "react-router";
import { use } from "react";

const Auth = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submitted")

    // API implementation for login
    try {
      const body = {
        "username":username,
        "email": email,
        "password": password,
        "rePassword": rePassword
      }
      console.log("body", body)
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      console.log("Response from server", data) 
      navigate("/")
    } catch (err) {
      console.log("Signup failed", err)
      setError("Signup Failed!")
    }
    // token store 
  };

  const handleOnChangeUsername = (event) => {
    console.log("Username changed", event.target.value)
    let username = event.target.value;
    setUsername(username)
  }
  const onChangeEmail = (event) => {
    console.log("Email changed", event.target.value)
    let email = event.target.value;
    setEmail(email)
  }
  const onChangePassword = (event) => {
    console.log("Password changed", event.target.value)
    let password = event.target.value;
    setPassword(password)
  }

  const onChangeRePassword = (event) => {
    console.log("Re-Password changed", event.target.value)
    let rePassword = event.target.value;
    setRePassword(rePassword)
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

  const hadleOnBlurRePassword =()=>{
    if(rePassword !== password) setError("Password and Re-Password must be same")
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
      <form style={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', }} onSubmit={handleSubmit}>
        <input 
        type='text'
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleOnChangeUsername}
        style={{ padding: 10, margin: 10, fontSize: 16, borderRadius: 5, minWidth: 300 }} />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChangeEmail}
          onBlur={handleOnBlurEmail}
          value={email}
          style={{ padding: 10, margin: 10, fontSize: 16, borderRadius: 5, minWidth: 300 }}
        />
        <input placeholder="Password"
          type="password"
          name="password"
          onChange={onChangePassword}
          onBlur={handleOnBlurPassword}
          value={password}
          style={{ padding: 10, margin: 10, fontSize: 16, borderRadius: 5, minWidth: 300 }} />

  <input placeholder="Re-enter your Password"
          type="password"
          name="rePassword"
          onChange={onChangeRePassword}
          onBlur={hadleOnBlurRePassword}
          value={rePassword}
          style={{ padding: 10, margin: 10, fontSize: 16, borderRadius: 5, minWidth: 300 }} />

        <p style={{ color: 'red', margin: 10, fontSize: 16 }}>{error}</p>

        <Button title="Login" backgroundColor="blue" disabled={error.length > 0} />
      </form>

    </div>
  );
};

export default Auth;
