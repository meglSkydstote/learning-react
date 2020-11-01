import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home() {
    return (
        <div>
            <h1 className="font-bol text-2xl">This is the home page</h1>
            <HelloWorld name="Mikkel" />
        </div>
    )
}

export default Home