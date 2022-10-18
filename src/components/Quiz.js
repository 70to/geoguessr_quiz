import React, {useContext} from "react";
import Question from "./Question";
import {QuizContext} from "../contexts/quiz";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">

                                {quizState.showResults && (
                                    <div className="results">
                                        <div className="congratulations">Congratulations!</div>
                                        <div className="results-info">
                                            <div>You have completed the quiz.</div>
                                            <div>
                                                You've got {quizState.correctAnswersCount} of &nbsp;
                                                {quizState.questions.length} right.
                                            </div>
                                        </div>
                                        <div
                                            onClick={() => dispatch({type: "RESTART"})}
                                            className="next-button"
                                        >
                                            Restart
                                        </div>
                                    </div>
                                )}
                                {!quizState.showResults && (
                                    <div>
                                        <div className="score">
                                            Question {quizState.currentQuestionIndex + 1}/
                                            {quizState.questions.length}
                                        </div>
                                        <Question/>
                                        {quizState.currentAnswer && (
                                            <div
                                                onClick={() => dispatch({type: "NEXT_QUESTION"})}
                                                className="next-button mt-10"
                                            >
                                                Next question
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
