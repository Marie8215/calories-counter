import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router';


const NavigateContext = createContext();

export const useNavigateContext = () => {
  return useContext(NavigateContext);
};

export const NavigateProvider = ({ children }) => {
  const navigate = useNavigate();
  return (
    <NavigateContext.Provider value={navigate}>
      {children}
    </NavigateContext.Provider>
  );
};