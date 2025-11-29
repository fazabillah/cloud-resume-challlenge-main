function EducationCard({ education }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{education.institution}</h3>
        <div className="subheading mb-3">{education.degree}</div>
        <p>{education.location}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{education.graduationYear}</span>
      </div>
    </div>
  )
}

export default EducationCard
