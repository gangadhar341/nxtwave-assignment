import "../styles/failedView.css";

export default function FailedView({ error }) {
  const tryAgain = () => {
    window.location.reload();
  };
  return (
    <div className='failedView-container'>
      <img src='./failed.png' alt='failed' />
      <h2 className='err-msg'>{error}</h2>
      <button className='failedView-button' onClick={tryAgain}>
        Try Again
      </button>
    </div>
  );
}
