import React from "react";

const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "bg-green-300" : "";
  const wrongAnswerClass = isWrongAnswer ? "bg-red-300" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
      <div>
        <div
            key={index} onClick={() => onSelectAnswer(answerText)} className={`mt-5 flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`} >
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <p className="text-lg font-medium text-gray-900">{answerText}</p>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Answer;
