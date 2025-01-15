import Taskbar from "./ui/components/taskbar/Taskbar"
import BackgroundDesktop from "./assets/img/background-desktop.webp"

function App() {
  return (
    <main>
      <img 
        src={BackgroundDesktop}
        alt="Desktop background"
        className="bg-desktop"
      />
      <div className="overlay"></div>
      <Taskbar />
    </main>
  )
}

export default App
