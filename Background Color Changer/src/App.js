import { useState } from "react";
function App() {
  const [color, setColor] = useState("rgb(230, 217, 216)");
  let red = () => {
    setColor("red");
  };
  let black = () => {
    setColor("black");
  };
  let green = () => {
    setColor("green");
  };
  let orange = () => {
    setColor("orange");
  };
  let pink = () => {
    setColor("pink");
  };
  let purple = () => {
    setColor("purple");
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-2 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
          <button
            className="outline-none  px-5 rounded-xl"
            style={{ backgroundColor: "red", color: "White" }}
            onClick={red}
          >
            Red
          </button>
          <button
            className="outline-none  px-5 rounded-xl"
            style={{ backgroundColor: "Green", color: "White" }}
            onClick={green}
          >
            Green
          </button>
          <button
            className="outline-none  px-5 rounded-xl"
            style={{ backgroundColor: "Black", color: "White" }}
            onClick={black}
          >
            Black
          </button>
          <button
            className="outline-none  px-5 rounded-xl"
            style={{ backgroundColor: "Purple", color: "White" }}
            onClick={purple}
          >
            Purple
          </button>
          <button
            className="outline-none  px-5 rounded-xl"
            style={{ backgroundColor: "Pink", color: "White" }}
            onClick={pink}
          >
            Pink
          </button>
          <button
            className="outline-none  px-5 rounded-xl"
            style={{ backgroundColor: "Orange", color: "White" }}
            onClick={orange}
          >
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
