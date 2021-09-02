import { createContext, useContext } from 'react';

const DayModeContext = createContext(undefined);

const DayModeProvider = ({children, value}) => {
  return <DayModeContext.Provider value={value}>{children}</DayModeContext.Provider>
};

const useDayModeContext = () => {
  const context = useContext(DayModeContext);
  if (context === undefined) {
    throw new Error('useDayModeContext must be used within a DayModeProvider');
  }
  return context;
};

export { DayModeProvider, useDayModeContext };