import React from 'react';

const Timer = ({timeRemaining}) => {


  const timeAsPct = (input) => {
    let timeStr = (input / 30 * 100).toString()
    let timePercent = timeStr += '%';
    return timePercent;
  };

  const styles = {
    timerContainer: {
      backgroundColor: 'yellow',
      height: 24,
      width: 200,
    },
    timeBar: {
      backgroundColor: 'green',
      height: 22,
      width: timeAsPct(timeRemaining)
    }
  }
  return (
    <div>
      <p>{timeRemaining}</p>
      <div style={styles.timerContainer}>
        <div style={styles.timeBar}>
        </div>
      </div>
    </div>
  )
}

export default Timer;