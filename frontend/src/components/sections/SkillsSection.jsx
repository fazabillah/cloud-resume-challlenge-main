function SkillsSection({ devIcons, skillCategories }) {
  return (
    <>
      {/* Dev Icons */}
      {devIcons && devIcons.length > 0 && (
        <>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons mb-4">
            {devIcons.map((item, index) => (
              <li className="list-inline-item" key={index}>
                <i className={item.icon} title={item.label}></i>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Skill Categories */}
      {skillCategories && skillCategories.map((category, catIndex) => (
        <div key={catIndex}>
          <div className="subheading mb-3">{category.title}</div>
          <ul className="fa-ul mb-4">
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                <strong>{skill.label}:</strong> {skill.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default SkillsSection
