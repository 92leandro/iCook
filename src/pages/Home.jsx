import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
// import { fetchAllFoods } from "../api/foodApi";

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


    </div>
  )
}

export default Home
