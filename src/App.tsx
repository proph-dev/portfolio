import BackgroundDesktop from "./assets/img/background-desktop.jpg"
import SelectionArea from "./ui/components/selection/SelectionArea"
import Taskbar from "./ui/components/taskbar/Taskbar"

function App() {
  return (
    <main>
      <div>
        <img 
          src={BackgroundDesktop}
          alt="Desktop background"
          className="bg-desktop"
        />
        <div className="overlay"></div>
        <SelectionArea />
      </div>
      
      <Taskbar />
    </main>
  )
}

export default App
