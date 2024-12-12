import { useEffect, useReducer, useState } from "react";

import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";

const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return { ...state, questions: action.payload, status: "ready" };
    case "DATA_FAILED":
      return { ...state, status: "error" };

    default:
      throw new Error("UNKNOWN ACTION TYPE");
  }
};

const initialState = {
  questions: [],
  //"loading","error","ready","active","finished"
  status: "loading",
};

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  console.log(questions);

  // console.log(state);

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
          {status === "ready" && <StartScreen numQues={questions.length} />}
        </Main>
      </div>
    </>
  );
}

export default App;
