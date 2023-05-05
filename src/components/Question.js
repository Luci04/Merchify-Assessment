import React, { useState, useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'
import Alphabet from './Alphabet';

function Question({ question, totalQuestion, currentQuestionIndex, setAnswer }) {

    const [selectedOption, setSelectedOption] = useState(null);
    const timer = useRef(null);
    const progressBar = useRef(null);

    function gotNextQuestion() {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        flushSync(() => {
            setAnswer(selectedOption);
        })

        setSelectedOption(null);
    }

    useEffect(() => {
        progressBar.current.classList.remove('active');

        setTimeout(() => {
            progressBar.current.classList.add('active');
        }, 0)

        timer.current = setTimeout(gotNextQuestion, 60 * 1000);

        return gotNextQuestion;

    }, [question])


    return (
        <div className='question'>
            <div className='progress-bar' ref={progressBar}>  </div>
            <div className='question-count'>
                <b>{currentQuestionIndex - 1} </b>
                of
                <b> {totalQuestion}</b>
            </div>
            <div className='main'>
                <div className='title'>
                    <span>Question:</span>
                    <p>
                        {question.title}
                    </p>
                </div>
                <div className='options'>
                    {
                        question.options.map((option, index) => {
                            return (
                                <div
                                    key={index}
                                    className={index === selectedOption ? "option active" : "option"}
                                    onClick={() => setSelectedOption(index)}
                                >
                                    <Alphabet index={index} />
                                    {option}
                                    <input type='radio' className='radio-input'
                                        checked={index === selectedOption}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='control'>
                <button onClick={gotNextQuestion}>Next</button>
            </div>
        </div>
    )
}

export default Question