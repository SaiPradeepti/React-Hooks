import { useState, useEffect } from 'react'
import { lightOrDark } from './checkColor'
import useLocalStorage from '../2-useLocalStorage/useLocalStorage';

export const useBackgroundTheme = () => {

const [value,setValue] = useLocalStorage('color','');
const [color, setColor] = useState(()=>{
    if(value)
        return value
    else
        return '#1F1F4D'
});
const [darkTheme,setDarkTheme] = useState(false); 
useEffect(() => {
        setValue(color)
        const handler = (e) => {
            // if(e.keyCode === 13){
            //     document.body.style.background = color;
            //     if(lightOrDark(color) === 'dark')
            //         setDarkTheme(true);
            //     else if(lightOrDark(color) === 'light')
            //         setDarkTheme(false);
            // }
            document.body.style.background = color;
                if(lightOrDark(color) === 'dark')
                    setDarkTheme(true);
                else if(lightOrDark(color) === 'light')
                    setDarkTheme(false);
        }

        handler();

        // window.addEventListener('keyup', handler)
        return () => {
            // window.removeEventListener('keyup', handler)
        }
}, [color]);

return { color, setColor, darkTheme };

}