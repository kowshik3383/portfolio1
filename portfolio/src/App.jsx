import AboutSection from "./components/About"
import ContactSection from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HorizontalScroll from "./components/HorizontalScroll"
import Work from "./components/Work"


function App() {

  return (
      <>
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="projects">
        <HorizontalScroll />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}

export default App
