import { useState, useEffect } from 'react'
import { lightOrDark } from './checkColor'

export const useBackgroundTheme = () => {

const [color, setColor] = useState('white');
const [darkTheme,setDarkTheme] = useState(false); 
useEffect(() => {
        const handler = (e) => {
            if(e.keyCode === 13){
                document.body.style.background = color;
                if(lightOrDark(color) === 'dark')
                    setDarkTheme(true);
                else if(lightOrDark(color) === 'light')
                    setDarkTheme(false);
            }
        }

        window.addEventListener('keyup', handler)
        return () => {
            window.removeEventListener('keyup', handler)
        }
}, [color]);

return { color, setColor, darkTheme };

}