import { createContext } from "react";

const AppContext = createContext({});

interface AppProviderProps {
  children: any;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AppContext.Provider value={{ text: "Meu texto no Contexto" }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
