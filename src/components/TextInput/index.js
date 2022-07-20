import React from 'react';

const TextInput = ({onChange, value, placeholder}) => {

  const styles = {
    input: {
      height: 24,
      display: 'flex',
      width: 200,
      border: 'none',
      borderBottom: '1px solid'
    }
  }
  return (
    <input autoCapitalize='off' autoCapitalize='off' spellCheck='false' autoComplete='off' placeholder={placeholder} style={styles.input} onChange={onChange} value={value} type='text'></input>
  )
}

export default TextInput;