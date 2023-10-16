const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

//타입 프롭을 전달하지 않으면 디폴트를 전달했다고 설정
MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
