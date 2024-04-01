import React, { useState, useEffect } from 'react';
import LoginScreen from './components/Auth/LoginScreen';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import Slider from './components/Slider/Slider';
import { SliderProvider } from './contexts/Slider/SliderContext';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
      <div className="flex h-screen justify-center bg-white">
        <GlobalStyle />
        <LoginScreen />
      </div>
  );
};

export default App;
