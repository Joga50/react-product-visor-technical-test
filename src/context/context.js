import React, { useState, useMemo } from 'react';

export const ContextGlobal = React.createContext({
  theme: '',
  setTheme: () => {}
});

export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

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


 