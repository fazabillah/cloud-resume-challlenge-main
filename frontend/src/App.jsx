import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Blog from './pages/Blog'
import BlogPostDetail from './pages/BlogPostDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Resume />} />
          <Route path="resume" element={<Navigate to="/" replace />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
