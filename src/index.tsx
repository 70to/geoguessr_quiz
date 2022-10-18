import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quiz from "./components/Quiz";
import {QuizProvider} from "./contexts/quiz";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <QuizProvider>
          <Quiz />
      </QuizProvider>
  </React.StrictMode>
);
