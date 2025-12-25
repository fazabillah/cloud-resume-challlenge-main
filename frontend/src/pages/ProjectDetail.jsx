import { useParams, useNavigate } from 'react-router-dom'
import projectsData from '../data/projectsData.json'
import BackButton from '../components/common/BackButton'
import NotFoundSection from '../components/common/NotFoundSection'
import useBodyClass from '../hooks/useBodyClass'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Remove 'has-sidebar' class for full-width layout
  useBodyClass('has-sidebar', false)

  // Find project by id from flat array
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    return (
      <NotFoundSection
        onBack={() => navigate('/projects')}
        backLabel="Back to Projects"
        title="Project Not Found"
        message="The project you're looking for doesn't exist."
      />
    )
  }

  return (
    <div className="container-fluid p-0">
      <section className="resume-section">
        <div className="resume-section-content">
          <BackButton onClick={() => navigate('/projects')} label="Back to Projects" />
          <h1 className="mb-3">{project.title}</h1>
          <div className="subheading mb-3">{project.subtitle}</div>

          {project.technologies && (
            <div className="mb-4">
              <strong>Technologies:</strong> {project.technologies}
            </div>
          )}

          {/* Render markdown content as HTML */}
          {project.body_html && (
            <div
              className="project-content markdown-content"
              dangerouslySetInnerHTML={{ __html: project.body_html }}
            />
          )}

          {(project.githubUrl || project.liveUrl) && (
            <div className="project-links mt-5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mr-2"
                >
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
