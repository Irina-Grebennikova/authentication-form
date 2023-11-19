import { Dispatch, SetStateAction, createContext } from 'react';

type AppContextType = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType>({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {},
});

export { AppContext };
