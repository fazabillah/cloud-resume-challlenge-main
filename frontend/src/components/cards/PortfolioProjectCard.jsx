function PortfolioProjectCard({ project }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1 order-2 order-md-1">
        <h3 className="mb-0">{project.title}</h3>
        <div className="subheading mb-3">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              {project.githubUrl}
            </a>
          ) : (
            "GitHub: Coming Soon..."
          )}
        </div>
        {project.highlights && project.highlights.length > 0 && (
          <ul>
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight.description}</li>
            ))}
          </ul>
        )}
        {project.technologies && (
          <p>
            <strong>Stack:</strong> {project.technologies}
          </p>
        )}
      </div>
      <div className="flex-shrink-0 order-1 order-md-2">
        <span className="text-primary">{project.year}</span>
      </div>
    </div>
  )
}

export default PortfolioProjectCard
