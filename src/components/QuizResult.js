import React from 'react'

function QuizResult({ result, retry }) {
    return (
        <div className='result-screen'>
            <h2>Result : {result.precentage}%</h2>
            <p>Selected {result.correct} / {result.total}</p>
            <button onClick={retry}>
                Try Again
            </button>
        </div>
    )
}

export default QuizResult