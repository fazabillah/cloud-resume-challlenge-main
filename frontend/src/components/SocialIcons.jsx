import socialLinksData from '../data/socialLinksData.json'

function SocialIcons({ links = [] }) {
  const socialLinks = links.length > 0 ? links : socialLinksData.links

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
