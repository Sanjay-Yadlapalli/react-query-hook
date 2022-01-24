import React from 'react'
import './Style.css'

function Home() {
    return (
        <div style={{height : '80vh' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
            <div className='single'>
                <h1 style={{fontFamily : 'sans-serif'}}>This is Home Page..!</h1>
            </div>
        </div>
    )
}

export default Home
