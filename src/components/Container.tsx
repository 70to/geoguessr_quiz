import React, {useContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import {QuizContext} from "../contexts/quiz";

function Container() {
    const {startFlag} = useContext<any>(QuizContext);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <BrowserRouter>
                                    {!startFlag && (
                                    <QuizList />
                                    )}
                                    {startFlag && (
                                        <Quiz />
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
