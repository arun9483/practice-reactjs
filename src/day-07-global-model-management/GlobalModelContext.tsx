import { createContext, useCallback, useContext, useState } from 'react';

interface GlobalModelContextType {
  isOpen: boolean;
  showModel: () => void;
  hideModel: () => void;
}

const initialState: GlobalModelContextType = {
  isOpen: false,
  showModel: () => {},
  hideModel: () => {},
};

const GlobalModelContext = createContext(initialState);

export const GlobalModelProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const showModel = useCallback(() => {
    setIsOpen(true);
  }, []);
  const hideModel = useCallback(() => {
    setIsOpen(false);
  }, []);
  return <GlobalModelContext value={{ isOpen, showModel, hideModel }}>{children}</GlobalModelContext>;
};

export const useGlobalModel = () => {
  const globalModelContext = useContext(GlobalModelContext);
  if (!globalModelContext) {
    throw new Error(`useGlobalModel is used outside of GlobalModelContext Provider`);
  }
  return globalModelContext;
};
