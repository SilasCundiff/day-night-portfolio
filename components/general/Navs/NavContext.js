import React, { createContext, useContext } from 'react';

const NavContext = createContext(undefined);

const NavProvider = ({ children, value }) => {
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

const useNavContext = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useNavContext must be used within a NavProvider');
  }
  return context;
};

export { NavProvider, useNavContext };
