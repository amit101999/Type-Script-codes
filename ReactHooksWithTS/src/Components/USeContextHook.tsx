import {  createContext, ReactNode, useState } from "react";
import ContextBox from "./ContextBox";

type themeType = "light" | "dark"

interface ThemeContextType{
    theme: themeType;
    toggleTheme: () => void;
    
}
// here themeContext can be null as mentioned but we have
// choose a default  light theme
export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {}
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    
    const [theme, setTheme] = useState<themeType>("light")
    
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme :theme , toggleTheme :toggleTheme}}>
          {children}
    </ThemeContext.Provider>
    )
}


const USeContextHook = () => {
  return (
      <ThemeProvider>
          <div>
              <ContextBox />
          </div>
      </ThemeProvider>
  )
}

export default USeContextHook