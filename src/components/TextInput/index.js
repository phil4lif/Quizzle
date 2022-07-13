import React from 'react';

const TextInput = ({onChange, value, placeholder}) => {

  const styles = {
    input: {
      borderRadius: 12,
    }
  }
  return (
    <input placeholder={placeholder} style={styles.input} onChange={onChange} value={value} type='text'></input>
  )
}

export default TextInput;