import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Contact />
    </div>
  )
}
