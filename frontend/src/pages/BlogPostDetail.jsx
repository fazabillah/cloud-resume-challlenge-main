import { useParams, useNavigate } from 'react-router-dom'
import blogData from '../data/blogData.json'
import BackButton from '../components/common/BackButton'
import NotFoundSection from '../components/common/NotFoundSection'
import useBodyClass from '../hooks/useBodyClass'

function BlogPostDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  // Remove 'has-sidebar' class for full-width layout
  useBodyClass('has-sidebar', false)

  // Find post by slug from flat array
  const post = blogData.find(p => p.slug === slug)

  if (!post) {
    return (
      <NotFoundSection
        onBack={() => navigate('/blog')}
        backLabel="Back to Blog"
        title="Post Not Found"
        message="The blog post you're looking for doesn't exist."
      />
    )
  }

  return (
    <div className="container-fluid p-0">
      <section className="resume-section">
        <div className="resume-section-content">
          <BackButton onClick={() => navigate('/blog')} label="Back to Blog" />

          <h1 className="mb-3">{post.title}</h1>
          {post.author && (
            <div className="post-author text-muted mb-3">By {post.author}</div>
          )}
          <div className="post-meta text-muted mb-4">
            {post.publishedDate}
            {post.readTime && ` • ${post.readTime}`}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="post-tags mb-4">
              {post.tags.map((tag, index) => (
                <span key={index} className="badge badge-secondary mr-2">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="img-fluid mb-4 img-responsive"
            />
          )}

          {/* Render pre-built HTML content */}
          {post.body_html && (
            <div
              className="post-content markdown-content"
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default BlogPostDetail
