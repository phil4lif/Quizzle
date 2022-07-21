import React from 'react';
import Modal from 'react-modal';
import Spacer from '../Spacer';
import Button from '../Button';
import {FaShareAlt} from 'react-icons/fa';
Modal.setAppElement('body')
const ShareModal = ({isOpen, setIsOpen, onRequestClose, score, answer, isCorrect}) => {
  const greenSquare = '🟩';
  const yellowSquare = '🟨';
  const redSquare = '🟥';

  const generateSquares = () => {
    const fifth = Math.floor(score / 5)
    let squareStr = ''
    for (let i = 0; i < fifth; i++) {
      squareStr += greenSquare
    }
    let yellows = score > 0 ? Math.floor((30 - score) / 5) : null;
    for (let i = 0; i < yellows; i++) {
      squareStr += yellowSquare;
    }
    if (score === 0) {
      for (let i = 0; i < 6; i++) {
        squareStr += redSquare;
      }
    }
    return squareStr
  }
  const share = async () => {
    let squares = generateSquares()
    try {
    const response = await navigator.share({title: 'Quizzle', url: 'app.quizzle.dev', text: score + ' ' + squares})
    } catch (e) {
      console.log(squares)
      console.log(e)
      window.alert('Browser does not support share')
    }
    setIsOpen(false)
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    shareBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderStyle: 'solid',
      padding: 8,
      fontSize: 22,
      width: 100,
      fontWeight: 'bold',
      backgroundColor: 'green'
    }
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div style={styles.container}>
      <h2>{isCorrect ? 'Nailed It!' : 'Oh Heck!'}</h2>
      <h3>{!isCorrect ? `The answer is ${answer}` : null}</h3>

      <h3>Your Score: {score}</h3>
      <Button onClick={share} label='Share'><FaShareAlt style={{float:'right', width: 20, height: 20}} /></Button>
      {/* <div style={styles.shareBtn} onClick={share}>
        <div>Share</div>
        <FaShareAlt />
      </div> */}
      </div>
    </Modal>
  )
}

export default ShareModal;