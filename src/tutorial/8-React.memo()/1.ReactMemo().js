import React, { useState, useEffect } from 'react'

const MemoizedComponent = React.memo(({ toggle }) => {
    return (
        <div className="memoized-component" style={{border: '1px solid red'}}>
                {
                    console.log('memoized component getting rendered')
                }
                <h1>Memoized Component - This output is rendered only once even though wrapper component renders several times</h1>
            </div>
    )
})

const ReactMemo = () => {
    const [counter,setCounter] = useState(0);
    const [toggle,setToggle] = useState(true)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCounter(counter+1);
            setToggle(!toggle)
        }, 2000)

        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div style={{padding:'5rem 10rem',display: 'flex',flexDirection: 'column', gap: '3rem',textAlign: 'center', border: '1px solid red',background: toggle ? 'lightgreen' : 'pink'}}>
            <p>This is the main components that wraps everything and renders everytime counter updates...</p>
            <div className="normal-component" style={{border: '1px solid red'}}>
                {
                    console.log('normal component getting rendered')
                }
                <h1>Normal-Component: This output is rendered everytime wrapper component renders</h1>
            </div>
            <MemoizedComponent />
        </div>
    )
}

export default ReactMemo
