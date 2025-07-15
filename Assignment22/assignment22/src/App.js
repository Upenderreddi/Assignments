import React from 'react';
import { ThemeProvider } from './Components/ThemeContext';
import { UserProvider } from './Components/UserContext';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import './index.css';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="app">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
