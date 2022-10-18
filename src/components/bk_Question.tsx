import React, {useState} from "react";

const Bk_Question = () => {
    const [isCorrect, setCorrect] = useState(false);

    const answers = [
        {
            answerText: "スウェーデン",
            correctAnswer: true,
        },
        {
            answerText: "デンマーク",
            correctAnswer: false,
        },
        {
            answerText: "フィンランド",
            correctAnswer: false,
        }
    ];


    const handleClick = (isCorrect: boolean) => {
        if (isCorrect) {
            return setCorrect(true)
        }
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div>
                                    <div>
                                        <img
                                            src="https://fabiencelier.github.io/geoguessr-tips/resources/img/road-lines/road-lines-sweden-01.png"
                                            alt=""/>
                                    </div>
                                    {answers.map((item, index) => {
                                        return <div
                                            key={index} onClick={() => handleClick(item.correctAnswer)} className={`mt-5 flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 ${item.correctAnswer && isCorrect ? 'bg-green-300' :''}`} >
                                            <div className="min-w-0 flex-1">
                                                <a href="#" className="focus:outline-none">
                                                    <p className="text-lg font-medium text-gray-900">{item.answerText}</p>
                                                </a>
                                            </div>
                                        </div>
                                    })}
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm">Go
                                        back to dashboard
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bk_Question;
