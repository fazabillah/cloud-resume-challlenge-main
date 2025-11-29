# API Migration Guide

This document outlines the current data architecture and how to migrate from static JSON to API-based data fetching.

## Current Architecture

### Static Data Files
The application currently uses static JSON/JS files located in `src/data/`:
- `resumeData.js` - Personal info, about content
- `socialLinksData.json` - Social media links
- `navigationData.json` - Navigation configurations
- `skillsData.json` - Skills and dev icons
- `educationData.json` - Education history
- `experienceData.json` - Work experience
- `certificationsData.json` - Certifications and training
- `projectsData.json` - Project portfolio
- `blogData.json` - Blog posts and topics

### Data Flow
1. Components import data directly from JSON/JS files
2. Data is rendered via reusable card and section components
3. No external API calls or network requests
4. All data is bundled with the application

## Migration Path

### Step 1: Set Up Backend API

Create a backend API that provides the following endpoints:

```
GET /api/resume-data       → Returns resumeData
GET /api/social-links      → Returns socialLinksData
GET /api/navigation        → Returns navigationData
GET /api/skills            → Returns skillsData
GET /api/education         → Returns educationData
GET /api/experience        → Returns experienceData
GET /api/certifications    → Returns certificationsData
GET /api/projects          → Returns projectsData
GET /api/blog              → Returns blogData
GET /api/blog/:slug        → Returns single blog post
GET /api/projects/:id      → Returns single project (optional)
```

### Step 2: Configure API URL

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Set your API base URL in `.env.local`:
   ```env
   VITE_API_URL=http://localhost:3000
   # or for production:
   # VITE_API_URL=https://api.yourdomain.com
   ```

### Step 3: Update Components

Replace direct data imports with the `useDataSource` hook:

**Before (Static JSON):**
```jsx
import projectsData from '../data/projectsData.json'

function Projects() {
  return (
    <div>
      {projectsData.categories.map(category => (
        // render category
      ))}
    </div>
  )
}
```

**After (API):**
```jsx
import { useDataSource } from '../hooks/useDataSource'

function Projects() {
  const { data: projectsData, loading, error } = useDataSource('projects')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {projectsData.categories.map(category => (
        // render category
      ))}
    </div>
  )
}
```

### Step 4: Handle Async Data

Key considerations when migrating:
- Components will have loading and error states
- Data fetching happens asynchronously
- Consider caching strategies to avoid redundant API calls
- Implement error boundaries for graceful error handling

## Example Implementation

Here's a complete example of a refactored component:

```jsx
import { useDataSource } from '../hooks/useDataSource'
import ProjectCard from '../components/cards/ProjectCard'

function Projects() {
  const { data: projectsData, loading, error } = useDataSource('projects')

  if (loading) {
    return (
      <div className="container-fluid p-0">
        <section className="resume-section">
          <div className="resume-section-content">
            <p>Loading projects...</p>
          </div>
        </section>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container-fluid p-0">
        <section className="resume-section">
          <div className="resume-section-content">
            <p className="text-danger">Error loading projects: {error}</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="container-fluid p-0">
      {projectsData.categories.map(category => (
        <section key={category.id}>
          <h2>{category.label}</h2>
          {category.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      ))}
    </div>
  )
}

export default Projects
```

## Backend Requirements

Your backend API should:
1. Return the same data structure as the current JSON files
2. Support CORS headers if frontend and API are on different domains
3. Include proper error handling and validation
4. Implement caching strategies for performance
5. Consider implementing pagination for large datasets (e.g., 50+ projects)

## Fallback Strategy

If you want to support both API and static data:
1. The `useDataSource` hook already supports this
2. If `VITE_API_URL` is not set, it automatically uses static JSON
3. This allows gradual migration without breaking changes

## Performance Optimization

### Current (Static JSON)
- ✅ Instant data access
- ✅ No network requests
- ✅ Optimal for small portfolios
- ❌ Requires rebuild for content updates

### API-Based
- ✅ Dynamic content updates without rebuilds
- ✅ Scales to hundreds of projects
- ✅ Supports real-time updates
- ✅ Separates concerns (frontend vs backend)
- ❌ Network latency
- ❌ Requires API infrastructure

### Optimization Tips
1. **Caching**: Use browser caching and API caching headers
2. **Lazy Loading**: Load detail pages data only when needed
3. **Pagination**: Load projects/posts in batches
4. **CDN**: Serve API responses through a CDN
5. **Compression**: Enable gzip compression on API

## Rollback Plan

If you need to revert to static JSON:
1. Remove or empty `VITE_API_URL` in `.env.local`
2. The `useDataSource` hook will automatically use static data
3. No component changes needed

## Testing

Before deploying:
1. Test API responses match JSON structure
2. Test loading and error states
3. Test with slow network conditions
4. Test CORS headers if cross-origin
5. Test with different API response times

## Support for Detail Pages

For detail pages (/projects/:id, /blog/:slug), you have two options:

**Option 1: Fetch all data upfront**
```jsx
const { data: allProjects } = useDataSource('projects')
const project = allProjects.categories
  .flatMap(c => c.projects)
  .find(p => p.id === id)
```

**Option 2: Fetch individual item from API**
```jsx
const { data: project } = useDataSource(`projects/${id}`)
```

Option 2 is more efficient for large datasets and real APIs.
