import React from 'react'

function Alphabet({ index }) {
    return (
        <span className='alphabet_container'>
            {index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'}
        </span>
    )
}

export default Alphabet;