import { useEffect, useMemo, useState } from 'react'
import './App.css'

import Home from './pages/Home.jsx'
import Manifesto from './pages/Manifesto.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

const getPath = () => {
  const hash = window.location.hash.replace(/^#/, '')
  return hash || '/'
}

export default function App() {
  const [path, setPath] = useState(getPath())

  useEffect(() => {
    const onHashChange = () => setPath(getPath())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const routes = useMemo(
    () => ({
      '/': { title: 'Home', Component: Home },
      '/manifesto': { title: 'Manifesto', Component: Manifesto },
      '/projects': { title: 'Projects', Component: Projects },
      '/labs': { title: 'Labs', Component: Services },
      '/contact': { title: 'Contact', Component: Contact },
    }),
    [],
  )

  const { Component, title } =
    routes[path] || { Component: () => <p style={{ padding: 24 }}>Page not found.</p>, title: '404' }

  useEffect(() => {
    document.title = `Architect — ${title}`
  }, [title])

  const isActive = (href) => (path === href ? 'active' : '')

  return (
    <>
      <header className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-50 bg-zinc-950 border-b-4 border-white shadow-[6px_6px_0px_0px_#FF00FF]">
        <a
          href="#/"
          className="text-3xl font-black text-white italic border-4 border-white px-2 leading-none"
          aria-current={path === '/' ? 'page' : undefined}
        >
          ARCH_CORE
        </a>
        <nav className="hidden md:flex gap-8" aria-label="Primary">
          <a
            className={`font-epilogue font-black tracking-tighter uppercase transition-all px-2 py-1 ${isActive('/manifesto') ? 'text-fuchsia-500 border-b-4 border-fuchsia-500 pb-1' : 'text-white hover:text-cyan-400 hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#00FFFF]'}`}
            href="#/manifesto"
            aria-current={path === '/manifesto' ? 'page' : undefined}
          >
            MANIFESTO
          </a>
          <a
            className={`font-epilogue font-black tracking-tighter uppercase transition-all px-2 py-1 ${isActive('/projects') ? 'text-fuchsia-500 border-b-4 border-fuchsia-500 pb-1' : 'text-white hover:text-cyan-400 hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#00FFFF]'}`}
            href="#/projects"
            aria-current={path === '/projects' ? 'page' : undefined}
          >
            PROJECTS
          </a>
          <a
            className={`font-epilogue font-black tracking-tighter uppercase transition-all px-2 py-1 ${isActive('/labs') ? 'text-fuchsia-500 border-b-4 border-fuchsia-500 pb-1' : 'text-white hover:text-cyan-400 hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#00FFFF]'}`}
            href="#/labs"
            aria-current={path === '/labs' ? 'page' : undefined}
          >
            SERVICES
          </a>
          <a
            className={`font-epilogue font-black tracking-tighter uppercase transition-all px-2 py-1 ${isActive('/contact') ? 'text-fuchsia-500 border-b-4 border-fuchsia-500 pb-1' : 'text-white hover:text-cyan-400 hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#00FFFF]'}`}
            href="#/contact"
            aria-current={path === '/contact' ? 'page' : undefined}
          >
            CONTACT
          </a>
        </nav>
        <a
          href="#/contact"
          className="font-epilogue font-black tracking-tighter uppercase bg-primary-container text-white px-6 py-2 border-2 border-white shadow-[4px_4px_0px_0px_#00FFFF] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          COMMISSION
        </a>
      </header>

      <main className="min-h-screen w-screen">
        <Component />
      </main>
    </>
  )
}
