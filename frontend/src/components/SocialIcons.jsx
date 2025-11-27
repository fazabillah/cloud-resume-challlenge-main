function SocialIcons({ links = [] }) {
  // Default links if none provided
  const defaultLinks = [
    { platform: 'linkedin', url: 'https://linkedin.com/in/fazabillah', icon: 'fab fa-linkedin-in' },
    { platform: 'github', url: 'https://github.com/fazabillah', icon: 'fab fa-github' }
  ]

  const socialLinks = links.length > 0 ? links : defaultLinks

  return (
    <div className="social-icons">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          className="social-icon"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.platform}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
