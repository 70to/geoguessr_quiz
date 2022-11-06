import Answer from "./Answer";
import React, {useContext} from "react";
import {QuizContext} from "../contexts/quiz";

const Question = () => {
    const {state, dispatch} = useContext(QuizContext);
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const imgPath = currentQuestion.question
    const img = new Image()
    img.src = imgPath // プリロードする

    return (
        <div>
            <div style={{display: state.loading ? "block" : "none"}}>
                loading
            </div>
            <div style={{display: state.loading ? "none" : "block"}}>
                <img
                    src={`${process.env.PUBLIC_URL}/${imgPath}`} alt="" onLoad={() => dispatch({type: "LOAD_QUESTION"})}/>
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
        </div>
    );
};

export default Question;
