import React from 'react'
import './Home.css';
import Code from './Code'

function Home() {
    return (
        <div className="home">
            <div className="home__navbar">
                <h2>Dyte - Code Editor</h2>
            </div>
            <Code/>
        </div>
    )
}

export default Home
