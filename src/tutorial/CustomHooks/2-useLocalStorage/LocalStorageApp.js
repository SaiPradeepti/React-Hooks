import React from 'react'
import useLocalStorage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger'

const LocalStorageApp = () => {
    const [name,setName] = useLocalStorage('name','');
    useUpdateLogger(name);
    return (
        <div>
            <input type="text" className="input" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}

export default LocalStorageApp
