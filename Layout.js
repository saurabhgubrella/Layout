import React from 'react'
import { useNavigate } from "react-router-dom";

function Layout() {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/register")
    }
    const handleMove=()=>{
        navigate("/parent")
    }
  return (
    <div>
    <div><h2>WELCOME TO THE CODING CHALLENGE</h2>
    <button onClick={handleClick}>Register here</button>
    <button onClick={handleMove}>Render here</button>
    </div>
    </div>
  )
}

export default Layout;