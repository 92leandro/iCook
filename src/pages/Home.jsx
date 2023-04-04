import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (!loggedIn) {
      navigate('/login');
    }
  },)

  return (
    <div>
      <h1>iCook</h1>
      <p>What are we cooking today?</p>

      <Link to="/foods">Foods</Link> or <Link to="/drinks">Drinks</Link>
      
    </div>
  )
}

export default Home
