# Backend Content Management System

This backend processes markdown files with YAML frontmatter and generates JSON files for the frontend.

## Setup

```bash
cd backend
pip install -r requirements.txt
```

## Usage

### Render content to JSON

```bash
# Render blog posts
invoke render-blog

# Render projects
invoke render-projects

# Render all content
invoke render-all
```

### Available commands

```bash
invoke --list
```

## Folder Structure

```
backend/
├── data/
│   ├── blog/           # Markdown files for blog posts
│   │   └── *.md
│   └── projects/       # Markdown files for projects
│       └── *.md
├── lib/
│   ├── __init__.py
│   └── render_items.py # Markdown to JSON processor
├── tasks.py            # Invoke CLI tasks
├── requirements.txt    # Python dependencies
└── README.md           # This file
```

## Markdown File Format

### Projects

```markdown
---
id: project-slug
title: "Project Title"
subtitle: "Short description"
year: "2025"
status: completed
featured: true
excerpt: "Brief excerpt for card display"
technologies: "Tech1, Tech2, Tech3"
githubUrl: "https://github.com/..."
liveUrl: "https://..."
---

## Summary
Project summary in markdown...

## Key Features
- Feature 1
- Feature 2

## Architecture
Architecture description...
```

### Blog Posts

```markdown
---
slug: post-slug
title: "Post Title"
excerpt: "Brief excerpt for card display"
author: "Author Name"
publishedDate: "Dec 2025"
readTime: "5 min read"
tags:
  - Tag1
  - Tag2
coverImage: null
---

# Introduction
Blog content in markdown...
```

## Code Syntax Highlighting

The system uses Pygments for code syntax highlighting. To generate the CSS:

```bash
pip install Pygments
pygmentize -S monokai -f html -a .codehilite > ../frontend/src/styles/pygments.css
```

## Workflow

1. Create/edit markdown files in `data/blog/` or `data/projects/`
2. Run `invoke render-blog` or `invoke render-projects`
3. JSON files are generated in `frontend/src/data/`
4. Deploy frontend as usual
