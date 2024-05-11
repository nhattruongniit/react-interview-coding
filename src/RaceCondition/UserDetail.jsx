import React from 'react';

export default function UserDetail({ currentUser, countTime }) {
  return (
    <div className="">
      Successful call times: {countTime}
      <br />
      Id: {currentUser?.id} <br />
      Name: {currentUser?.name} <br />
      Email: {currentUser?.email} <br />
    </div>
  );
}
