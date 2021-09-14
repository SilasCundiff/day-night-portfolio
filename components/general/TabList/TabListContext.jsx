import { createContext, useContext } from 'react';

const TabListContext = createContext(undefined);

const TabListProvider = ({ children, value }) => {
  return (
    <TabListContext.Provider value={value}>{children}</TabListContext.Provider>
  );
};

const useTabListContext = () => {
  const context = useContext(TabListContext);
  if (context === undefined) {
    throw new Error('useTabListContext must be used within a TabListProvider');
  }
  return context;
};

export { TabListProvider, useTabListContext };
