import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const MainContent = () => {
  const { user, login, logout } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && email) login(name, email);
  };

  return (
    <main>
      {user.isLoggedIn ? (
        <>
          <h2>Hello, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </main>
  );
};

export default MainContent;
