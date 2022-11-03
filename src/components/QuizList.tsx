import React, {useContext} from "react";
import {QuizContext} from "../contexts/quiz";
import "./QuizList.css"

const QuizList = () => {
    const categories = ['road', 'language']
    let {dispatch} = useContext<any>(QuizContext);
    return (
        <div>
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Quiz For Geoguessor</h2>
            {categories.map((category) => {
                return (
                    <div className="category mb-6 p-14"
                         onClick={() => {
                             dispatch({type: "GET_QUIZ", payload: category})
                         }}
                         key={category}
                         style={{backgroundImage: 'url(https://images.unsplash.com/photo-1667262422332-9b09d4065117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)'}}
                    >
                        <div className="example">
                            <p className="text-2xl">{category}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default QuizList