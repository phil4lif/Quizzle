import React from 'react';

const Button = ({onClick, label}) => {
  const styles = {
    container: {
      backgroundColor: 'green',
      color: 'white',
      padding: 16,
      width: 200,
      borderRadius: 12
    }
  }
  return (
    <div onClick={onClick} style={styles.container}>
      {label}
    </div>
  )
}

export default Button;