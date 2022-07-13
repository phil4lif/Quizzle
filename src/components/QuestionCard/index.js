import React from 'react';

const QuestionCard = ({q}) => {
  const styles = {
    container: {}
  }
  return (
  <div>
    {/* {q.category} */}
    {q.question}
  </div>
  )
}

export default QuestionCard;