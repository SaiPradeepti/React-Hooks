import React,{ useEffect, useState } from 'react'
import { useDocumentCount } from './useDocumentCount'

const UpdateTitleApp = () => {
    const { display, displayHome, displayCounter, value, increment, decrement } = useDocumentCount();
        
    return (
        <div>
            <button className="btn" onClick={()=>displayHome()}>Home</button>
            <button className="btn" onClick={()=>displayCounter()}>Counter</button>
            {
                display === 'home' && <div className="home">Welcome to Home</div>
            }
            {
                display === 'counter' && (
                <>
                    <div className="home">Welcome to Counter</div>
                    <section className='counter'>
                        <button className="btn" onClick={()=>increment()}>Inc</button>
                        <div>{value}</div>
                        <button className="btn" onClick={()=>decrement()}>Dec</button>
                    </section>
                </>
                ) 
            }
        </div>
    )
}

export default UpdateTitleApp
