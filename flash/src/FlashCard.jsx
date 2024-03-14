import React, { useEffect, useState } from "react";

const FlashCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  // Function to toggle the display of the answer
  const toggleShowAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  return (
    // <div className="flashy" onClick={toggleShowAnswer}>
    //   {showAnswer ? answer : question}
    // </div>
    <div className={`flashy ${showAnswer ? 'show-answer' : ''}`} onClick={toggleShowAnswer}>
    <div className="card-face card-front">
      {question}
    </div>
    <div className="card-face card-back">
      {answer}
    </div>
  </div>
  );
};

export default FlashCard;
