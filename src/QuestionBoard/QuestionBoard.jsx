import React from 'react'

function QuestionBoard() {
  return (
    <>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Requirements</h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build a question board that displays the list question that group by categories.
          <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5  ml-5">
            <li>
              Show questions by categories.
            </li>
            <li>
              Show submissions question status: correct, incorrect, partially correct
                <ul className="text-gray-500 list- list-inside ml-10">
                  <li>
                    Correct answer: <span className="text-green-500">green</span>
                  </li>
                  <li>
                    Incorrect answer: <span className="text-red-500">red</span>
                  </li>
                  <li>
                    Partially correct answer: <span className="text-yellow-500">yellow</span>
                  </li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />

      <div>
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
              <div className="question__status question__status--partially_correct" />
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
    </>
  )
}

export default QuestionBoard