import { Router,Route } from "react-router-dom"
import React from "react"
import Insert from "./controller/Insert"
import Home from "./controller/Home"
import Display from "./controller/Display"

function App() {


  return (
    <>
    <h1>ONE to ONE  topic</h1>
    <Router>


<Route index element={<Home/>}/>
<Route path="/insert" element={<Insert/>}/>
<Route path="/display" element={<Display/>}/>
   </Router>

 

    </>
  )
}

export default App
