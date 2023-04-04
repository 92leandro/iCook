import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userRegistry = {
    name,
    email,
    password
  };

  const navigate = useNavigate();

  const handleRegistry = (e) => {
    e.preventDefault();
    const userRegistryJSON = JSON.stringify(userRegistry);
    localStorage.setItem('userRegistry', userRegistryJSON);

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
            value={name}
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
          type="submit" onClick={handleRegistry}>Registry</button>


      </form>
    </div>
  )
};

export default Registry;
