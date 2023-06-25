
import Navbar from "@/scenes/navbar"
import Home from "./scenes/home"
import Benefits from "./scenes/benefits"
import { SelectedPage } from "./shared/types"
import { useState } from "react"
function App() {
 const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
 <div className="app bg-gray-20">
 <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
 <Home setSelectedPage={setSelectedPage} />
 <Benefits setSelectedPage={setSelectedPage}/>
 </div>
  )
}

export default App
