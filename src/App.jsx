import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Models from './components/Models'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Models />
      <CTA />
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Veloz Motors. All rights reserved.</p>
          <div className="text-white/60 text-sm">Designed for the open road.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
