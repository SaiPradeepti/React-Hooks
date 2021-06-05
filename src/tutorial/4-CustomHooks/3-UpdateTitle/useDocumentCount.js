import React,{ useEffect, useState } from 'react'

export const useDocumentCount = () => {
    const [display,setDisplay] = useState('home'); 
    const [value,setValue] = useState(0);
    
    useEffect(()=>{
        document.title = `count is ${value}`;

        setTimeout(()=>{
            document.title = `React App`;
        },1000)
    },[value])

    const displayHome = () => {
        setDisplay( 'home' )
    }
    const displayCounter = () => {
        setDisplay( 'counter' )
    }
    const increment = () => {
        setValue( value + 1 )
    }
    const decrement = () => {
        setValue( value - 1 )
    }

    return { display, displayHome, displayCounter, value, increment, decrement };
}

// export default useDocumentCount();