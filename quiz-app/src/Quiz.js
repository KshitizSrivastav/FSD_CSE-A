// src/Quiz.js
import React, { useState, useEffect } from 'react';
import quizQuestions from './quiz_questions.json';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSubmit = () => {
    if (selectedAnswer === quizQuestions.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
  };

  if (currentQuestion >= quizQuestions.questions.length) {
    return (
      <div>
        <h2>Quiz Finished!</h2>
        <p>Your score is {score} out of {quizQuestions.questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{quizQuestions.questions[currentQuestion].question}</h2>
      {quizQuestions.questions[currentQuestion].options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            name="answer"
            value={option}
            checked={selectedAnswer === option}
            onChange={() => setSelectedAnswer(option)}
          />
          <span>{option}</span>
        </div>
      ))}
      <button onClick={handleAnswerSubmit} disabled={!selectedAnswer}>
        Submit Answer
      </button>
    </div>
  );
};

export default Quiz;
