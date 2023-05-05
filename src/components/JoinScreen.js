import React from 'react'

function JoinScreen({ start }) {
    return (
        <div className='join-screen'>
            <h2>Join Quiz</h2>
            <p>12 Questions</p>
            <p>12 Mins</p>
            <button onClick={start}>Start</button>
        </div>
    )
}

export default JoinScreen