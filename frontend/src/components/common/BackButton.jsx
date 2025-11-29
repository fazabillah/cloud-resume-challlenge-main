function BackButton({ onClick, label = "← Back to List" }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-sm btn-outline-primary mb-4"
      style={{ marginLeft: "20px", marginTop: "10px" }}
    >
      {label}
    </button>
  )
}

export default BackButton
