import React, { useState } from 'react'
import QuestionList from "../data/questions.json"
import Question from './Question.js';
import QuizResult from './QuizResult.js';

function QuizScrren({ retry }) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswer, setMarkedAnser] = useState(new Array(QuestionList.length))
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    function calculateResult() {
        let correct = 0;
        QuestionList.forEach((question, index) => {
            if (question.correctIndex === markedAnswer[index]) {
                correct++;
            }
        })

        return {
            total: QuestionList.length,
            correct: correct,
            precentage: Math.floor((correct / QuestionList.length) * 100)
        }
    }

    return (
        <div className='quiz-screen'>
            {
                isQuestionEnd ? (
                    <QuizResult
                        result={calculateResult()}
                        retry={retry}
                    />
                ) : (
                    <Question
                        question={QuestionList[currentQuestionIndex]}
                        totalQuestion={QuestionList.length}
                        currentQuestionIndex={currentQuestionIndex + 1}
                        setAnswer={(index) => {
                            setMarkedAnser((arr) => {
                                let newArr = [...arr];
                                // newArr[currentQuestion] = index
                                newArr[currentQuestionIndex - 1] = index

                                return newArr;
                            })
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                        }}


                    />
                )
            }
        </div>
    )
}

export default QuizScrren