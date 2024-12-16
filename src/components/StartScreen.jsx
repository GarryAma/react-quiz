import React from "react";

const StartScreen = ({ numQues, dispatch }) => {
  return (
    <div className="text-center ">
      <h1 className="uppercase">Hey, Welcome Here!</h1>
      <h2 className="tracking-custom_xs mt-6">
        🔥 {numQues} questions to test your ReactJs knowledge
      </h2>

      <button
        className="mt-6 p-2 border w-[30%] rounded-md hover:font-extralight transition-all hover:border-yellow-300 duration-300 hover:bg-slate-800"
        onClick={() => dispatch({ type: "DATA_ACTIVE" })}
      >
        Lets go
      </button>
    </div>
  );
};

export default StartScreen;
