import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'


export default function CComponent() {
    const data = useContext(MyContext)
    console.log(data)
    return (
        <div>
            <h1>C, y = {data.y}
             <button onClick={()=>data.incrementX(data.x+1)}>increment x</button>
            </h1>
        </div>
    )
}

