import { useState, useEffect } from 'react';

function Quiz({ data, setTimeOver, qno, setQNO }) {
  // const question = data[0].question;
  // const answers = data[0].answers;
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [ansClass, setAnsClass] = useState('answer');

  useEffect(() => {
    setQuestion(data[qno - 1]);
  }, [data, qno]);

  function delay(time, fun) {
    setTimeout(() => {
      fun();
    }, time);
  }
  function handleAnswerClick(ans) {
    setSelectedAnswer(ans);
    setAnsClass('answer active');
    delay(3000, () =>
      setAnsClass(ans.correct ? 'answer correct' : 'answer incorrect')
    );
    delay(6000, () => {
      if (ans.correct) {
        setQNO((prev) => prev + 1);
      } else {
        setTimeOver(true);
      }
    });
  }

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans) => (
          <div
            className={selectedAnswer === ans ? ansClass : 'answer'}
            onClick={() => handleAnswerClick(ans)}
          >
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
