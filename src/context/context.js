import React, { useState, useMemo } from 'react';

export const ContextGlobal = React.createContext({
  theme: '',
  setTheme: () => {}
});

export const ContextProvider = ({ children }) => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const contextValue = useMemo(() => {
    return { theme, setTheme: toggleTheme };
  }, [theme]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};


 