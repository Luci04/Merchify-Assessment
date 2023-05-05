import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import JoinScreen from './components/JoinScreen';
import QuizScreen from './components/QuizScrren';
import Navbar from './components/Navbar';

function App() {

  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <>
      <Navbar />
      <div className='quiz-container'>
        {
          isQuizStarted ? (
            <QuizScreen retry={() => setIsQuizStarted(false)} />
          ) : (
            <JoinScreen start={() => setIsQuizStarted(true)} />
          )
        }
      </div>
    </>
  );
}

export default App;
