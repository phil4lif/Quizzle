import axios from 'axios';
import React, {useState} from 'react';
import api from '../api';

const QuestionContext = React.createContext();

export const QuestionProvider = ({children}) => {
  const [qotd, setQotd] = useState();
  const [qotdLoading,setQotdLoading] = useState(false);
  const [error, setError] = useState('');

  const getQotd = async () => {
    setQotdLoading(true);
    try {
      // const response = await api.get('/api/card/qotd')
      const response = await axios.get('https://jtpj77qm51.execute-api.us-east-1.amazonaws.com/')
      if (response.data) {
        setQotd(response.data)
        setQotdLoading(false);
      }
    } catch (error) {
      setError(error);
      setQotdLoading(false);
    }
  }
  return <QuestionContext.Provider
    value={{qotd, getQotd, error, qotdLoading}}>
    {children}
  </QuestionContext.Provider>
}

export default QuestionContext;