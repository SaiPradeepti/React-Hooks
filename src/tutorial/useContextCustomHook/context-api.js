import React, { useState } from 'react'
import { ThemeProvider } from './ThemeContext'
import { useTheme } from './ThemeContext'

const ContextAPI = () => {
    
    return (
        <>
         <ThemeProvider >
            <FunctionContextComponent/>
         </ThemeProvider>
        </>
    )
}

const FunctionContextComponent = () => {
    // const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const { darkTheme, toggleTheme } = useTheme();
    console.log(darkTheme);
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem',
    }
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>
                Function Theme
            </div>
        </>
    )
}

export default ContextAPI
