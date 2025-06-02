export default function ToastComponent({ toastMessage }) {
  return toastMessage ? (
    <div className='toast'>
      <p>{toastMessage}</p>
    </div>
  ) : null;
}
