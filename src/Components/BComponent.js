import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'

export default function BComponent() {
    const data = useContext(MyContext)
    console.log(data)
    return (
        <div>
            <h1>B, x = {data.x}
            <button onClick={()=>data.incrementY(data.y+1)}>increment y</button>
            </h1>
        </div>
    )
}
