import React from 'react';

interface UserContextValue {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

interface UserContextProviderProps{
    children: React.ReactNode;
}
export const UserContext = React.createContext<UserContextValue>(
  undefined as any
);

export const UserContextProvider = React.memo<UserContextProviderProps>(({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const contextValue = React.useMemo<UserContextValue>(() => {
    return {
      isLoggedIn,
      setIsLoggedIn
    };
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
});
