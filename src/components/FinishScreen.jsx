import React from "react";

const FinishScreen = ({ points, maxPoints, dispatch }) => {
  const percentage = (points / maxPoints) * 100;
  return (
    <div>
      <div className="text-center px-1 py-3 md:px-2 md:py-6 border border-white rounded-full w-[70%] mx-auto">
        <p>
          You have scored {points} out of {maxPoints} ({Math.ceil(percentage)}%)
          ❤️
        </p>
      </div>

      <button
        className="border border-white outline-none rounded-md p-2 mt-32 animate-bounceCustom block mx-auto hover:text-black hover:bg-white hover:border-black duration-200"
        onClick={() => dispatch({ type: "RESTART" })}
      >
        start again
      </button>
    </div>
  );
};

export default FinishScreen;
