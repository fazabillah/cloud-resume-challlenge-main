function BlogCard({ post }) {
  return (
    <div className="blog-card mb-4">
      <h3 className="mb-2">{post.title}</h3>
      {post.excerpt && <p className="lead mb-3">{post.excerpt}</p>}
      {post.publishedDate && (
        <div className="post-meta text-muted mb-2">
          {post.publishedDate}
          {post.readTime && ` • ${post.readTime}`}
        </div>
      )}
      {post.tags && post.tags.length > 0 && (
        <div className="post-tags mb-3">
          {post.tags.map((tag, index) => (
            <span key={index} className="badge badge-secondary mr-2">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogCard
