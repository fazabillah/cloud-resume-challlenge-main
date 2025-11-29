import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SocialIcons from '../components/SocialIcons'
import BlogCard from '../components/cards/BlogCard'
import SearchFilterBar from '../components/common/SearchFilterBar'
import EmptyState from '../components/common/EmptyState'
import blogData from '../data/blogData.json'

function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const hasPosts = blogData.posts && blogData.posts.length > 0

  // Extract available tags
  const availableTags = useMemo(() => {
    const tagSet = new Set()
    blogData.posts?.forEach(post => {
      post.tags?.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort().map(tag => ({ id: tag, label: tag }))
  }, [])

  // Filter posts based on search and tags
  const filteredPosts = useMemo(() => {
    let filtered = blogData.posts || []

    // Filter by tag
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        post.tags?.some(tag => selectedTags.includes(tag))
      )
    }

    // Filter by search (case-insensitive, multi-field)
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt?.toLowerCase().includes(searchLower) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }

    return filtered
  }, [searchTerm, selectedTags])

  const handleTagToggle = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedTags([])
  }

  return (
    <div className="container-fluid p-0">
      <section className="resume-section" id="blog">
        <div className="resume-section-content">
          <h1 className="mb-5">
            <span className="text-primary">Blog</span>
          </h1>

          {hasPosts ? (
            <>
              {/* Search & Filter Toolbar */}
              <SearchFilterBar
                searchTerm={searchTerm}
                onSearchChange={(e) => setSearchTerm(e.target.value)}
                selectedFilters={selectedTags}
                availableFilters={availableTags}
                onFilterToggle={handleTagToggle}
                onClearFilters={handleClearFilters}
                filterType="tag"
                placeholder="Search posts by title, topic, or tag..."
              />

              {/* Filtered Posts List */}
              {filteredPosts.length > 0 ? (
                <div className="mt-5">
                  {filteredPosts.map(post => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <BlogCard post={post} />
                    </Link>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon="fas fa-search"
                  message="No blog posts found"
                  suggestion="Try different search terms or clear filters"
                  onClearFilters={handleClearFilters}
                />
              )}
            </>
          ) : (
            <div className="coming-soon-banner text-center">
              <i className="fas fa-pen-fancy fa-5x mb-4 text-primary"></i>
              <h2 className="mb-4">Coming Soon</h2>
              <p className="lead mb-4">I will be sharing about my learning journey and reflection related to:</p>
              <ul className="list-unstyled mt-4">
                {blogData.comingSoonTopics.map(topic => (
                  <li key={topic.id} className="mb-2">
                    <i className={`${topic.icon} mr-2`}></i>
                    {topic.title}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <p className="mb-3">Follow me for updates:</p>
                <SocialIcons />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog
