import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PerformanceMonitor from './components/PerformanceMonitor'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import HowToApply from './pages/HowToApply'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Gallery from './pages/Gallery'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <PerformanceMonitor />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <App />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "how-it-works", element: <HowItWorks /> },
      { path: "how-to-apply", element: <HowToApply /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
