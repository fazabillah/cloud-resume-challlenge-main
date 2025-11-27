import { useEffect } from 'react'
import SideNav from '../components/SideNav'
import SocialIcons from '../components/SocialIcons'

function Resume() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Technical Skills' },
    { href: '#projects', label: 'Project Portfolio' },
    { href: '#experience', label: 'Work Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#education', label: 'Education' }
  ]

  useEffect(() => {
    document.body.classList.add('has-sidebar')
    return () => {
      document.body.classList.remove('has-sidebar')
    }
  }, [])

  return (
    <>
      <SideNav navItems={navItems} brandText="Faza Muhammad Billah" />

      <div className="container-fluid p-0">
        {/* About */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Faza Muhammad
              <span className="text-primary"> Billah</span>
            </h1>
            <div className="subheading mb-5">
              Malaysia · (+60)13-5130171 ·
              <a href="mailto:fazabillah@gmail.com">fazabillah@gmail.com</a>
            </div>
            <p className="lead mb-5">
              Aspiring DevOps/Cloud Engineer with 9+ years of project engineering experience transitioning to cloud infrastructure and DevOps practices. Experience in process automation, system optimization, and cross-functional team coordination. Currently completing Cloud Resume Challenge Bootcamp (AWS & Azure) and DevOps program. Seeking to leverage project management background, technical problem-solving skills, and hands-on cloud/DevOps training to deliver scalable, automated infrastructure solutions.
            </p>
            <SocialIcons />
          </div>
        </section>
        <hr className="m-0" />

        {/* Technical Skills */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Technical Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item"><i className="fab fa-aws"></i></li>
              <li className="list-inline-item"><i className="fab fa-python"></i></li>
              <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
              <li className="list-inline-item"><i className="fab fa-react"></i></li>
              <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
              <li className="list-inline-item"><i className="fab fa-docker"></i></li>
              <li className="list-inline-item"><i className="fab fa-git-alt"></i></li>
              <li className="list-inline-item"><i className="fab fa-github"></i></li>
              <li className="list-inline-item"><i className="fab fa-jenkins"></i></li>
              <li className="list-inline-item"><i className="fab fa-linux"></i></li>
            </ul>
            <div className="subheading mb-3">Cloud & DevOps (In Progress)</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>Cloud Platforms:</strong> AWS (S3, CloudFront, Lambda, API Gateway, DynamoDB, Route 53, ACM), Azure (Storage, Functions, Cosmos DB, Front Door)
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>Infrastructure as Code:</strong> Terraform, CloudFormation, Bicep, Ansible
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>DevOps Tools:</strong> Git, Docker, Kubernetes, Jenkins, CI/CD pipelines
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>Programming & Scripting:</strong> Python, JavaScript, React, Node.js, Bash scripting
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>API Development:</strong> RESTful APIs, Serverless architectures, FastAPI, LangServe
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>Monitoring & Logging:</strong> CloudWatch, Azure Monitor
              </li>
            </ul>
            <div className="subheading mb-3">Data, Machine Learning & Project Management</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>Data Analytics:</strong> Python (Pandas, NumPy), Excel (Advanced), Power BI, Google Looker
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>Machine Learning:</strong> TensorFlow 2.0, NLTK, LangChain, Huggingface, RAG with VectorDB
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                <strong>Project Management:</strong> Scrum methodologies (PSM II certified), JIRA, MS Project
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        {/* Project Portfolio */}
        <section className="resume-section" id="projects">
          <div className="resume-section-content">
            <h2 className="mb-5">Project Portfolio</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 order-2 order-md-1">
                <h3 className="mb-0">Multi-Cloud Portfolio Website</h3>
                <div className="subheading mb-3"><a href="https://github.com/fazabillah/">GitHub: Coming Soon...</a></div>
                <ul>
                  <li>Deploying multi-cloud resume websites across AWS and Azure</li>
                  <li>Implementing Infrastructure as Code using Terraform, CloudFormation, and Bicep</li>
                  <li>Building serverless visitor counter APIs with Lambda, Azure Functions, and Cloud Functions</li>
                  <li>Configuring custom domain, SSL/TLS certificates, and CDN for optimal performance</li>
                  <li>Automating deployments and managing cloud resources programmatically</li>
                </ul>
              </div>
              <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">2025 (In Progress)</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 order-2 order-md-1">
                <h3 className="mb-0">Gen-AI RAG on Material Corrosion Inspection (MCI) Engineering Consultant</h3>
                <div className="subheading mb-3"><a href="https://github.com/fazabillah/corrosion-AI-tools">GitHub: fazabillah/corrosion-AI-tools</a></div>
                <ul>
                  <li>Developed intelligent assistant for Materials, Corrosion, and Integrity (MCI) engineering based on API 571, 970, and 584 standards</li>
                  <li>Implemented RAG architecture using Pinecone vector database for semantic search across API documentation</li>
                  <li>Integrated Groq API (Llama 3.1-8B) with LangChain framework for context-aware technical consultations</li>
                  <li>Incorporated Tavily API for real-time web search integration and latest industry information</li>
                  <li>Utilized HuggingFace embeddings for enhanced semantic understanding of technical documentation</li>
                  <li><strong>Stack:</strong> Python, Streamlit, LangChain, Pinecone, Groq API, Plotly, Pandas, HuggingFace</li>
                </ul>
              </div>
              <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">2025</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 order-2 order-md-1">
                <h3 className="mb-0">Gen-AI RAG Contract Document Review Application</h3>
                <div className="subheading mb-3"><a href="https://github.com/fazabillah/">GitHub: Coming Soon...</a></div>
                <ul>
                  <li>Developed RAG-based document processing system for analyzing company contracts</li>
                  <li>Integrated Pinecone vector database for semantic search across large document repositories</li>
                  <li>Implemented NLP pipelines using LangChain and Huggingface models</li>
                  <li>Created automated data extraction workflows reducing manual review time by 60%</li>
                </ul>
              </div>
              <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">2025</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 order-2 order-md-1">
                <h3 className="mb-0">Real Estate Data Analytics Project</h3>
                <div className="subheading mb-3"><a href="https://github.com/fazabillah/Project_DA_RealEstate">GitHub: fazabillah/Project_DA_RealEstate</a></div>
                <ul>
                  <li>Conducted comprehensive data analysis on real estate market trends using Python (Pandas, NumPy, Matplotlib, Seaborn)</li>
                  <li><strong>Stack:</strong> Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook, Statistical Analysis</li>
                </ul>
              </div>
              <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">2025</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 order-2 order-md-1">
                <h3 className="mb-0">Process Automation & System Optimization Projects</h3>
                <div className="subheading mb-3">Internal Company Project</div>
                <ul>
                  <li>Developed Excel-based tracking systems and dashboards improving project completion rates by 15-20%</li>
                  <li>Created automated finance tracking dashboards reducing late invoice issuance by 20%</li>
                </ul>
              </div>
              <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">2018</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* Work Experience */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Work Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 order-2 order-md-1">
                <h3 className="mb-0">Senior Project Engineer</h3>
                <div className="subheading mb-3">AHT Syngas Technology N.V. | Renewable Energy Industry | GERMANY</div>
                <p>Building workflows and standardized processes for complex infrastructure energy projects</p>
                <p><strong>Transferrable Skills:</strong></p>
                <ul>
                  <li>DevOps pipeline automation and infrastructure orchestration</li>
                  <li>Leading cross-functional technical teams through systematic deployment procedures mirrors the collaborative nature of DevOps culture where reliability engineers work across development, operations, and security teams</li>
                </ul>
              </div>
              <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">Apr 2025 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 order-2 order-md-1">
                <h3 className="mb-0">Senior Project Engineer</h3>
                <div className="subheading mb-3">Ankaa Consulting Sdn Bhd | Oil & Gas Industry | MALAYSIA</div>
                <p>Transformed manual, error-prone tracking processes into automated systems</p>
                <p><strong>Transferrable Skills:</strong></p>
                <ul>
                  <li>The same mindset needed for CI/CD pipeline development</li>
                  <li>Coordinating 10 engineering disciplines shows how to orchestrate complex dependencies between services, similar to managing microservices architectures in cloud environments</li>
                </ul>
              </div>
              <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">Oct 2023 - Mar 2025</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 order-2 order-md-1">
                <h3 className="mb-0">Project Engineer</h3>
                <div className="subheading mb-3">PETRONAS Carigali Sdn Bhd | Oil & Gas Industry | MALAYSIA</div>
                <p>Managed high-stakes national oil & gas supply where downtime meant millions in losses in productions and revenues</p>
                <p><strong>Transferrable Skills:</strong></p>
                <ul>
                  <li>Similar pressure to maintaining 99.99% uptime in production environments</li>
                  <li>Built automation tools that increased team efficiency by 20%, proving my instinct to eliminate repetitive manual work through scripting and tooling</li>
                  <li>Led systematic commissioning procedures with zero-defect tolerance, mirroring the rigorous testing and validation required in infrastructure-as-code deployments</li>
                  <li>Coordinated distributed teams of 200+ personnel, developing the communication and collaboration skills essential for managing cloud resources across regions and teams</li>
                </ul>
              </div>
              <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">Jan 2016 - Aug 2022</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* Certifications */}
        <section className="resume-section" id="certifications">
          <div className="resume-section-content">
            <h2 className="mb-5">Certifications & Training</h2>

            <div className="subheading mb-3">In Progress</div>
            <ul className="fa-ul mb-4">
              <li>
                <span className="fa-li"><i className="fas fa-certificate text-warning"></i></span>
                Azure Developer Associate (AZ-204) | Microsoft
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-certificate text-warning"></i></span>
                Terraform Associate (004) | HashiCorp
              </li>
            </ul>

            <div className="subheading mb-3">Completed Certifications</div>
            <ul className="fa-ul mb-4">
              <li>
                <span className="fa-li"><i className="fas fa-certificate text-success"></i></span>
                Professional Scrum Master™ II (PSM II) | Scrum.Org | 2024
              </li>
            </ul>

            <div className="subheading mb-3">Training & Bootcamps</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li"><i className="fas fa-graduation-cap"></i></span>
                Cloud Resume Challenge Bootcamp | ExamPro.Co | 2025
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-graduation-cap"></i></span>
                Generative AI & Machine Learning Bootcamp | DTSense Academy | 2025
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-graduation-cap"></i></span>
                Data Analytics Bootcamp | DTSense Academy | 2025
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-graduation-cap"></i></span>
                Business Intelligence with Google Looker | DTSense Academy | 2025
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        {/* Education */}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Universiti Teknologi PETRONAS</h3>
                <div className="subheading mb-3">Bachelor of Engineering (Hons) Civil</div>
                <p>Malaysia</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">2015</span></div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Resume
