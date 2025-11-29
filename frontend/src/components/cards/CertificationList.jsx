function CertificationList({ certifications }) {
  return (
    <>
      {/* In Progress */}
      {certifications.inProgress && certifications.inProgress.length > 0 && (
        <>
          <div className="subheading mb-3">In Progress</div>
          <ul className="fa-ul mb-4">
            {certifications.inProgress.map((cert, index) => (
              <li key={index}>
                <span className={`fa-li`}>
                  <i className={cert.icon}></i>
                </span>
                {cert.name} | {cert.issuer}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Completed */}
      {certifications.completed && certifications.completed.length > 0 && (
        <>
          <div className="subheading mb-3">Completed Certifications</div>
          <ul className="fa-ul mb-4">
            {certifications.completed.map((cert, index) => (
              <li key={index}>
                <span className={`fa-li`}>
                  <i className={cert.icon}></i>
                </span>
                {cert.name} | {cert.issuer} | {cert.completedDate}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Training */}
      {certifications.training && certifications.training.length > 0 && (
        <>
          <div className="subheading mb-3">Training & Bootcamps</div>
          <ul className="fa-ul mb-0">
            {certifications.training.map((training, index) => (
              <li key={index}>
                <span className={`fa-li`}>
                  <i className={training.icon}></i>
                </span>
                {training.name} | {training.provider} | {training.completedDate}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default CertificationList
