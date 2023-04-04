import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registry() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    name: username,
    email,
    password
  };

  const navigate = useNavigate();
  const regex = /\S+@\S+\.\S+/;
  const MIN_PASSWORD_LENGTH = 6;

  const handleRegistry = (e) => {
    e.preventDefault();
    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);

    navigate('/login');
  }

  return (
    <div>
      <h2>Registry</h2>
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          type="submit"
          disabled={ !regex.test(email) || password.length < MIN_PASSWORD_LENGTH }
          onClick={handleRegistry}
          >
          Registry
        </button>

      </form>
    </div>
  )
};

export default Registry;
