import { useState } from "react";
import "./index.css";

const Form = ({ guess, setGuess, onSubmitGuess }) => {
  return (
    <form className="answer-form" onSubmit={onSubmitGuess}>
      <input
        type="text"
        className="guess-input"
        placeholder="Enter Guess..."
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button type="submit" className="check-button">
        Check
      </button>
    </form>
  );
};

export default Form;
