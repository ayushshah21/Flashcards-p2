
const NextArrow = ({
  setFirstNextClick,
  setDefaultQuestion,
  setVal,
  setNextClick,
  val
}) => {
  function handleClick() {
    setFirstNextClick(true);
    setDefaultQuestion(false);
    setVal(val => val === 9 ? 0 : val + 1);
    setNextClick((curr) => !curr);
  }
  return (
    <div style={{ backgroundColor: "transparent", padding: ".5rem" }}>
      <button disabled={val === 9 ? true : false} className="nxt-btn" onClick={handleClick} style={{ backgroundColor: "white" }}>
      ⭢
      </button>
    </div>
  );
};

export default NextArrow;
