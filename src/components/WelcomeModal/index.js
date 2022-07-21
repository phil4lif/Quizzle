import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('body');

const WelcomeModal = ({isOpen, setIsOpen, onRequestClose, setGameReady}) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    readyBtn: {
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
    <Modal isOpen={isOpen}>
      <div style={styles.container}>
        <h2>Welcome to Quizzle</h2>
        <p>You have 30 seconds to answer the question of the day.</p>
        <p>If you answer correctly your score will be the amount of time remaining.</p>
        <p>Incorrect answers will result in a score of zero.</p>
        <p>Don't forget to share your result with your friends via text or social.</p>
        <p>You will not see this message again.</p>

        <div style={styles.readyBtn}
          onClick={() => {
          localStorage.setItem('playedBefore', 'yes')
          setGameReady(true)
          onRequestClose();
        }}>Ready?</div>
      </div>
    </Modal>
  )
}

export default WelcomeModal;