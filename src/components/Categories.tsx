import React, {useContext} from "react";
import {QuizContext} from "../contexts/quiz";
import "./Categories.css"
import categories from "../data/categories";

const Categories = () => {
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

export default Categories