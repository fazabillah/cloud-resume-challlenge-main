function SectionHeader({ title, subtitle = null }) {
  return (
    <>
      <h2 className="mb-5">{title}</h2>
      {subtitle && <div className="subheading mb-3">{subtitle}</div>}
    </>
  )
}

export default SectionHeader
