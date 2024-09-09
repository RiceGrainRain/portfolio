import Hero from "./components/Hero"
import NavbarDemo from "./components/ui/navbar-demo"
import { TimelineDemo } from "./components/ui/timeline-demo"

const App:React.FC = () => {
  return (
    <div className="bg-black text-white">
      <NavbarDemo/>
      <Hero/>
      <TimelineDemo/>
    </div>
  )
}

export default App
