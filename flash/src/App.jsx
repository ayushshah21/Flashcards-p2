import { useEffect, useState } from "react";
import "./index.css";
import TitleCard from "./TitleCard";
import NextArrow from "./NextArrow";
import FlashCard from "./FlashCard";
import Form from "./Form";

const questions = [
  {
    question: "Which NBA Player has scored the most points in NBA History?",
    answer: "Lebron James",
  },
  {
    question: "Which NBA Player has made the most 3s in NBA History",
    answer: "Steph Curry",
  },
  {
    question:
      "Which Player in NBA History leads the NBA in Points Per 36 Minutes",
    answer: "Joel Embiid",
  },
  {
    question: "Which NBA Team has won the most championships since 2000",
    answer: "LA Lakers",
  },
  {
    question: "Which NBA Player won MVP in the 1993 season?",
    answer: "Charles Barkley",
  },
  {
    question:
      "Which NBA Player holds the record for most Triple Doubles in a season?",
    answer: "Russell Westbrook",
  },
  {
    question: "Which NBA Player has the nickname 'The Big Ticket'?",
    answer: "Kevin Garnett",
  },
  {
    question:
      "The first NBA game was played between the New York Knicks and the Toronto Huskies in what year?’",
    answer: "1946",
  },
  {
    question:
      "In 1995, this 6-seed was the lowest-seeded team in NBA history to win a Championship.",
    answer: "Houston Rockets",
  },
  {
    question: "This player has the most turnovers in the Finals.",
    answer: "Lebron James",
  },
];

function App() {
  const [defaultQuestion, setDefaultQuestion] = useState(true);
  const [firstNextClick, setFirstNextClick] = useState(false);
  const [nextClick, setNextClick] = useState(false);
  const [val, setVal] = useState(5);
  const [guess, setGuess] = useState("");
  const defQuestion = {
    question: "Start!",
    answer: "Press the next arrow to start the flashcards!",
  };
  useEffect(() => {
    setVal(Math.floor(Math.random() * questions.length));
  }, [nextClick]);

  function handleSubmitGuess(e) {
    e.preventDefault();
    setGuess("");
    if (guess === questions[val].answer) {
      console.log("Hello");
      alert("CORRECT");
    } else {
      console.log("HI");
      alert("Wrong! Try Again");
    }
  }
  return (
    <div className="main-cont">
      <TitleCard />
      {defaultQuestion && (
        <FlashCard
          question={defQuestion.question}
          answer={defQuestion.answer}
        />
      )}
      {!defaultQuestion && (
        <FlashCard
          question={questions[val].question}
          answer={questions[val].answer}
        />
      )}
      <Form
        guess={guess}
        setGuess={setGuess}
        onSubmitGuess={handleSubmitGuess}
      />
      <div className="arrows">
        <NextArrow
          setVal={setVal}
          setDefaultQuestion={setDefaultQuestion}
          setFirstNextClick={setFirstNextClick}
          setNextClick={setNextClick}
        >
          ⭠
        </NextArrow>
        <NextArrow
          setVal={setVal}
          setDefaultQuestion={setDefaultQuestion}
          setFirstNextClick={setFirstNextClick}
          setNextClick={setNextClick}
        >
          ⭢
        </NextArrow>
      </div>
    </div>
  );
}

export default App;
