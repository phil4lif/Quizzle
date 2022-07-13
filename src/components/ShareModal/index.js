import React from 'react';
import Modal from 'react-modal';
import Spacer from '../Spacer';
import {FaShareAlt} from 'react-icons/fa';

const ShareModal = ({isOpen, onRequestClose, score, answer, isCorrect}) => {
  const share = async () => {
    await navigator.share({title: 'Quizzle', url: 'app.quizzle.dev', text: score})
    onRequestClose()
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    shareBtn: {

    }
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div style={styles.container}>
      <h2>{isCorrect ? 'Nailed It!' : 'Oh Heck!'}</h2>
      <h3>{!isCorrect ? `The answer is ${answer}` : null}</h3>

      <h3>Your Score: {score}</h3>

      <div onClick={share}>
        Share
        <FaShareAlt />
      </div>
      </div>
    </Modal>
  )
}

export default ShareModal;