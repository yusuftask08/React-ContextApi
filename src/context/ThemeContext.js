import { createContext, useState, useEffect } from "react"
import { useContext } from "react/cjs/react.development";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        console.log('theme :>> ', theme);
        localStorage.setItem('theme', theme)
    }, [theme]);

    const values = {
        theme,
        setTheme
    };

    return <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>
}
export const useTheme = () => useContext(ThemeContext)