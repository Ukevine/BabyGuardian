import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SolutionPage from './pages/SolutionPage'
import BlogPage from './pages/BlogPage'
import ContactsPage from './pages/ContactsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="solution" element={<SolutionPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  )
}

export default App
