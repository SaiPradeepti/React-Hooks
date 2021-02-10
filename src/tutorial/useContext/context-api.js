import React, { useState,useContext } from 'react'

export const ThemeContext = React.createContext()

const ContextAPI = () => {
    const [darkTheme,setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <>
         <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <FunctionContextComponent/>
         </ThemeContext.Provider>
        </>
    )
}

const FunctionContextComponent = () => {
    const darkTheme = useContext(ThemeContext);
    console.log(darkTheme);
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <div style={themeStyles}>
            Function Theme
        </div>
    )
}

export default ContextAPI
