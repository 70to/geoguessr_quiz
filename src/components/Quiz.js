import React, {useContext, useEffect} from "react";
import Question from "./Question";
import {QuizContext} from "../contexts/quiz";

const Quiz = () => {
    const {state, dispatch, category, setStartFlag} = useContext(QuizContext);
    return (
        <div>
            {state.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations!</div>
                    <div className="results-info">
                        <div>You have completed the quiz.</div>
                        <div>
                            You've got {state.correctAnswersCount} of &nbsp;
                            {state.questions.length} right.
                        </div>
                    </div>
                    {/*<div*/}
                    {/*    onClick={() => dispatch({type: "RESTART"})}*/}
                    {/*    className="next-button"*/}
                    {/*>*/}
                    {/*    Restart*/}
                    {/*</div> */}
                    <div
                        onClick={() => setStartFlag(false)}
                        className="next-button"
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
                    {/*<div className="score">*/}
                    {/*    Question {quizState.currentQuestionIndex + 1}/*/}
                    {/*    {quizState.questions.length}*/}
                    {/*</div>*/}
                    <Question/>
                    {state.currentAnswer && (
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
    );
};

export default Quiz;
