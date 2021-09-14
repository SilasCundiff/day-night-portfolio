import { createContext, useContext } from 'react';

const ModalContext = createContext(undefined);

const ModalProvider = ({ children, value }) => {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

export { ModalProvider, useModalContext };
