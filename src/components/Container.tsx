import React, {useContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import {QuizContext} from "../contexts/quiz";

function Container() {
    const {state} = useContext<any>(QuizContext);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="sm:fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="sm:flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                            <div
                                className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:px-6 sm:pt-6 sm:pb-10">
                                <BrowserRouter>
                                    {!state.startFlag && (
                                        <QuizList/>
                                    )}
                                    {state.startFlag && (
                                        <Quiz/>
                                    )}
                                </BrowserRouter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
