import React from 'react'

function JobBoard() {
  return (
    <>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Requirements</h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build a job board that displays the latest job postings fetched from the 
          Hacker News API, with each posting displaying the job title, poster, and date posted.
          <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5">
            <li>
              The page should show 6 jobs on initial load with a button to load more postings.
            </li>
            <li>
              Clicking on the "Load more" button will load the next page of 6 postings. The button does not appear if there aren't any more postings to load.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />

      <div>
        <h1 className="title">Jobs Board</h1>
        <div className="jobs">
          <div className="post">
            <h2 className="post__title">
              Unlogged (YC S22) is hiring to automate regression testing
            </h2>
            <p className="post__metadata">
              By shardullavekar · 12/17/2023, 8:00:37 AM
            </p>
          </div>
        </div>

        <button className="load-more-button">Load more jobs</button>
      </div>
    </>
  )
}

export default JobBoard