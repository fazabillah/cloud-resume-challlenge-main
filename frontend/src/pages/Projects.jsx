import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/cards/ProjectCard'
import SearchFilterBar from '../components/common/SearchFilterBar'
import EmptyState from '../components/common/EmptyState'
import projectsData from '../data/projectsData.json'

function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])

  // Extract available categories
  const availableCategories = useMemo(() => {
    return projectsData.categories.map(cat => ({
      id: cat.id,
      label: cat.label,
      icon: cat.icon
    }))
  }, [])

  // Filter projects based on search and category
  const filteredProjects = useMemo(() => {
    // Flatten all projects with category info
    const allProjects = projectsData.categories.flatMap(cat =>
      (cat.projects || []).map(proj => ({
        ...proj,
        categoryId: cat.id,
        categoryLabel: cat.label
      }))
    )

    // Filter by category
    let filtered = allProjects
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.categoryId))
    }

    // Filter by search (case-insensitive, multi-field)
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchLower) ||
        p.subtitle.toLowerCase().includes(searchLower) ||
        p.excerpt.toLowerCase().includes(searchLower) ||
        p.technologies.toLowerCase().includes(searchLower)
      )
    }

    return filtered
  }, [searchTerm, selectedCategories])

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedCategories([])
  }

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
            selectedFilters={selectedCategories}
            availableFilters={availableCategories}
            onFilterToggle={handleCategoryToggle}
            onClearFilters={handleClearFilters}
            filterType="category"
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
