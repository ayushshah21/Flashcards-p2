import React from "react";

const BackArrow = ({
  setFirstNextClick,
  setDefaultQuestion,
  setVal,
  firstNextClick,
  val,
}) => {
  function handleBack() {
    setVal((val) => (val === 0 ? 9 : val - 1));
  }
  return (
    <div style={{ backgroundColor: "transparent", padding: ".5rem" }}>
      <button
        disabled={val <= 1 ? true : false}
        onClick={handleBack}
        className="nxt-btn"
        style={{ backgroundColor: "white" }}
      >
        ⭠
      </button>
    </div>
  );
};

export default BackArrow;
