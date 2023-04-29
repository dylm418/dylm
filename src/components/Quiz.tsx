import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;

    if (event.target.checked) {
      setAnswers([...answers, answer]);
    } else {
      setAnswers(answers.filter((a) => a !== answer));
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h2>Quel est le nom de la ville ?</h2>
      <form>
        <div className="answer-option">
          <label>
            <input
              type="checkbox"
              value="answer1"
              checked={answers.includes('answer1')}
              onChange={handleAnswerChange}
            />
            Answer 1
          </label>
        </div>
      </form>
    </div>
  );
};

export default Quiz;
