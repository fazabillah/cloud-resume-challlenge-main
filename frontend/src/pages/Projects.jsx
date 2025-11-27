import { useEffect } from 'react'
import SideNav from '../components/SideNav'

function Projects() {
  const navItems = [
    // Cloud Infrastructure Category
    { type: 'category', label: 'Cloud Infrastructure', icon: 'fas fa-cloud' },
    { type: 'sub-item', href: '#cloud-resume-aws', label: 'Cloud Resume - AWS' },
    { type: 'sub-item', href: '#cloud-resume-azure', label: 'Cloud Resume - Azure' },

    // DevOps & Automation Category
    { type: 'category', label: 'DevOps & Automation', icon: 'fas fa-cogs' },
    { type: 'coming-soon' },

    // Generative AI Category
    { type: 'category', label: 'Generative AI', icon: 'fas fa-brain' },
    { type: 'sub-item', href: '#genai-corrosion', label: 'GenAI RAG Corrosion-AI' },
    { type: 'sub-item', href: '#genai-contract', label: 'GenAI RAG Contract Document' },

    // Web Development Category
    { type: 'category', label: 'Web Development', icon: 'fas fa-code' },
    { type: 'coming-soon' }
  ]

  useEffect(() => {
    document.body.classList.add('has-sidebar')
    return () => {
      document.body.classList.remove('has-sidebar')
    }
  }, [])

  return (
    <>
      <SideNav navItems={navItems} brandText="Projects" />

      <div className="container-fluid p-0">
        {/* Cloud Resume Challenge - AWS */}
        <section className="resume-section" id="cloud-resume-aws">
          <div className="resume-section-content d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1 order-2 order-md-1">
              <h2 className="mb-3">Cloud Resume Challenge - AWS</h2>
              <div className="subheading mb-3">Infrastructure as Code | Serverless | CI/CD</div>

              <div className="coming-soon-banner">
                <i className="fas fa-tools fa-3x mb-3 text-primary"></i>
                <h3>Project Details Coming Soon</h3>
                <p>Detailed documentation and architecture diagrams for this project are currently in progress.</p>
              </div>

              <div className="project-summary mt-5">
                <h4 className="mb-3">Quick Overview</h4>
                <p>Built a fully serverless resume website with visitor counter, demonstrating end-to-end cloud engineering capabilities</p>
                <ul>
                  <li><strong>Frontend:</strong> Static website (HTML/CSS/JS) hosted on S3, distributed via CloudFront with custom domain and SSL/TLS certificate</li>
                  <li><strong>Backend:</strong> Python Lambda function with DynamoDB for visitor counter, exposed via API Gateway</li>
                  <li><strong>IaC:</strong> Complete infrastructure provisioned using Terraform with modular, reusable code</li>
                  <li><strong>CI/CD:</strong> Automated deployment pipeline using GitHub Actions for both frontend and backend</li>
                  <li><strong>Testing:</strong> Implemented Python unit tests and integration tests for Lambda function</li>
                </ul>
                <p><strong>Technologies:</strong> AWS (S3, CloudFront, Lambda, API Gateway, DynamoDB, Route 53, ACM), Terraform, Python, GitHub Actions</p>
              </div>
            </div>
            <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">2025</span></div>
          </div>
        </section>
        <hr className="m-0" />

        {/* Cloud Resume Challenge - Azure */}
        <section className="resume-section" id="cloud-resume-azure">
          <div className="resume-section-content d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1 order-2 order-md-1">
              <h2 className="mb-3">Cloud Resume Challenge - Azure</h2>
              <div className="subheading mb-3">Azure Infrastructure | Serverless | DevOps</div>

              <div className="coming-soon-banner">
                <i className="fas fa-tools fa-3x mb-3 text-primary"></i>
                <h3>Project Details Coming Soon</h3>
                <p>Detailed documentation and architecture diagrams for this project are currently in progress.</p>
              </div>

              <div className="project-summary mt-5">
                <h4 className="mb-3">Quick Overview</h4>
                <p>Replicated the Cloud Resume Challenge on Azure, showcasing multi-cloud expertise and Azure-native services</p>
                <ul>
                  <li><strong>Frontend:</strong> Static website hosted on Azure Storage with Azure Front Door for CDN and custom domain</li>
                  <li><strong>Backend:</strong> Azure Functions (Python) with Cosmos DB for visitor analytics</li>
                  <li><strong>IaC:</strong> Infrastructure automated using Bicep templates with modular architecture</li>
                  <li><strong>CI/CD:</strong> Azure DevOps pipelines for automated testing and deployment</li>
                  <li><strong>Monitoring:</strong> Application Insights for performance monitoring and logging</li>
                </ul>
                <p><strong>Technologies:</strong> Azure (Storage, Functions, Cosmos DB, Front Door, Key Vault), Bicep, Python, Azure DevOps</p>
              </div>
            </div>
            <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">2025</span></div>
          </div>
        </section>
        <hr className="m-0" />

        {/* GenAI RAG Corrosion-AI */}
        <section className="resume-section" id="genai-corrosion">
          <div className="resume-section-content d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1 order-2 order-md-1">
              <h2 className="mb-3">GenAI RAG Corrosion-AI</h2>
              <div className="subheading mb-3">Generative AI | RAG | Machine Learning</div>

              <div className="coming-soon-banner">
                <i className="fas fa-tools fa-3x mb-3 text-primary"></i>
                <h3>Project Details Coming Soon</h3>
                <p>Detailed documentation and architecture diagrams for this project are currently in progress.</p>
              </div>

              <div className="project-summary mt-5">
                <h4 className="mb-3">Quick Overview</h4>
                <p>Developed an AI-powered corrosion analysis platform using Retrieval-Augmented Generation (RAG) architecture for intelligent document querying and technical insights.</p>
                <ul>
                  <li><strong>AI Architecture:</strong> RAG implementation with vector database for context-aware responses</li>
                  <li><strong>ML Pipeline:</strong> LangChain integration for document processing and query handling</li>
                  <li><strong>Domain Expertise:</strong> Specialized corrosion engineering knowledge base</li>
                  <li><strong>API Development:</strong> RESTful endpoints for AI-powered analysis</li>
                </ul>
                <p><strong>Technologies:</strong> Python, LangChain, Huggingface, Vector DB, RAG, FastAPI</p>
              </div>
            </div>
            <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">2025</span></div>
          </div>
        </section>
        <hr className="m-0" />

        {/* GenAI RAG Contract Document */}
        <section className="resume-section" id="genai-contract">
          <div className="resume-section-content d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1 order-2 order-md-1">
              <h2 className="mb-3">GenAI RAG Contract Document</h2>
              <div className="subheading mb-3">Generative AI | Document Analysis | NLP</div>

              <div className="coming-soon-banner">
                <i className="fas fa-tools fa-3x mb-3 text-primary"></i>
                <h3>Project Details Coming Soon</h3>
                <p>Detailed documentation and architecture diagrams for this project are currently in progress.</p>
              </div>

              <div className="project-summary mt-5">
                <h4 className="mb-3">Quick Overview</h4>
                <p>Built an intelligent contract document analysis system using RAG to extract key information, clauses, and obligations from legal documents.</p>
                <ul>
                  <li><strong>Document Processing:</strong> Automated extraction and indexing of contract terms</li>
                  <li><strong>RAG Implementation:</strong> Context-aware question answering for contract analysis</li>
                  <li><strong>NLP Features:</strong> Entity recognition, clause extraction, and semantic search</li>
                  <li><strong>User Interface:</strong> Interactive query system for contract insights</li>
                </ul>
                <p><strong>Technologies:</strong> Python, LangChain, NLTK, Vector DB, RAG, Document AI</p>
              </div>
            </div>
            <div className="flex-shrink-0 order-1 order-md-2"><span className="text-primary">2025</span></div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects
