function ComingSoonBanner({ title, description, icon = "fas fa-tools" }) {
  return (
    <div className="coming-soon-banner">
      <i className={`${icon} fa-3x mb-3 text-primary`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ComingSoonBanner
