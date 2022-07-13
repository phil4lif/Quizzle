import React, {useEffect, useContext, useState, useRef} from 'react';
import QuestionCard from '../../components/QuestionCard';
import TextInput from '../../components/TextInput';
import Timer from '../../components/Timer';
import QuestionContext from '../../context/questionContext';

const Home = () => {
  const {qotd, error, qotdLoading, getQotd} = useContext(QuestionContext);
  const [answer, setAnswer] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isCorrect, setIsCorrect] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const timerRef = useRef(timeRemaining);
  const isAnsweredRef = useRef(isAnswered);

  useEffect(() => {
    getQotd();
  },[])

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (isAnsweredRef.current === true) {
        console.log('in if')
        clearInterval(timerId)
      } else if (timerRef.current < 0) {
        clearInterval(timerId)
      } else {
        setTimeRemaining(timerRef.current)
      }
    }, 1000);
    return () => {
      clearInterval(timerId)
    }
  }, []);

  const checkAnswer = () => {
    console.log('qotd.correctanswer == answer', qotd.correctAnswer === answer)
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
      <h1>Quizzle</h1>
      <QuestionCard q={qotd}/>
      <Timer timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining}/>
      <TextInput placeholder='Type Your Answer' value={answer} onChange={handleText} />
      <button onClick={submitAnswer}>Submit</button>
    </div>
  )
}

export default Home;