import React from "react";

const Progress = ({ index, numQues, maxPoints, answer, points }) => {
  return (
    <div className="text-center w-[60%] sm:w-[55%] md:w-[50%] mx-auto my-4">
      <progress
        max={numQues}
        value={index + Number(answer !== null)}
        className="w-full"
      >
        Progress
      </progress>
      <div className="text-xs flex justify-between">
        <p>
          Question {index + 1} / {numQues}
        </p>
        <p>
          {points} / {maxPoints}
        </p>
      </div>
    </div>
  );
};

export default Progress;
