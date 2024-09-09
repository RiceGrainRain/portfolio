import Hero from "./components/Hero"
import { TimelineDemo } from "./components/ui/timeline-demo"

const App:React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Hero/>
      <TimelineDemo/>
    </div>
  )
}

export default App
