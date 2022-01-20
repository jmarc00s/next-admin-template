import { createContext, useEffect, useState } from 'react';

type Theme = 'dark' | '';
interface AppContextModel {
  theme: Theme;
  changeTheme: () => void;
}

const AppContext = createContext<AppContextModel>({
  theme: '',
  changeTheme: () => {},
});

interface AppProviderProps {
  children: any;
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setTheme(theme === '' ? '' : 'dark');
  }, []);

  function changeTheme() {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
