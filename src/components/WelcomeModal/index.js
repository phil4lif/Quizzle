import React from 'react';
import Modal from 'react-modal';
import Button from '../Button';

Modal.setAppElement('body');

const WelcomeModal = ({ isOpen, setIsOpen, onRequestClose, setGameReady }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }
  return (
    <Modal isOpen={isOpen}>
      <div style={styles.container}>
        <h2>Welcome to Quizzle</h2>
        <p>You have 30 seconds to answer the question of the day.</p>
        <p>If you answer correctly your score will be the amount of time remaining.</p>
        <p>Incorrect answers will result in a score of zero.</p>
        <p>Don't forget to share your result with your friends via text or social.</p>
        <p>You will not see this message again.</p>

        <Button onClick={() => {
          localStorage.setItem('playedBefore', 'yes')
          setGameReady(true)
          onRequestClose();
        }}
        label='Ready?'/>
      </div>
    </Modal>
  )
}

export default WelcomeModal;