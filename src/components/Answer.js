import React from "react";

const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isClickedClass = currentAnswer ? '' : 'text-gray-900'
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "bg-green-300" : "";
  const wrongAnswerClass = isWrongAnswer ? "bg-red-300" : "";
  const disabledClass = currentAnswer ? "pointer-events-none" : "";
  const correctAnswerTextClass = isCorrectAnswer ? "text-green-800" : "";
  const wrongAnswerTextClass = wrongAnswerClass ? "text-red-800" : "";
  return (
      <div>
        <div
            key={index} onClick={() => onSelectAnswer(answerText)} className={`mt-5 flex items-center space-x-3 rounded-lg border border-gray-300 shadow-sm hover:border-gray-400 ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`} >
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none px-6 py-5 flex justify-between items-center">
              <p className={`text-lg font-medium ${isClickedClass} ${correctAnswerTextClass} ${wrongAnswerTextClass}`}>{answerText}</p>
              {
                (() => {
                  if (isCorrectAnswer) {
                    return <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  }
                  if (isWrongAnswer) {
                    return <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  }
                })()
                }
            </a>
          </div>
        </div>
      </div>
  );
};

export default Answer;
