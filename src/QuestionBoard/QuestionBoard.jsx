import React from "react";

import { dataQuestions } from "./dataQuestions";

function fakeApi(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

function QuestionBoard() {
  React.useEffect(() => {
    fakeApi(dataQuestions).then((data) => {
      console.log(data);
    });
  });

  return (
    <div>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 flex items-center">
          Requirements <span className="bg-green-100 text-greeen-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ml-2">Easy</span>
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build a question board that displays the list question that group by
          categories.
          <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5  ml-5">
            <li>
              Show questions by categories. Get data questions from {''}
              <a href="https://stackblitz.com/edit/stackblitz-starters-mxnmpt?file=src%2FdataQuestions.js" target="_blank" className="font-medium text-blue-600 underline">here</a>.
            </li>
            <li>
              Show submissions question status: correct, incorrect, partially
              correct. Get data submissons from from <a href="https://stackblitz.com/edit/stackblitz-starters-mxnmpt?file=src%2FdataSubmissions.js" target="_blank" className="font-medium text-blue-600 underline">here</a>.
            
              <ul className="text-gray-500 list- list-inside ml-10">
                <li>
                  None answer: <span className="text-gray-500">gray</span>
                </li>
                <li>
                  Correct answer: <span className="text-green-500">green</span>
                </li>
                <li>
                  Incorrect answer: <span className="text-red-500">red</span>
                </li>
                <li>
                  Partially correct answer:{" "}
                  <span className="text-yellow-500">yellow</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Demo</h2>

      <div className="question_board">
        <div className="column">
          <h2>HTML - 1 / 4</h2>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--correct" />
              <h2 className="question__title">Sign-Up Form</h2>
            </div>
          </div>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--incorrect" />
              <h2 className="question__title">Item cart</h2>
            </div>
          </div>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--partially_correct" />
              <h2 className="question__title">Item cart</h2>
            </div>
          </div>
        </div>

        <div className="column">
          <h2>JAVASCRIPT - 0 / 4</h2>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--none" />
              <h2 className="question__title">ES6</h2>
            </div>
          </div>
        </div>
        <div className="column">
          <h2>CSS - 0 / 4</h2>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--incorrect" />
              <h2 className="question__title">Box Modal</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionBoard;
