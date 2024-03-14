
const NextArrow = ({
  setFirstNextClick,
  setDefaultQuestion,
  setVal,
  setNextClick,
  children
}) => {
  function handleClick() {
    setFirstNextClick(true);
    setDefaultQuestion(false);
    setVal((currentVal) => (currentVal + 1) % 10);
    setNextClick((curr) => !curr);
  }
  return (
    <div style={{ backgroundColor: "transparent", padding: ".5rem" }}>
      <button className="nxt-btn" onClick={handleClick} style={{ backgroundColor: "white" }}>
        {children}
      </button>
    </div>
  );
};

export default NextArrow;
