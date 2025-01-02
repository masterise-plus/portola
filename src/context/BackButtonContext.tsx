import { createContext, useContext, useState, useEffect } from 'react';

type BackButtonContextType = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const BackButtonContext = createContext<BackButtonContextType>({
  isVisible: false,
  setIsVisible: () => {},
});

export const BackButtonProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BackButtonContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </BackButtonContext.Provider>
  );
};

export const useBackButton = () => useContext(BackButtonContext);
