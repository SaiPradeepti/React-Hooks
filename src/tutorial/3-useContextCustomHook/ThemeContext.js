import React, { useState ,useContext } from 'react'

export const ThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children}) => {      
    const [darkTheme,setDarkTheme] = useState(true);
    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={{darkTheme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}