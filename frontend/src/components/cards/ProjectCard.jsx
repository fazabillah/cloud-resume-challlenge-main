function ProjectCard({ project }) {
  const formatStatus = (status) => {
    if (status === 'completed') return 'Completed'
    if (status === 'in-progress') return 'In Progress'
    if (project.comingSoon) return 'Coming Soon'
    return ''
  }

  return (
    <div className="project-card">
      <h3 className="mb-2">{project.title}</h3>
      {project.subtitle && (
        <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
          {project.subtitle}
        </p>
      )}
      {project.excerpt && <p className="lead mb-3">{project.excerpt}</p>}
      <div className="project-meta text-muted">
        {project.year}
        {formatStatus(project.status) && ` • ${formatStatus(project.status)}`}
      </div>
    </div>
  )
}

export default ProjectCard
