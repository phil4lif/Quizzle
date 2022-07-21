import React, {useEffect, useContext, useState, useRef} from 'react';
import QuestionCard from '../../components/QuestionCard';
import ShareModal from '../../components/ShareModal';
import TextInput from '../../components/TextInput';
import Timer from '../../components/Timer';
import QuestionContext from '../../context/questionContext';
import Spacer from '../../components/Spacer';
import Button from '../../components/Button';

const Home = () => {
  const {qotd, error, qotdLoading, getQotd} = useContext(QuestionContext);
  const [answer, setAnswer] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [gameReady, setGameReady] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(timeRemaining);
  const isAnsweredRef = useRef(isAnswered);
  const isCorrect = useRef(false)
  const score = useRef(0)

  useEffect(() => {
    getQotd();
  },[])

  useEffect(() => {
    let storedId = localStorage.getItem('lastAnsweredId')
    if (!storedId) {
      setGameReady(true)
    }
    if (storedId !== qotd?._id) {
      //they have not answered todays question
      setGameReady(true)
    } else {
      //they have already answered
      score.current = localStorage.getItem('score');
      isCorrect.current = JSON.parse(localStorage.getItem('isCorrect'));
      setAnswer(localStorage.getItem('submittedAnswer'));
      setTimeRemaining(localStorage.getItem('score'));
      setIsOpen(true)
      setGameReady(false)
    }
  },[qotd])
  console.log(isCorrect.current)
  useEffect(() => {
    let timerId
    if(gameReady){
      timerId = setInterval(() => {
      timerRef.current -= 1;
      if (isAnsweredRef.current === true) {
        clearInterval(timerId)
      } else if (timerRef.current < 0) {
        clearInterval(timerId)
      } else {
        setTimeRemaining(timerRef.current)
      }
    }, 1000);
  }
    return () => {
      clearInterval(timerId)
    }
  }, [gameReady]);

  // const startGame = () => {
  //   const timerId = setInterval(() => {
  //     timerRef.current -= 1;
  //     if (isAnsweredRef.current === true) {
  //       clearInterval(timerId)
  //     } else if (timerRef.current < 0) {
  //       clearInterval(timerId)
  //     } else {
  //       setTimeRemaining(timerRef.current)
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(timerId)
  //   }
  // }

  const storeResult = () => {
    localStorage.setItem('lastAnsweredId', qotd._id)
    localStorage.setItem('submittedAnswer', answer)
    localStorage.setItem('score', score.current)
    localStorage.setItem('isCorrect', isCorrect.current)
  }

  const checkAnswer = () => {
    if (answer.toLowerCase() == qotd.correctAnswer.toLowerCase()) {
      isCorrect.current = true;
      score.current = timeRemaining;
      setIsOpen(true);
      storeResult();
    } else {
      isCorrect.current = false;
      score.current = 0
      setIsOpen(true);
      storeResult();
    }
  }

  const handleText = (e) => {
    console.log(e.target.value)
    setAnswer(e.target.value)
  }

  const submitAnswer = () => {
    console.log('clicked')
    setIsAnswered(true);
    isAnsweredRef.current = true;
    checkAnswer()
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      textAlign: 'center'
    }
  }
  if (qotdLoading || !qotd) return <div>Loading...</div>
  return (
    <div style={styles.container}>
      <ShareModal setIsOpen={setIsOpen} isCorrect={isCorrect.current} score={score.current} answer={qotd.correctAnswer} isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      <h1>Quizzle</h1>
      <QuestionCard q={qotd}/>
      <Timer timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining}/>
      <Spacer h={24} />
      <TextInput placeholder='Type Your Answer' value={answer} onChange={handleText} />
      <Spacer h={24} />
      <Button label='Send It!' onClick={submitAnswer} />
    </div>
  )
}

export default Home;