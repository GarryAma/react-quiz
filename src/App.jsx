import { useEffect, useReducer, useState } from "react";

import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import EachQuestion from "./components/EachQuestion";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  questions: [],
  //"loading","error","ready","active","finished"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return { ...state, questions: action.payload, status: "ready" };
    case "DATA_FAILED":
      return { ...state, status: "error" };
    case "DATA_ACTIVE":
      return { ...state, status: "active" };
    case "NEW_ANSWER":
      const currentQuestion = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
      };
    case "NEXT_QUESTION":
      return { ...state, index: state.index + 1, answer: null };
    case "FINISH":
      return { ...state, status: "finish" };

    case "RESTART":
      return { ...state, questions: state.questions, status: "ready" };
    default:
      throw new Error("UNKNOWN ACTION TYPE");
  }
};

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (prev, current) => prev + current.points,
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-quiz-questions.onrender.com/questions"
        );
        dispatch({ type: "DATA_RECEIVED", payload: response.data });
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
        dispatch({ type: "DATA_FAILED" });
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="bg-slate-900 h-[100vh] p-2">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen numQues={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <>
              <Progress
                index={index}
                numQues={numQuestions}
                maxPoints={maxPoints}
                answer={answer}
                points={points}
              />
              <EachQuestion
                questionObj={questions[index]}
                questions={questions}
                index={index}
                dispatch={dispatch}
                answer={answer}
              />
            </>
          )}
          {status === "finish" && (
            <FinishScreen
              points={points}
              maxPoints={maxPoints}
              dispatch={dispatch}
            />
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
