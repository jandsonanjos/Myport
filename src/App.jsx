import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">

      <Navbar />

      <main className="max-w-6xl mx-auto px-6">

        <Profile/>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        
      </main>

    </div>
  )
}

export default App
