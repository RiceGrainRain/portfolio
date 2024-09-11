import CollegeSection from "./components/college-section"
import Hero from "./components/Hero"
import AppleCardsCarouselDemo from "./components/ui/CardCarouselDemo"
import Footer from "./components/ui/footer"
import NavbarDemo from "./components/ui/navbar-demo"
import { TimelineDemo } from "./components/ui/timeline-demo"

const App:React.FC = () => {
  return (
    <div className="bg-black text-white">
      <NavbarDemo/>
      <Hero/>
      <TimelineDemo/>
      <CollegeSection/>
      <AppleCardsCarouselDemo/>
      <Footer/>
    </div>
  )
}

export default App
