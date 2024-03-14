import React from "react";

const NextArrow = ({
  setFirstNextClick,
  setDefaultQuestion,
  setVal,
  setNextCLick,
}) => {
  function handleClick() {
    setFirstNextClick(true);
    setDefaultQuestion(false);
    setVal((currentVal) => (currentVal + 1) % 10);
    setNextCLick((curr) => !curr);
  }
  return (
    <div style={{ backgroundColor: "transparent", padding: ".5rem" }}>
      <button onClick={handleClick} style={{ backgroundColor: "white" }}>
        ⭢
      </button>
    </div>
  );
};

export default NextArrow;
