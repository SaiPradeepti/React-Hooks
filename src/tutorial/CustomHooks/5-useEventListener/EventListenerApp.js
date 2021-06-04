import React, { useRef } from 'react'

const EventListenerApp = () => {
    const divRef = useRef(null);
    const handleClick = (e) => {
        if(!e.target.classList.contains('btn')){
            alert('you have clicked outside button')
        }
    }

    return (
        <div style={{border:'1px solid black',height:'90vh',width:'90vw'}} ref={divRef} onClick={handleClick}>
            useEventListener
            <button onClick={()=>alert('you have clicked inside button')} className='btn'>Hello</button>
            Click anywhere to see alert
        </div>
    )
}

export default EventListenerApp
