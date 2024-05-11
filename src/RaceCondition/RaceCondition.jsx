import React from 'react'

import Users from './Users'
import UserDetail from './UserDetail'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve, ms))
}

function RaceCondition() {
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [countTime, setCountTime] = React.useState(0);
  const [failureCount, setFailureCount] = React.useState(0);

  React.useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5&_page=1');
      const data = await  res.json();
      console.log(data)
      setUsers(data);
    }
    fetchUsers();
  }, [])

  function gotoUser(user) {
    setCurrentUser(user)
  }

  React.useEffect(() => {
    let timer = null;
    setCountTime(0);
    async function fetchUserDetail() {
      try {
        await fetch('https://jsonplaceholder.typicode.com/users/1').then(res =>  res.json());
        setCountTime(prevState => prevState + 1);
        setFailureCount(0); // reset failure count if call success
      } catch(err) {
        setFailureCount(prevState => prevState + 1)
      }
    }

    async function callApi() {
      if(failureCount < 5) {
        fetchUserDetail();
      } else {
        await sleep(10000); // Pause 10s 
        setFailureCount(0);
      }
    }

    if(currentUser) {
      timer = setInterval(() => {
        callApi()
      }, 1000); // call API after 1s
    }

    return () => {
      if(timer) clearInterval(timer)
    }
  }, [currentUser])

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Requirements</h2>
      <div>
        API
        <ul className='pl-10 list-disc mt-4'>
          <li>GET user: https://jsonplaceholder.typicode.com/users?_limit=5&_page=1</li>
          <li>GET user detail: https://jsonplaceholder.typicode.com/users/1</li>
        </ul>
      </div>
      <br />
      <div>
        Create a small Brute-User program to get user detail via switch user views.
      </div>
      <ul className='pl-10 list-disc mt-4'>
        <li>Call api every 1s when User has been clicked.</li>
        <li>Show successfull call time.</li>
        <li>After 5 failure, sleep 10s</li>
        <li>Reset call api when switch other users</li>
      </ul>

      <br />
      <hr />

      <div className='view_container'>
        <Users dataSource={users} currentUser={currentUser} gotoUser={gotoUser} />

        <UserDetail countTime={countTime} currentUser={currentUser}/>

      </div>
    </div>
  )
}

export default RaceCondition