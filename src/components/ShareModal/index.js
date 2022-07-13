import React from 'react';
import Modal from 'react-modal';
import {FaShareAlt} from 'react-icons/fa';

const ShareModal = ({isOpen, onRequestClose, score, answer, isCorrect}) => {
  const share = async () => {
    await navigator.share({title: 'Quizzle', url: 'app.quizzle.dev', text: score})
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      Congratulations
      isCorrect: {isCorrect ? 'true' : 'false'}
      answer: {answer}
      Score: {score}

      <div onClick={share}>
        Share
        <FaShareAlt />
      </div>
    </Modal>
  )
}

export default ShareModal;