import React from 'react';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>iCook</h1>

      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <button type="submit">Login</button>
        <h3>Don't have an account? <Link to="/registry">Registry</Link></h3>
      </form>
    </div>
  )
}

export default Login;
