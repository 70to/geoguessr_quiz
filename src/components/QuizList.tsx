import React, {useContext} from "react";
import {QuizContext} from "../contexts/quiz";
import "./QuizList.css"

const QuizList = () => {
    const categories = [
        {
            "key": "road",
            "name": "Road Line",
            "image": "https://images.unsplash.com/photo-1598966835412-6de6f92c243d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "key": "language",
            "name": "Language",
            "image": "https://images.unsplash.com/photo-1539632346654-dd4c3cffad8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        },
        {
            "key": "flag",
            "name": "Flag",
            "image": "https://images.unsplash.com/photo-1535483102974-fa1e64d0ca86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUU1JTlCJUJEJUU2JTk3JTk3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
    ]

    let {dispatch} = useContext<any>(QuizContext);
    return (
        <div>
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Quiz For Geoguessor
            </h2>
            {categories.map((category) => {
                return (
                    <div className="category mb-6 p-14 last:mb-0"
                         onClick={() => {
                             dispatch({type: "GET_QUIZ", payload: category.key})
                         }}
                         key={category.key}
                         style={{backgroundImage: `url(${category.image})`}}
                    >
                        <div className="example">
                            <p className="text-2xl">{category.name}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default QuizList