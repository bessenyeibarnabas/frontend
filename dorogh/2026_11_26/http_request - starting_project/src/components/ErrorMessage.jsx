export default function ErrorMessage({ title, message, onConfirm }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div className="confirmation-actions">
          <button type="button" className="button" onClick={onConfirm}>
            Okay
          </button>
        </div>
      )}
    </div>
  );
}