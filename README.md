# Cloud Resume Challenge

A complete, production-ready cloud portfolio website built with modern web technologies and AWS serverless architecture.

---

## 🚀 Live Demo

**Portfolio**: [fazabillah.com](https://fazabillah.com) (replace with your deployed URL)

**What's Deployed**:
- ✅ React 19 SPA with modern UI/UX
- ✅ Custom domain with HTTPS (CloudFront + ACM)
- ✅ Serverless view counter (Lambda + DynamoDB)
- ✅ Automated CI/CD (GitHub Actions)
- ✅ Infrastructure as Code (CloudFormation + SAM + Ansible)

---

## 🏗️ Architecture

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │ HTTPS
       ↓
┌──────────────────┐
│   Route 53 DNS   │ (fazabillah.com)
└────────┬─────────┘
         │
         ↓
┌─────────────────────┐
│  CloudFront (CDN)   │ (Global Edge Locations)
└─────────┬───────────┘
          │
     ┌────┴────┐
     │         │
     ↓         ↓
┌─────────┐  ┌──────────────────┐
│ S3      │  │ API Gateway      │
│ (React) │  │  ↓               │
└─────────┘  │ Lambda           │
             │  ↓               │
             │ DynamoDB         │
             │ (View Counter)   │
             └──────────────────┘
```

**Request Flow**:
1. User visits fazabillah.com
2. Route 53 resolves to CloudFront distribution
3. CloudFront serves cached React app from S3 (private bucket via OAC)
4. React app calls API Gateway for view counter
5. Lambda increments DynamoDB counter atomically
6. Counter displayed on page

---

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Lightning-fast build tool (rolldown bundler)
- **React Router 7** - Client-side routing
- **Bootstrap 4.5** - Responsive CSS framework

### Backend
- **AWS Lambda** - Serverless compute (Python 3.12)
- **API Gateway** - RESTful API management
- **DynamoDB** - NoSQL database (serverless)

### Infrastructure
- **AWS S3** - Static website hosting (private bucket)
- **CloudFront** - Global CDN with HTTPS
- **Route 53** - DNS management
- **ACM** - Free SSL/TLS certificates
- **CloudFormation** - Infrastructure as Code (frontend)
- **SAM** - Serverless Application Model (backend)
- **Ansible** - Deployment automation

### DevOps
- **GitHub Actions** - CI/CD pipelines
- **Ansible Vault** - Secrets management
- **AWS CLI** - Command-line infrastructure management

---

## 💰 Cost Breakdown

**First 12 Months (AWS Free Tier)**:
- S3: Free (5 GB storage, 20k GET requests)
- CloudFront: Free (1 TB data transfer)
- Lambda: Free (1M requests/month)
- DynamoDB: Free (25 GB storage)
- Route 53: $0.50/month (hosted zone)
- ACM: Free (always)
- **Domain**: $10-15/year (one-time)

**Total First Year**: ~$16-21 ($10-15 domain + $6 Route 53)

**After Free Tier**:
- S3: ~$0.50/month
- CloudFront: ~$1-3/month (moderate traffic)
- Lambda: ~$0 (minimal invocations)
- DynamoDB: ~$0 (on-demand, low usage)
- Route 53: $0.50/month
- **Total**: ~$2-5/month

---

## 🚀 Quick Start (For Developers)

### Prerequisites
- Node.js 20+ and npm 10+
- Python 3.12+
- AWS account
- Git

### Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/cloud-resume-challenge.git
cd cloud-resume-challenge

# Frontend setup
cd frontend
npm install
npm run dev
# Visit http://localhost:5173

# Local API setup (optional)
cd ../api
python3 -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
uvicorn app:app --reload
# API running at http://localhost:8000
```

### Deployment

```bash
# Install Ansible
pipx install --include-deps ansible
ansible-galaxy collection install amazon.aws community.aws

# Deploy infrastructure
cd aws
./bin/deploy              # Deploy CloudFormation stack
./bin/deploy-backend-counter  # Deploy Lambda + DynamoDB
./bin/upload              # Build React + upload to S3 + invalidate CloudFront
```

**Detailed Instructions**: See [Ansible Deployment Guide](aws/ANSIBLE_DEPLOYMENT_GUIDE.md)

---

## 📁 Project Structure

```
cloud-resume-challenge/
├── frontend/                 # React application
│   ├── src/
│   │   ├── pages/           # Page components (Resume, Projects, Blog)
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── data/            # JSON data files
│   │   └── main.jsx         # React entry point
│   ├── public/              # Static assets
│   ├── package.json         # Dependencies
│   └── vite.config.js       # Build configuration
│
├── aws/                     # Infrastructure & deployment
│   ├── frontend.yaml        # CloudFormation (S3, CloudFront, Route 53, ACM)
│   ├── backend-counter.yaml # SAM template (Lambda, API Gateway, DynamoDB)
│   ├── src/counter/         # Lambda function code
│   ├── playbooks/           # Ansible automation
│   └── bin/                 # Deployment scripts
│
├── api/                     # Local development mock API
│   ├── app.py               # FastAPI mock server
│   └── requirements.txt     # Python dependencies
│
├── CLAUDE.md                # Claude Code project instructions
├── GITHUB_GUIDE.md          # Git workflow guide
└── README.md                # This file
```

---

## 🎯 Features

### Portfolio Website
- ✅ Single Page Application (React Router)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Resume, Projects, and Blog pages
- ✅ View counter with serverless backend
- ✅ Fast global delivery (CloudFront CDN)
- ✅ Custom domain with HTTPS

### Infrastructure
- ✅ Infrastructure as Code (version-controlled)
- ✅ Secure architecture (private S3, CloudFront OAC)
- ✅ Automated deployments (one-command)
- ✅ Secrets management (Ansible Vault)
- ✅ Cost-optimized (serverless, pay-per-use)

### DevOps
- ✅ CI/CD pipeline (GitHub Actions)
- ✅ CloudWatch monitoring and logging
- ✅ CloudFront cache invalidation automation
- ✅ Multi-environment support (dev, prod)

---

## 📚 Documentation

- [Frontend README](frontend/README.md) - React app overview
- [AWS README](aws/README.md) - Infrastructure overview
- [React + Vite Guide](frontend/docs/REACT_VITE_GUIDE.md) - Frontend architecture
- [API Migration Guide](frontend/docs/API_MIGRATION_GUIDE.md) - Data architecture
- [Ansible Deployment Guide](aws/ANSIBLE_DEPLOYMENT_GUIDE.md) - Deployment automation
- [GitHub Workflow Guide](GITHUB_GUIDE.md) - Git best practices

---

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs or issues
- Suggest improvements
- Share feedback

**Submit improvements**: Open an issue or pull request on GitHub.

---

## 📝 License

This project is open source and available for educational purposes.

**MIT License** - Feel free to use this code for your own portfolio (attribution appreciated)

---

## 🙏 Acknowledgments

- **[Forrest Brazeal](https://forrestbrazeal.com/)** - Creator of the Cloud Resume Challenge
- **AWS** - Free tier makes learning accessible
- **Claude (Anthropic)** - AI assistance throughout development
- **Cloud Resume Challenge Community** - Inspiration and support

---

## 📬 Contact

**Faza Muhammad Billah**
- Portfolio: [fazabillah.com](https://fazabillah.com)
- LinkedIn: [linkedin.com/in/fazabillah](https://linkedin.com/in/fazabillah)
- GitHub: [@yourusername](https://github.com/yourusername)

---

**⭐ If you found this project helpful, please star the repository!**