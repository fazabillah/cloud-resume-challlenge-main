function BackButton({ onClick, label = "← Back to List" }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-sm btn-outline-primary mb-4 ms-5 mt-2"
    >
      {label}
    </button>
  )
}

export default BackButton
