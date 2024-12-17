import React, { useState } from "react";

const EachQuestion = ({ questionObj, index, dispatch, answer, questions }) => {
  const { question, options, correctOption } = questionObj;

  console.log(answer);
  return (
    <div className="w-[80%] m-auto">
      <div className="w-[100%] md:w-[80%] flex flex-col items-center m-auto">
        <h1 className="my-4 w-[70%]">
          {index + 1}. {question}
        </h1>
        <ul className="w-[70%] ">
          {options.map((singleOption, i) => (
            <li
              key={singleOption}
              className={`my-4 rounded-full py-3 px-4 cursor-pointer transform duration-300 border ${
                answer ? "cursor-not-allowed" : ""
              } ${
                answer !== null
                  ? i === correctOption
                    ? "text-green-400 translate-x-6 "
                    : "text-red-400 "
                  : "bg-slate-950 hover:scale-97 hover:bg-slate-900 hover:border-white"
              }`}
              onClick={() => {
                dispatch({ type: "NEW_ANSWER", payload: i });
              }}
            >
              {singleOption}
            </li>
          ))}
        </ul>

        <div className="flex justify-between w-[90%] text-xs md:text-md">
          <div className="border border-white outline-none rounded-full py-2 px-4">
            TIMER
          </div>
          {answer === null ? null : (
            <button
              className="border border-white outline-none rounded-full py-2 px-4 hover:bg-slate-800 duration-150 hover:scale-97 hover:outline-none"
              onClick={() => {
                if (index < questions.length - 1) {
                  dispatch({ type: "NEXT_QUESTION" });
                } else {
                  dispatch({ type: "FINISH" });
                }
              }}
            >
              {index < questions.length - 1 ? "Next question →" : "finish"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EachQuestion;
