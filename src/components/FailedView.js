import React from "react";

export default function FailedView({ error }) {
  const tryAgain = () => {
    window.location.reload();
  };
  return (
    <div className='failedView-container'>
      <img src='./failed.png' alt='failed' />
      <h2 className='err-msg'>{error}</h2>
      <button onClick={tryAgain}>Try Again</button>
    </div>
  );
}
