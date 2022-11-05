import React, {useContext} from "react";
import Question from "./Question";
import {QuizContext} from "../contexts/quiz";

const Quiz = () => {
    const {state, dispatch, category} = useContext(QuizContext);
    return (
        <div>
            {state.showResults && (
                <div className="text-center">
                    <div>
                        <p>
                            <span
                                className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-6xl px-2">{state.questions.length}</span>問中
                            <span
                                className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-6xl px-2">{state.questions.length}</span>問正解でした。
                        </p>
                    </div>
                    <div
                        onClick={() => [dispatch({type: "HOME"})]}
                        className="mt-10 cursor-pointer inline-flex items-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        HOME
                    </div>
                </div>
            )}
            {!state.showResults && (
                <div>
                    <div>
                        {category}
                    </div>
                    <div className="score">
                        Question {state.currentQuestionIndex + 1}/
                        {state.questions.length}
                    </div>
                    <Question/>
                    {state.currentAnswer && (
                        <div className={"text-center"}>
                            <div
                                onClick={() => dispatch({type: "NEXT_QUESTION"})}
                                className="mt-10 cursor-pointer inline-flex items-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Next question
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
