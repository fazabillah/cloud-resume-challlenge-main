import { Link } from 'react-router-dom'
import ProjectCard from '../components/cards/ProjectCard'
import SearchFilterBar from '../components/common/SearchFilterBar'
import EmptyState from '../components/common/EmptyState'
import projectsData from '../data/projectsData.json'
import useSearchAndFilter from '../hooks/useSearchAndFilter'

function Projects() {
  // Use search and filter hook with flat array
  const {
    searchTerm,
    setSearchTerm,
    selectedFilters: selectedStatus,
    availableFilters: availableStatus,
    filteredData: filteredProjects,
    handleFilterToggle: handleStatusToggle,
    handleClearFilters,
  } = useSearchAndFilter(projectsData, {
    searchFields: ['title', 'subtitle', 'excerpt', 'technologies'],
    extractFilters: (projects) => {
      const statusSet = new Set()
      projects.forEach(proj => {
        if (proj.status) statusSet.add(proj.status)
      })
      return Array.from(statusSet).sort().map(status => ({
        id: status,
        label: status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')
      }))
    },
    matchFilter: (project, selectedStatus) =>
      selectedStatus.includes(project.status)
  })

  return (
    <div className="container-fluid p-0">
      <section className="resume-section" id="projects">
        <div className="resume-section-content">
          <h1 className="mb-5">
            <span className="text-primary">Projects</span>
          </h1>

          {/* Search & Filter Toolbar */}
          <SearchFilterBar
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            selectedFilters={selectedStatus}
            availableFilters={availableStatus}
            onFilterToggle={handleStatusToggle}
            onClearFilters={handleClearFilters}
            filterType="status"
            placeholder="Search projects by name, tech, or description..."
          />

          {/* Projects List */}
          {filteredProjects.length > 0 ? (
            <div className="mt-5">
              {filteredProjects.map(project => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="link-unstyled"
                >
                  <ProjectCard project={project} />
                </Link>
              ))}
            </div>
          ) : (
            <EmptyState
              icon="fas fa-project-diagram"
              message="No projects found"
              suggestion="Try adjusting your filters or search terms"
              onClearFilters={handleClearFilters}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects
