import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <footer className={`footer ${theme}`}>
      <p>Current Theme: {theme}</p>
      <p>User Email: {user.isLoggedIn ? user.email : 'Not Logged In'}</p>
    </footer>
  );
};

export default Footer;
