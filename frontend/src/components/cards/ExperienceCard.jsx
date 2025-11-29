function ExperienceCard({ position }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1 order-2 order-md-1">
        <h3 className="mb-0">{position.title}</h3>
        <div className="subheading mb-3">
          {position.company} | {position.industry} | {position.location}
        </div>
        <p>{position.description}</p>
        {position.transferrableSkills && position.transferrableSkills.length > 0 && (
          <>
            <p>
              <strong>Transferrable Skills:</strong>
            </p>
            <ul>
              {position.transferrableSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="flex-shrink-0 order-1 order-md-2">
        <span className="text-primary">{position.dateDisplay}</span>
      </div>
    </div>
  )
}

export default ExperienceCard
