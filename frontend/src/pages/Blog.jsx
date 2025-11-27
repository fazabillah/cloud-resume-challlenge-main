import SocialIcons from '../components/SocialIcons'

function Blog() {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section" id="blog">
        <div className="resume-section-content">
          <h1 className="mb-5">
            <span className="text-primary">Blog</span>
          </h1>

          <div className="coming-soon-banner text-center">
            <i className="fas fa-pen-fancy fa-5x mb-4 text-primary"></i>
            <h2 className="mb-4">Coming Soon</h2>
            <p className="lead mb-4">I will be sharing about my learning journey and reflection related to:-</p>
            <ul className="list-unstyled mt-4">
              <li className="mb-2"><i className="fas fa-check text-success mr-2"></i> Cloud Architecture</li>
              <li className="mb-2"><i className="fas fa-check text-success mr-2"></i> Infrastructure as Code</li>
              <li className="mb-2"><i className="fas fa-check text-success mr-2"></i> DevOps Practices</li>
              <li className="mb-2"><i className="fas fa-check text-success mr-2"></i> Career Transition Stories</li>
              <li className="mb-2"><i className="fas fa-check text-success mr-2"></i> Project Walkthroughs</li>
            </ul>

            <div className="mt-5">
              <p className="mb-3">Follow me for updates:</p>
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
