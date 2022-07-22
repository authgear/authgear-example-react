import React, { createContext, useState } from "react";

interface UserContextValue {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const UserContext = createContext<UserContextValue>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const contextValue = React.useMemo<UserContextValue>(() => {
    return {
      isLoggedIn,
      setIsLoggedIn,
    };
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
