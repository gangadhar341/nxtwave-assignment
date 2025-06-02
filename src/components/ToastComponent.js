import "../styles/toast.css";

export default function ToastComponent({ toastMessage, setToastMessage }) {
  return toastMessage ? (
    <div className='toast-container'>
      <div className='cross-icon'>
        <button onClick={() => setToastMessage("")}>x</button>
      </div>
      <p>{toastMessage}</p>
      <div className='toast-progress-bar-container'>
        <div className='toast-progress-bar'></div>
      </div>
    </div>
  ) : null;
}
