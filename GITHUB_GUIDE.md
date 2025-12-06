# GitHub Best Practices Guide

**For Cloud Resume Challenge - Solo Development**

This guide provides simplified Git workflows tailored for this portfolio project, balancing professional practices with practical solo development.

---

## Recommended Workflow

### Simple Feature Branch Strategy

```bash
# 1. Create feature branch
git checkout -b feature/description

# 2. Make changes and commit
git add .
git commit -m "Clear description of changes"

# 3. Push to GitHub
git push -u origin feature/description

# 4. Merge to main when complete
git checkout main
git merge feature/description
git push

# 5. Clean up
git branch -d feature/description
git push origin --delete feature/description
```

---

## When to Use Feature Branches vs Direct Commits

### ✅ Use Feature Branches For:
- **New sections** - Adding certifications, projects, blog posts
- **Major design changes** - Redesigning navigation, layout overhauls
- **Infrastructure updates** - Terraform/CloudFormation changes, CI/CD setup
- **Refactoring** - Component restructuring, extracting custom hooks
- **Experimental features** - Anything you might want to discard

**Why?** Demonstrates professional Git workflow for your portfolio and keeps main stable.

### ✅ Commit Directly to Main For:
- **Typo fixes** - Single word corrections
- **Quick content updates** - Updating job descriptions, dates
- **Dependency updates** - `npm update` or package.json changes
- **Documentation edits** - README, comments

**Why?** Efficiency for trivial changes that don't risk breaking anything.

---

## Commit & Push Strategy

### When to Commit
- ✅ After each logical change (e.g., "add certification section")
- ✅ Before trying something experimental
- ✅ At the end of each work session
- ❌ Avoid huge commits with 20+ file changes

### When to Push
- ✅ **End of work session** (backup your work!)
- ✅ **When feature is complete** and tested
- ✅ **Before switching branches** or tasks
- ✅ **At least once per day** if working on long features

**Minimum:** Push daily to protect against local machine failure.

---

## Quick Reference Commands

### Branch Management
```bash
# Create and switch to new branch
git checkout -b feature/add-certifications

# List all branches
git branch -a

# Switch to existing branch
git checkout main

# Delete local branch (after merging)
git branch -d feature/add-certifications

# Delete remote branch
git push origin --delete feature/add-certifications
```

### Daily Workflow
```bash
# Start your day - update main
git checkout main
git pull

# Create feature branch for today's work
git checkout -b feature/update-projects-page

# Work, commit often
git add src/pages/Projects.jsx
git commit -m "Add new RAG project to portfolio"

# Push for backup
git push -u origin feature/update-projects-page

# When done - merge to main
git checkout main
git merge feature/update-projects-page
git push

# Clean up
git branch -d feature/update-projects-page
```

### Quick Fixes (Direct to Main)
```bash
# For typos and minor updates
git checkout main
git pull
# ... make quick edit ...
git add .
git commit -m "Fix typo in resume headline"
git push
```

---

## VSCode Tips

### Creating Branches
1. Click **branch name** in bottom-left status bar
2. Select **"Create new branch..."**
3. Enter name (e.g., `feature/add-blog-posts`)
4. VSCode automatically switches to new branch

### Committing Changes
1. Open **Source Control** panel (Ctrl/Cmd + Shift + G)
2. **Review diffs** - click files to see changes
3. **Stage files** - click "+" next to changed files (or stage all)
4. **Write commit message** in text box
5. Click **✓ Commit** button

### Pushing to GitHub
- Click **"Publish Branch"** for first push of new branch
- Or click **cloud icon** with up arrow in status bar
- Or use **"Sync Changes"** button

### Switching Branches
- Click **branch name** in bottom-left
- Select branch from dropdown

---

## Branch Naming Conventions

Use descriptive names with prefixes:

| Type | Example | When to Use |
|------|---------|-------------|
| `feature/` | `feature/add-contact-form` | New functionality |
| `fix/` | `fix/mobile-nav-overflow` | Bug fixes |
| `refactor/` | `refactor/extract-hooks` | Code restructuring |
| `docs/` | `docs/update-readme` | Documentation |
| `infra/` | `infra/terraform-setup` | Infrastructure/deployment |

---

## Commit Message Best Practices

### Good Format
```
Add AWS Solutions Architect certification to resume
Fix responsive layout on mobile devices
Refactor blog component to use custom hooks
Update deployment pipeline with CloudFront invalidation
```

### Poor Format
```
Changes
WIP
Fixed stuff
Updated files
```

### Template
```
[Verb] [what changed] [optional: where/why]

Examples:
Add certifications section to resume page
Fix header alignment in mobile view
Refactor Projects component for better performance
Update Terraform config for S3 bucket policy
```

---

## Workflow for This Project

### Example: Adding New Project to Portfolio

```bash
# 1. Create feature branch
git checkout main
git pull
git checkout -b feature/add-terraform-project

# 2. Edit src/pages/Projects.jsx
# Add new project card with description, tech stack, GitHub link

# 3. Commit changes
git add src/pages/Projects.jsx
git commit -m "Add Infrastructure as Code project to portfolio"

# 4. Test locally
cd frontend
npm run dev
# Verify changes look good at http://localhost:5173/projects

# 5. Push to GitHub
git push -u origin feature/add-terraform-project

# 6. Merge to main
git checkout main
git merge feature/add-terraform-project
git push

# 7. Clean up
git branch -d feature/add-terraform-project
git push origin --delete feature/add-terraform-project
```

---

## Golden Rules

1. **Commit often, push daily** - Protect your work
2. **Write clear commit messages** - Future you will thank you
3. **Test before merging to main** - Run `npm run dev` and verify changes
4. **Keep main stable** - Main should always be deployable
5. **Delete merged branches** - Keeps repository clean
6. **One feature per branch** - Easier to review and revert if needed

---

## Why This Matters for Your Career

As a DevOps/Cloud Engineer candidate, your GitHub activity demonstrates:
- **Professional Git workflow** - Shows you understand version control
- **Consistent commits** - Indicates steady work habits and attention to detail
- **Clean repository** - Reflects organizational skills
- **Commit history** - Tells the story of your project evolution

Recruiters and hiring managers often review GitHub profiles. A well-maintained repository with clear commits and professional workflow practices strengthens your candidacy.

---

## Resources

- [GitHub Docs - Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Best Practices](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)
