import { useState } from "react"
function App() {
  console.log("Rendering App");
  const [color, setColor] = useState("olive");

  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      
          <button onClick={() => setColor("red")}>
            red
          </button>
          <button onClick={() => setColor("blue")} >
            blue
          </button>
          <button onClick={() => setColor("green")} style={{backgroundColor: "green"}}>
            green
          </button>
        
    </div>
    </>
  )
}

export default App