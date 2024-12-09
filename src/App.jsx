import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api-quiz-questions.onrender.com/questions"
      );
      console.log(response);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="bg-slate-900 h-[100vh] p-2">
        <Header />
        <Main>
          <p>1/15</p>
          <p>Questions</p>
        </Main>
      </div>
    </>
  );
}

export default App;
