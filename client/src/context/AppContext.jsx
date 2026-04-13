import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
