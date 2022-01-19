import { createContext, useState } from 'react';

type Theme = 'dark' | '';
interface AppContextModel {
  theme: Theme;
  changeTheme: () => void;
}

const AppContext = createContext<AppContextModel>({
  theme: 'dark',
  changeTheme: () => {},
});

interface AppProviderProps {
  children: any;
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  function changeTheme() {
    setTheme(theme === '' ? 'dark' : '');
  }

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
