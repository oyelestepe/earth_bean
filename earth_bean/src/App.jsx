import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Hompage from "./Hompage";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
