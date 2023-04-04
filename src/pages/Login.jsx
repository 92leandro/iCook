import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginEmail, setloginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');

  const regex = /\S+@\S+\.\S+/;
  const MIN_PASSWORD_LENGTH = 6;
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    if (user && user.email === loginEmail && user.password === loginPassword) {
      localStorage.setItem('isLoggedIn', true)
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  }

  return (
    <div>
      <h1>iCook</h1>

      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setloginEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setloginPassword(e.target.value)}
        />

        <button
        type="submit"
        onClick={handleLogin}
        disabled={!regex.test(loginEmail) || loginPassword.length < MIN_PASSWORD_LENGTH}
        >
          Login
        </button>
        <h3>Don't have an account? <Link to="/registry">Registry</Link></h3>
      </form>
    </div>
  )
}

export default Login;
