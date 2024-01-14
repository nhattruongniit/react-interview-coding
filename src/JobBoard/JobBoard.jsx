import React, { useEffect } from 'react';

const PAGE_SIZE = 6;
function JobBoard() {
  const [isFetching, setIsFetching] = React.useState(false);
  const [jobIds, setJobIds] = React.useState(null);
  const [jobs, setJobs] =  React.useState([]);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  async function fetchJobIds(currPage) {
    let jobs = jobIds;
    if (!jobs) {
      const res = await fetch(
        'https://hacker-news.firebaseio.com/v0/jobstories.json',
      );
      jobs = await res.json();
      setJobIds(jobs);
    }

    const start = currPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return jobs.slice(start, end);
  }

  async function fetchJobs(currPage) {
    const jobIdsForPage = await fetchJobIds(currPage);

    setIsFetching(true);
    const jobsForPage = await Promise.all(
      jobIdsForPage.map((jobId) =>
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`,
        ).then((res) => res.json()),
      ),
    );
    setJobs([...jobs, ...jobsForPage]);

    setIsFetching(false);
  }

  console.log('jobs: ', jobs)

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
        {jobIds === null ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="jobs">
            {jobs.map(job => (
              <div key={job.id} className="post">
                <h2 className="post__title">
                  {job.title}
                </h2>
                <p className="post__metadata">
                  By {job.by} &middot;{' '}
                  {new Date(job.time * 1000).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
        
        {jobs.length > 0 && page * PAGE_SIZE + PAGE_SIZE < jobIds.length && (
          <button 
            className="load-more-button"
            disabled={isFetching}
            onClick={() => setPage(page + 1)}
          >
            {isFetching ? 'Loading ...' : 'Load more jobs'}
          </button>

        )}

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

export default JobBoard