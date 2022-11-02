import Answer from "./Answer";
import React, {useContext} from "react";
import {QuizContext} from "../contexts/quiz";

const Question = () => {
    const {state, dispatch} = useContext(QuizContext);
    const currentQuestion = state.questions[state.currentQuestionIndex];

    return (
        <div>
            <img
                src={currentQuestion.question}
                alt=""/>
            <div>
                {state.answers.map((answer, index) => (
                    <Answer
                        answerText={answer}
                        currentAnswer={state.currentAnswer}
                        correctAnswer={currentQuestion.correctAnswer}
                        key={index}
                        index={index}
                        onSelectAnswer={(answerText) =>
                            dispatch({type: "SELECT_ANSWER", payload: answerText})
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;
