import { useEffect, useState } from "react";

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
    <div
      className={`flashy ${showAnswer ? "show-answer" : ""}`}
      onClick={toggleShowAnswer}
    >
      <div className="card-face card-front">
        <h3>{question}</h3>
      </div>
      <div className="card-face card-back">
        <h3>{answer}</h3>
      </div>
    </div>
  );
};

export default FlashCard;
