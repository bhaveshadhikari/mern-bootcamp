import React, { useState } from "react";
import Button from "../component/Button.jsx";
import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import { Link } from "react-router";
function NotFound404(){
    return(
        <>
        <Navbar/>
        <div style={{ textAlign: "center", padding: "40px",  height:"50vh"}}>
            <h2>Oops!!</h2>
            <p>The page you are looking for seems to be missing!</p>

            <Link to = {"/"} style={{textDecoration:"none", justifyContent:"center", display:"flex"}}>
            <Button title={"Return to Home"} backgroundColor={"#24386eff"}></Button>
            </Link>
            
        </div>
        <Footer />
        </>
        
        
    );
}
export default NotFound404;
