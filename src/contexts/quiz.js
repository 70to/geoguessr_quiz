import React, {createContext, useReducer} from "react";
import {shuffleAnswers, shuffleQuestions} from "../helpers";

const initialState = {
    startFlag: false,
    loading: true,
    questions: [],
    currentQuestionIndex: 0,
    currentAnswer: "",
    answers: [],
    showResults: false,
    correctAnswersCount: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_QUIZ": {
            const data = require(`../data/${action.payload}.js`)
            state.questions = shuffleQuestions(data.default)
            state.answers = shuffleAnswers(state.questions[0])
            return {
                ...state,
                startFlag: true
            };
        }
        case "LOAD_QUESTION": {
            return {
                ...state,
                loading: false
            };
        }
        case "SELECT_ANSWER": {
            const correctAnswersCount =
                action.payload ===
                state.questions[state.currentQuestionIndex].correctAnswer
                    ? state.correctAnswersCount + 1
                    : state.correctAnswersCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswersCount,
            };
        }
        case "NEXT_QUESTION": {
            const showResults =
                state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults
                ? state.currentQuestionIndex
                : state.currentQuestionIndex + 1;
            const answers = showResults
                ? []
                : shuffleAnswers(state.questions[currentQuestionIndex]);
            return {
                ...state,
                currentAnswer: "",
                showResults,
                currentQuestionIndex,
                answers,
            };
        }
        case "HOME": {
            return initialState;
        }
        default:
            return state;
    }
};

export const QuizContext = createContext({});

export const QuizProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <QuizContext.Provider value={{
        state,
        dispatch,
    }}>{children}</QuizContext.Provider>;
};
