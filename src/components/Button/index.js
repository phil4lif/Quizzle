import React from 'react';

const Button = ({onClick, label, children}) => {
  const styles = {
    container: {
      backgroundColor: 'green',
      color: 'white',
      padding: 16,
      width: 200,
      borderRadius: 12,
      textAlign: 'center'
    }
  }
  return (
    <div onClick={onClick} style={styles.container}>
      {label}{children}
    </div>
  )
}

export default Button;