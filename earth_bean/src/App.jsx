import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./Homepage";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
